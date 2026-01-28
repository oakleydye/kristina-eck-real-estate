import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Home, Search, TrendingUp, Users, Award, Heart, Building2, MapPin, DollarSign, Bed, Bath, Square, Star, Quote } from "lucide-react";
import { Metadata } from "next";
import { getFeaturedReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Find Your Dream Home | Kristina Eck Real Estate Team",
  description: "Discover your perfect home with Kristina Eck Real Estate Team. Browse MLS listings, featured properties, and get expert guidance from experienced real estate professionals. Over 15 years of trusted service.",
  openGraph: {
    title: "Find Your Dream Home | Kristina Eck Real Estate Team",
    description: "Discover your perfect home with expert guidance from Kristina Eck Real Estate Team. Browse featured properties and MLS listings.",
    images: ["/images/_MG_4454Edit.webp"],
  },
};

export default function HomePage() {
  const featuredReviews = getFeaturedReviews(5);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 min-h-screen items-center py-20">
            {/* Left Column - Content */}
            <div className="space-y-8 lg:pr-8">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                Your Trusted Real Estate Partner
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Find Your Dream Home with
                <span className="text-primary block mt-2">Kristina Eck Real Estate Team</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground">
                We specialize in helping families find their perfect home. With over 20 years of experience and deep local knowledge of Cache Valley,
                we make your real estate journey seamless and rewarding.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-base">
                  <Link href="/properties">
                    <Search className="mr-2 h-5 w-5" />
                    Browse Properties
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base">
                  <Link href="/contact">
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Homes Sold</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/_MG_4454Edit.webp"
                alt="Happy family with their real estate agent"
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay only at bottom for any text if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground">
              We bring expertise, dedication, and personalized service to every client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expert Guidance</CardTitle>
                <CardDescription>
                  Years of experience in the local market ensure you get the best advice and service.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Market Knowledge</CardTitle>
                <CardDescription>
                  Deep understanding of market trends helps you make informed decisions with confidence.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Personalized Service</CardTitle>
                <CardDescription>
                  We listen to your needs and work tirelessly to find the perfect match for your lifestyle.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Client First</CardTitle>
                <CardDescription>
                  Your satisfaction is our priority. We're committed to exceeding your expectations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Extensive Network</CardTitle>
                <CardDescription>
                  Access to exclusive listings and off-market opportunities gives you an edge.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Full-Service Support</CardTitle>
                <CardDescription>
                  From search to closing, we handle every detail of your real estate journey.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Reviews Carousel */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="text-sm px-4 py-1 mb-4">
              Client Reviews
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from families who trusted us with their home journey.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredReviews.map((review) => (
                  <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/2">
                    <div className="p-2">
                      <Card className="h-full border-border/50 hover:shadow-lg transition-shadow">
                        <CardContent className="p-8 flex flex-col h-full">
                          {/* Quote Icon */}
                          <Quote className="h-10 w-10 text-primary/20 mb-4" />

                          {/* Review Text */}
                          <div className="text-muted-foreground leading-relaxed flex-grow mb-6 space-y-3">
                            {review.review.split('\n').map((paragraph, idx) => (
                              <p key={idx}>
                                {idx === 0 && '"'}
                                {paragraph}
                                {idx === review.review.split('\n').length - 1 && '"'}
                              </p>
                            ))}
                          </div>

                          {/* Rating */}
                          {review.rating && (
                            <div className="flex gap-1 mb-4">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-5 w-5 ${
                                    star <= review.rating!
                                      ? "fill-primary text-primary"
                                      : "text-border"
                                  }`}
                                />
                              ))}
                            </div>
                          )}

                          {/* Author Info */}
                          <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-xl font-bold text-primary">
                                {review.name.charAt(0)}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-foreground">{review.name}</div>
                              {review.location && (
                                <div className="text-sm text-muted-foreground flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {review.location}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          {/* Link to All Reviews */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/reviews">
                View All Reviews
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
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
            {/* Property Card 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Home className="h-16 w-16 text-primary/50" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">For Sale</Badge>
                  <span className="text-2xl font-bold text-primary">$525,000</span>
                </div>
                <CardTitle>Modern Family Home</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-2">
                  <MapPin className="h-4 w-4" />
                  123 Oak Street, Suburbia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>4 bd</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>3 ba</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    <span>2,400 sqft</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link href="/properties">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Property Card 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <Building2 className="h-16 w-16 text-primary/50" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">For Sale</Badge>
                  <span className="text-2xl font-bold text-primary">$425,000</span>
                </div>
                <CardTitle>Charming Cottage</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-2">
                  <MapPin className="h-4 w-4" />
                  456 Maple Avenue, Downtown
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>3 bd</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>2 ba</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    <span>1,800 sqft</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link href="/properties">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Property Card 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <Home className="h-16 w-16 text-primary/50" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">For Sale</Badge>
                  <span className="text-2xl font-bold text-primary">$675,000</span>
                </div>
                <CardTitle>Luxury Estate</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-2">
                  <MapPin className="h-4 w-4" />
                  789 Pine Drive, Hillside
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>5 bd</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>4 ba</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    <span>3,200 sqft</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link href="/properties">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/properties">
                View All Properties
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's start your journey today. Contact us for a free consultation and discover how we can help you achieve your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
