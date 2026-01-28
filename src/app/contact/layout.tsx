import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description: "Contact Kristina Eck Real Estate Team. Call us at (555) 123-4567, email info@kristinaeck.com, or visit our office at 123 Main Street. We're here to help with all your real estate needs.",
  keywords: ["contact real estate agent", "real estate consultation", "schedule showing", "contact realtor"],
  openGraph: {
    title: "Contact Kristina Eck Real Estate Team",
    description: "Get in touch with our team. Call (555) 123-4567 or visit us at 123 Main Street. Monday-Friday 9AM-6PM.",
    images: ["/images/_MG_4395EditF.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
