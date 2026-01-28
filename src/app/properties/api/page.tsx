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
  // Fetch properties from IDX Broker API
  const properties = await idxBroker.getActiveProperties(50);

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
                No properties available
              </h3>
              <p className="text-muted-foreground mb-6">
                Please configure your IDX Broker API credentials in the .env file.
              </p>
              <div className="max-w-md mx-auto text-left bg-muted/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Add to your .env file:</p>
                <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
{`IDX_BROKER_API_KEY="your-api-key"
IDX_BROKER_PARTNER_KEY="your-partner-key"
IDX_BROKER_ACCOUNT_ID="your-account-id"`}
                </pre>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6 text-sm text-muted-foreground">
                Showing {properties.length} properties from IDX Broker
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
