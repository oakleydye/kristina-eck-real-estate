import { NextRequest, NextResponse } from "next/server";
import { request as httpsReq } from "node:https";
import { request as httpReq } from "node:http";

// Use Node's native http/https module to avoid undici's Content-Length bug,
// and follow redirects manually (node:http doesn't do this automatically).
function jsonPost(
  url: string,
  data: unknown,
  redirects = 0
): Promise<{ ok: boolean; json: () => Promise<unknown> }> {
  if (redirects > 5) return Promise.reject(new Error("Too many redirects"));

  const body = Buffer.from(JSON.stringify(data), "utf-8");
  const parsed = new URL(url);
  const isHttps = parsed.protocol === "https:";
  const mod = isHttps ? httpsReq : httpReq;

  return new Promise((resolve, reject) => {
    const req = mod(
      {
        hostname: parsed.hostname,
        port: parsed.port || undefined,
        path: parsed.pathname + parsed.search,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": body.byteLength,
        },
      },
      (res) => {
        const status = res.statusCode ?? 500;

        if (status >= 300 && status < 400 && res.headers.location) {
          res.resume(); // drain so the socket can be reused
          const next = new URL(res.headers.location, url).href;
          resolve(jsonPost(next, data, redirects + 1));
          return;
        }

        const chunks: Buffer[] = [];
        res.on("data", (c: Buffer) => chunks.push(c));
        res.on("end", () => {
          const text = Buffer.concat(chunks).toString("utf-8");
          resolve({
            ok: status >= 200 && status < 300,
            json: async () => JSON.parse(text),
          });
        });
        res.on("error", reject);
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

function createEmailHTML(
  name: string,
  email: string,
  phone: string | undefined,
  message: string
): string {
  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Inquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f0eb; }
    .container { background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
    .header { border-bottom: 3px solid #8b6f4e; padding-bottom: 20px; margin-bottom: 30px; }
    .header h1 { color: #8b6f4e; margin: 0; font-size: 22px; }
    .header p { color: #6b7280; margin: 6px 0 0; font-size: 14px; }
    .field { margin-bottom: 20px; }
    .field-label { font-weight: 600; color: #6b5742; margin-bottom: 5px; display: block; text-transform: uppercase; font-size: 11px; letter-spacing: 0.8px; }
    .field-value { background-color: #faf8f6; padding: 12px; border-radius: 4px; border-left: 4px solid #8b6f4e; margin: 0; }
    .message-field .field-value { white-space: pre-wrap; min-height: 80px; }
    .contact-info { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e0da; color: #9ca3af; font-size: 13px; text-align: center; }
    @media (max-width: 600px) { .contact-info { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Inquiry</h1>
      <p>Kristina Eck Real Estate &mdash; Contact Form</p>
    </div>
    <div class="contact-info">
      <div class="field">
        <span class="field-label">Name</span>
        <div class="field-value">${name}</div>
      </div>
      <div class="field">
        <span class="field-label">Email</span>
        <div class="field-value"><a href="mailto:${email}" style="color:#8b6f4e;text-decoration:none;">${email}</a></div>
      </div>
    </div>
    <div class="field">
      <span class="field-label">Phone</span>
      <div class="field-value">${phone ? `<a href="tel:${phone}" style="color:#8b6f4e;text-decoration:none;">${phone}</a>` : "Not provided"}</div>
    </div>
    <div class="field message-field">
      <span class="field-label">Message</span>
      <div class="field-value">${message}</div>
    </div>
    <div class="footer">
      <p>Submitted via kristinaeckrealestate.com contact form</p>
      <p>Received on ${timestamp}</p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const html = createEmailHTML(name, email, phone, message);
    const text = `New Contact Inquiry — Kristina Eck Real Estate\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}\n\nReceived on: ${new Date().toLocaleString()}`;

    
    if (!process.env.EMAIL_API_URL || !process.env.CONTACT_EMAIL) {
      console.error("Missing required environment variables");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }
    
    const apiBase = process.env.EMAIL_API_URL;
    const response = await jsonPost(`${apiBase}/api/contact`, {
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Inquiry from ${name}`,
      html,
      text,
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Email API error:", err);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    // Fire and forget — don't block the response for contact/segment registration.
    void (async () => {
      try {
        const nameParts = name.trim().split(/\s+/);
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : undefined;

        await new Promise((r) => setTimeout(r, 500)); // slight delay to ensure email goes through first
        
        const contactRes = await jsonPost(`${apiBase}/api/contacts`, {
          email, firstName, lastName,
        });

        if (!contactRes.ok) {
          console.error("Failed to create contact:", await contactRes.json());
          return;
        }

        const segmentId = process.env.RESEND_SEGMENT_ID;
        if (!segmentId) return;

        // Brief pause so the contact-create and segment-add don't hit Resend's
        // rate limit back-to-back.
        await new Promise((r) => setTimeout(r, 1000));

        const segRes = await jsonPost(`${apiBase}/api/contacts/segments`, {
          email, segmentId,
        });
        if (!segRes.ok) {
          console.error("Failed to add contact to segment:", await segRes.json());
        }
      } catch (err) {
        console.error("Contact/segment registration error:", err);
      }
    })();

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error in contact API:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
