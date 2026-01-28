import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Building2, MapPin, Bed, Bath, Square } from "lucide-react";
import { idxBroker, formatPrice, getPrimaryImage } from "@/lib/idx-broker";

// Demo properties as fallback
const demoProperties = [
  {
    idxID: "demo-1",
    listingID: "1",
    title: "Modern Family Home",
    listPrice: "525000",
    address: "123 Oak Street",
    cityName: "Suburbia",
    state: "ST",
    zipcode: "12345",
    beds: "4",
    totalBaths: "3",
    sqFt: "2400",
    propStatus: "For Sale",
    image: { 0: "/images/_MG_4454Edit.webp" },
    photoList: ["/images/_MG_4454Edit.webp"],
  },
  {
    idxID: "demo-2",
    listingID: "2",
    title: "Charming Cottage",
    listPrice: "425000",
    address: "456 Maple Avenue",
    cityName: "Downtown",
    state: "ST",
    zipcode: "12345",
    beds: "3",
    totalBaths: "2",
    sqFt: "1800",
    propStatus: "For Sale",
    image: { 0: "/images/_MG_4369.webp" },
    photoList: ["/images/_MG_4369.webp"],
  },
  {
    idxID: "demo-3",
    listingID: "3",
    title: "Luxury Estate",
    listPrice: "675000",
    address: "789 Pine Drive",
    cityName: "Hillside",
    state: "ST",
    zipcode: "12345",
    beds: "5",
    totalBaths: "4",
    sqFt: "3200",
    propStatus: "For Sale",
    image: { 0: "/images/_MG_4395EditF.webp" },
    photoList: ["/images/_MG_4395EditF.webp"],
  },
];

export async function FeaturedProperties() {
  // Try to fetch from IDX Broker, fall back to demo properties
  let properties = await idxBroker.getFeaturedProperties(3);

  // If no properties from API, use demo data
  if (properties.length === 0) {
    properties = demoProperties as any;
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our hand-picked selection of exceptional homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => {
            const primaryImage = getPrimaryImage(property as any);
            const Icon = property.propType?.toLowerCase().includes('condo') ? Building2 : Home;
            const isDemo = !property.idxID;

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
                  <div className={`h-48 bg-gradient-to-br ${
                    isDemo
                      ? 'from-primary/20 to-secondary/20'
                      : 'from-accent/20 to-primary/20'
                  } flex items-center justify-center`}>
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
                  <CardTitle className="line-clamp-1">
                    {property.address}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="line-clamp-1">
                      {property.cityName}, {property.state} {property.zipcode}
                    </span>
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex gap-4 text-sm text-muted-foreground">
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
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <Link href="/properties">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/properties">View All Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
