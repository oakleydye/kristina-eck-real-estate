import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { defaultMetadata, generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

// Elegant serif for headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Classic serif for body text
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${lora.variable} antialiased flex flex-col min-h-screen`}
      >
        <Analytics />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
