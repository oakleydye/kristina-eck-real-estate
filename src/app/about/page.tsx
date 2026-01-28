import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Heart, TrendingUp, Users, Home, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { generatePersonSchema, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us | Meet Our Real Estate Team",
  description: "Meet the experienced professionals at Kristina Eck Real Estate Team. With over 15 years of experience, 500+ homes sold, and 98% satisfaction rate, we're dedicated to your success.",
  keywords: ["real estate team", "real estate agents", "Kristina Eck", "experienced realtors", "local real estate experts"],
  openGraph: {
    title: "About Kristina Eck Real Estate Team",
    description: "Meet our experienced team of real estate professionals. 15+ years of experience, 500+ homes sold, 98% satisfaction rate.",
    images: ["/images/_MG_4255EditF.webp"],
  },
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Kristina Eck",
      role: "Lead Real Estate Broker",
      bio: "With over 15 years of experience in real estate, Kristina has helped hundreds of families find their dream homes.",
      image: "/images/_MG_4255EditF.webp",
    },
    {
      name: "Michael Thompson",
      role: "Senior Agent",
      bio: "Michael brings a wealth of knowledge in luxury properties and has a proven track record of successful transactions.",
      image: "/images/_MG_4294EditF.webp",
    },
    {
      name: "Sarah Martinez",
      role: "Buyer Specialist",
      bio: "Sarah is dedicated to understanding her clients' needs and finding the perfect home to match their lifestyle.",
      image: "/images/_MG_4329EditF.webp",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-Centered",
      description: "Your goals and satisfaction are at the heart of everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every transaction and interaction.",
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description: "Deep knowledge of local market trends ensures you get the best deal.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Our collaborative approach brings together the best minds for your success.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Your Trusted Real Estate Partner
            </h1>
            <p className="text-lg text-muted-foreground">
              Dedicated to helping you find not just a house, but a home where memories are made.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground">
                  At Kristina Eck Real Estate Team, we believe that finding the right home is about more than
                  just location and square footage. It's about discovering a place where you can build your
                  future, raise your family, and create lasting memories.
                </p>
                <p className="text-lg text-muted-foreground">
                  We combine local expertise with personalized service to guide you through every step of
                  the real estate process. Whether you're buying your first home, upgrading to a larger space,
                  or selling a property, we're here to make your journey smooth and successful.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/_MG_4369.webp"
                  alt="Beautiful home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center border-border/50">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                    <CardDescription className="mt-2">{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden">
                <CardHeader>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Homes Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">450+</div>
              <div className="text-muted-foreground">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Today
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/properties">Browse Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
