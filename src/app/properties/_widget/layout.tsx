import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Search Widgets | IDX Broker Integration",
  description: "Search for properties using our interactive IDX Broker widgets. Browse MLS listings with map search, omnisearch, and advanced filtering tools.",
  keywords: ["property search", "IDX widgets", "interactive property search", "map search", "MLS search tools"],
};

export default function WidgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
