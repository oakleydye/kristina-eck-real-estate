import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description: "Contact Kristina Eck Real Estate Team. Call us at (435) 757-7259, email kristina@kwlogan.com, or visit our office at 33 North Main, Logan, UT. We're here to help with all your real estate needs.",
  keywords: ["contact real estate agent", "real estate consultation", "schedule showing", "contact realtor", "Logan Utah realtor"],
  openGraph: {
    title: "Contact Kristina Eck Real Estate Team",
    description: "Get in touch with our team. Call (435) 757-7259 or visit us at 33 North Main, Logan, UT 84321. Monday-Friday 9AM-6PM.",
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
