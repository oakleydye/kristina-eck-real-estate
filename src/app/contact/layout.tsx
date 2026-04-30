import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kristina Eck Real Estate Logan UT",
  description: "Contact Kristina Eck Real Estate Team in Logan, UT. Call (435) 757-7259 or visit 33 North Main. Free consultations for Cache Valley buyers & sellers.",
  keywords: ["contact realtor Logan Utah", "Cache Valley real estate agent", "schedule showing Logan UT", "real estate consultation Cache Valley"],
  openGraph: {
    title: "Contact Kristina Eck Real Estate Team",
    description: "Contact us in Logan, UT. Call (435) 757-7259 or visit 33 North Main. Free consultations for Cache Valley buyers & sellers.",
    images: ["/images/hero.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
