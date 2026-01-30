import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Available Properties | Browse Homes for Sale",
  description: "Search and browse available properties with Kristina Eck Real Estate Team. View MLS listings, featured homes, condos, and estates. Find your perfect property today.",
  keywords: ["homes for sale", "property listings", "MLS", "real estate listings", "houses for sale", "condos for sale"],
  openGraph: {
    title: "Browse Available Properties for Sale",
    description: "Search and browse available properties. View MLS listings and featured homes with Kristina Eck Real Estate Team.",
  },
};

export default function PropertiesPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              Live MLS Listings
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Available Properties
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse the newest MLS listings in Cache Valley and Bear Lake. Search, filter, and find your perfect home.
            </p>
          </div>
        </div>
      </section>

      {/* IDX Property Listings */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Property Search</CardTitle>
                <CardDescription>
                  Search and browse available properties from the MLS. Use the filters below to refine your search.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <iframe
                  src="https://kristinaeckteam.idxbroker.com/i/newest-listings"
                  width="100%"
                  height="1050"
                  frameBorder="0"
                  className="border-0 rounded-lg shadow-sm"
                  title="IDX Property Listings"
                  style={{
                    backgroundColor: 'transparent',
                  }}
                />
                <p className="text-xs text-muted-foreground mt-4">
                  <strong>Want to customize the look?</strong> Visit{' '}
                  <a
                    href="https://middleware.idxbroker.com/mgmt/design/sitestyles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    IDX Dashboard → Design → Site Styles
                  </a>
                  {' '}to match colors and fonts to your site theme.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground">
              We have access to exclusive listings and off-market properties. Contact us today to discuss your specific needs and let us help you find your dream home.
            </p>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
