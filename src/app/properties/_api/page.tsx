import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, Building2, MapPin, Bed, Bath, Square, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { idxBroker, formatPrice, getPrimaryImage } from "@/lib/idx-broker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MLS Property Listings (API) | Live Real Estate Inventory",
  description: "Browse live MLS property listings powered by IDX Broker API. Real-time updates of available homes, condos, and estates for sale. Custom search and filtering available.",
  keywords: ["MLS listings", "IDX broker", "live property listings", "real-time property search", "API property data"],
};

export const dynamic = 'force-dynamic';
export const revalidate = 300; // Revalidate every 5 minutes

export default async function PropertiesAPIPage() {
  // Test connection first
  const connectionOk = await idxBroker.testConnection();

  // Try to get saved links and fetch properties from the first one
  let properties: any[] = [];
  let savedLinks: any[] = [];

  if (connectionOk) {
    properties = await idxBroker.getPropertiesFromSavedLink('20002');
  }

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              API Integration
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Available Properties (IDX Broker API)
            </h1>
            <p className="text-lg text-muted-foreground">
              Live property listings from MLS via IDX Broker API integration.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by location, property type..."
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline" className="md:w-auto">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {properties.length === 0 ? (
            <div className="text-center py-20">
              <Home className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {connectionOk ? 'No MLS Properties Found' : 'API Connection Issue'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {connectionOk
                  ? savedLinks.length === 0
                    ? 'Your API is connected, but you need to create a Saved Link in IDX Broker to display MLS properties.'
                    : 'No properties found in your saved link. The search may not have any results.'
                  : 'Please configure your IDX Broker API credentials in the .env file.'}
              </p>
              {!connectionOk && (
                <div className="max-w-md mx-auto text-left bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Add to your .env file:</p>
                  <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
{`IDX_BROKER_API_KEY="your-api-key"`}
                  </pre>
                </div>
              )}
              {connectionOk && savedLinks.length === 0 && (
                <div className="max-w-2xl mx-auto text-left bg-muted/30 p-6 rounded-lg">
                  <p className="text-sm font-semibold text-foreground mb-4">How to create a Saved Link to display MLS properties:</p>
                  <ol className="text-sm text-muted-foreground space-y-3 list-decimal list-inside ml-2">
                    <li>
                      Log in to <a href="https://middleware.idxbroker.com/mgmt/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">IDX Broker Dashboard</a>
                    </li>
                    <li>
                      Go to <strong className="text-foreground">MLS Data → Saved Links</strong>
                    </li>
                    <li>
                      Click <strong className="text-foreground">Create New Saved Link</strong>
                    </li>
                    <li>
                      Set up your search criteria (e.g., "All Active Residential" with property type, status, etc.)
                    </li>
                    <li>
                      Name it something like "All Active Properties" or "Featured Homes"
                    </li>
                    <li>
                      Save the link - it will automatically appear here once created
                    </li>
                  </ol>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    Note: Saved Links are essentially saved search queries that define which MLS properties to display on your website.
                  </p>
                </div>
              )}
              {connectionOk && savedLinks.length > 0 && (
                <div className="max-w-md mx-auto text-left bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-foreground mb-2">Using Saved Link:</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {savedLinks[0].name || `Link ID: ${savedLinks[0].id}`}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Adjust the search criteria in IDX Broker dashboard to see different properties.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {properties.length} properties from IDX Broker
                  {savedLinks.length > 0 && (
                    <span className="ml-2">
                      (Saved Link: <strong className="text-foreground">{savedLinks[0].name || savedLinks[0].id}</strong>)
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property) => {
                  const primaryImage = getPrimaryImage(property);
                  const Icon = property.propType?.toLowerCase().includes('condo') ? Building2 : Home;

                  return (
                    <Card key={property.idxID} className="overflow-hidden hover:shadow-xl transition-shadow">
                      {primaryImage ? (
                        <div className="relative h-48 w-full">
                          <Image
                            src={primaryImage}
                            alt={property.address}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      ) : (
                        <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <Icon className="h-16 w-16 text-primary/50" />
                        </div>
                      )}

                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                            {property.propStatus || 'For Sale'}
                          </Badge>
                          <span className="text-2xl font-bold text-primary">
                            {formatPrice(property.listPrice)}
                          </span>
                        </div>
                        <CardTitle className="line-clamp-1">{property.address}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-2">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="line-clamp-1">
                            {property.cityName}, {property.state} {property.zipcode}
                          </span>
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                          {property.beds && (
                            <div className="flex items-center gap-1">
                              <Bed className="h-4 w-4" />
                              <span>{property.beds} bd</span>
                            </div>
                          )}
                          {property.totalBaths && (
                            <div className="flex items-center gap-1">
                              <Bath className="h-4 w-4" />
                              <span>{property.totalBaths} ba</span>
                            </div>
                          )}
                          {property.sqFt && (
                            <div className="flex items-center gap-1">
                              <Square className="h-4 w-4" />
                              <span>{parseInt(property.sqFt).toLocaleString()} sqft</span>
                            </div>
                          )}
                        </div>

                        {property.remarksConcat && (
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {property.remarksConcat}
                          </p>
                        )}

                        <Button className="w-full" variant="outline" asChild>
                          <Link href={property.fullDetailsURL || property.detailsURL || '/contact'}>
                            View Details
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              API Integration Active
            </h2>
            <p className="text-muted-foreground">
              This page displays live property data from IDX Broker via API integration. Properties are
              automatically synced from your MLS and updated regularly.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button variant="outline" asChild>
                <Link href="/properties/widget">View Widget Version</Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
