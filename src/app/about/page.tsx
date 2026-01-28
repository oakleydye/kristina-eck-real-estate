import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Heart, TrendingUp, Users, Home, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { generatePersonSchema, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Kristina Eck | Experienced Real Estate Broker",
  description:
    "Meet Kristina Eck, a licensed real estate broker with over 15 years of experience. 500+ homes sold, 98% satisfaction rate, and dedicated to helping you find your dream home.",
  keywords: [
    "Kristina Eck",
    "real estate broker",
    "experienced realtor",
    "local real estate expert",
    "top real estate agent",
  ],
  openGraph: {
    title: "About Kristina Eck - Licensed Real Estate Broker",
    description:
      "Meet Kristina Eck, an experienced real estate broker. 15+ years of experience, 500+ homes sold, 98% satisfaction rate.",
    images: ["/images/_MG_4255EditF.webp"],
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Client-Centered",
      description:
        "Your goals and satisfaction are at the heart of everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in every transaction and interaction.",
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description:
        "Deep knowledge of local market trends ensures you get the best deal.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Our collaborative approach brings together the best minds for your success.",
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
              Dedicated to helping you find not just a house, but a home where
              memories are made.
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
                  At Kristina Eck Real Estate Team, we believe that finding the
                  right home is about more than just location and square
                  footage. It's about discovering a place where you can build
                  your future, raise your family, and create lasting memories.
                </p>
                <p className="text-lg text-muted-foreground">
                  We combine local expertise with personalized service to guide
                  you through every step of the real estate process. Whether
                  you're buying your first home, upgrading to a larger space, or
                  selling a property, we're here to make your journey smooth and
                  successful.
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
                <Card
                  key={value.title}
                  className="text-center border-border/50"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Kristina Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 items-start">
              {/* Image Column */}
              <div className="md:col-span-2">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl ring-8 ring-primary/10">
                  <Image
                    src="/images/_MG_4255EditF.webp"
                    alt="Kristina Eck"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>

              {/* Bio Column */}
              <div className="md:col-span-3 space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    Lead Broker
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    Kristina Eck
                  </h2>
                  <p className="text-xl text-primary font-medium">
                    Licensed Real Estate Broker
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    With over 20 years of experience in the real estate
                    industry, Kristina has built a reputation as one of Northern
                    Utah's most trusted and accomplished realtors. Her
                    dedication to client satisfaction and deep knowledge of the
                    local market have helped hundreds of families find their
                    dream homes.
                  </p>
                  <p className="text-lg">
                    Kristina's approach is centered on building lasting
                    relationships with her clients. She takes the time to
                    understand each family's unique needs, budget, and lifestyle
                    to ensure they find not just a house, but a home where they
                    can thrive. Her attention to detail and commitment to
                    excellence shine through in every transaction.
                  </p>
                  <p className="text-lg">
                    Whether you're a first-time homebuyer, looking to upgrade,
                    or ready to sell, Kristina brings expertise, integrity, and
                    unwavering support to guide you through every step of the
                    process.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Specialties
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Residential Sales</li>
                      <li>• New Construction</li>
                      <li>• First-Time Buyers</li>
                      <li>• Investment Properties</li>
                      <li>• Relocation Services</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Home className="h-5 w-5 text-primary" />
                      Credentials
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Licensed Broker, Utah & Idaho</li>
                      <li>• GRI (Graduate, Realtor Institute) designee</li>
                      <li>• License #5504469-PB00</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      <Phone className="mr-2 h-5 w-5" />
                      Schedule a Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keller Williams Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    Powered By
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Keller Williams Realty
                  </h2>
                  <p className="text-xl text-primary font-medium mb-6">
                    The World's Largest Real Estate Network
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    As a proud member of Keller Williams Realty, Kristina has
                    access to cutting-edge technology, extensive market data,
                    and a worldwide network of top-producing agents. This
                    affiliation ensures you receive the highest level of service
                    and exposure for your property.
                  </p>
                  <p className="text-lg">
                    Keller Williams is the largest real estate franchise by
                    agent count in the world, with a reputation for innovation,
                    training excellence, and agent success. This means your
                    transaction is backed by proven systems and industry-leading
                    resources.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      190,000+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Associates Worldwide
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      1,000+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Market Centers
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits List */}
              <div>
                <Card className="border-border/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Your Advantage</CardTitle>
                    <CardDescription>
                      What Keller Williams means for your transaction
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Advanced Technology
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Access to KW's proprietary technology platform and
                          data analytics
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Global Network
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Connect with qualified buyers and sellers across the
                          world
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Training Excellence
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          World-class training ensures top-tier service and
                          expertise
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Home className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Maximum Exposure
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Your property reaches more potential buyers through
                          our network
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                20+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Homes Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                450+
              </div>
              <div className="text-muted-foreground">Happy Families</div>
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
