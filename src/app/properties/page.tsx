import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, Building2, MapPin, Bed, Bath, Square, Search, SlidersHorizontal, Code, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
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
  // Show demo properties and integration options
  const properties = [
    {
      id: 1,
      title: "Modern Family Home",
      price: 525000,
      address: "123 Oak Street, Suburbia",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2400,
      type: "House",
      status: "For Sale",
      icon: Home,
    },
    {
      id: 2,
      title: "Charming Cottage",
      price: 425000,
      address: "456 Maple Avenue, Downtown",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      type: "House",
      status: "For Sale",
      icon: Home,
    },
    {
      id: 3,
      title: "Luxury Estate",
      price: 675000,
      address: "789 Pine Drive, Hillside",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 3200,
      type: "House",
      status: "For Sale",
      icon: Building2,
    },
    {
      id: 4,
      title: "Downtown Condo",
      price: 325000,
      address: "321 City Center, Urban District",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      type: "Condo",
      status: "For Sale",
      icon: Building2,
    },
    {
      id: 5,
      title: "Suburban Retreat",
      price: 485000,
      address: "654 Elm Street, Greenfield",
      bedrooms: 4,
      bathrooms: 2.5,
      sqft: 2100,
      type: "House",
      status: "For Sale",
      icon: Home,
    },
    {
      id: 6,
      title: "Lakefront Property",
      price: 750000,
      address: "987 Lake Road, Waterside",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      type: "House",
      status: "For Sale",
      icon: Home,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Available Properties
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our extensive collection of homes and find your perfect match.
            </p>
          </div>
        </div>
      </section>

      {/* IDX Integration Options */}
      <section className="py-12 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              IDX Broker Integration Options
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">Recommended</Badge>
                  </div>
                  <CardTitle>API Integration</CardTitle>
                  <CardDescription>
                    Fetch live property data via IDX Broker API and display with your custom design.
                    Full control over styling and user experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Custom design matching your theme</li>
                    <li>• Full control over layout and features</li>
                    <li>• Better SEO and performance</li>
                    <li>• Requires API credentials</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/properties/api">
                      View API Version
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Widget Integration</CardTitle>
                  <CardDescription>
                    Embed pre-built IDX Broker widgets directly into your pages.
                    Quick setup with minimal configuration.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Quick and easy setup</li>
                    <li>• No coding required</li>
                    <li>• Managed by IDX Broker</li>
                    <li>• Less control over styling</li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/properties/widget">
                      View Widget Version
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Below are sample properties. Configure your IDX Broker credentials to see live MLS data.
              </p>
            </div>
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
          <div className="mb-6 text-sm text-muted-foreground">
            Showing {properties.length} properties
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => {
              const Icon = property.icon;
              return (
                <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-primary/50" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                        {property.status}
                      </Badge>
                      <span className="text-2xl font-bold text-primary">
                        ${property.price.toLocaleString()}
                      </span>
                    </div>
                    <CardTitle>{property.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-2">
                      <MapPin className="h-4 w-4" />
                      {property.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        <span>{property.bedrooms} bd</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span>{property.bathrooms} ba</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="h-4 w-4" />
                        <span>{property.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <Link href="/contact">Schedule a Viewing</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
