import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { defaultMetadata, generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import RecaptchaProvider from "./recaptcha_provider";

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
        {/* Tag manager setup */}
        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WFS5BM5Z');
            `
        }}>
        </Script>

        {/* Analytics tag */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-59L53VL8VH" strategy="afterInteractive" />
        <Script id="google-analytics-config" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-59L53VL8VH');
          `
        }} />

        {/* Ads tag */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CVYVLGCEXX" strategy="afterInteractive" />
        <Script id="google-analytics-config" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-CVYVLGCEXX');
          `
        }} />
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
        <RecaptchaProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
