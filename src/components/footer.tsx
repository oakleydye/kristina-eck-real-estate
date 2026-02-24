import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/40 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/kristina-eck-team-logo.svg"
                alt="Kristina Eck Real Estate Team"
                width={300}
                height={150}
                className="h-20 w-auto"
              />
              <div className="h-16 w-px bg-primary/60" />
              <Image
                src="/images/kw-logo.webp"
                alt="Keller Williams"
                width={100}
                height={60}
                className="h-12 w-auto opacity-80"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in finding the perfect home. Serving the
              community with dedication and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Buyer Representation
              </li>
              <li className="text-sm text-muted-foreground">
                Seller Representation
              </li>
              <li className="text-sm text-muted-foreground">Market Analysis</li>
              <li className="text-sm text-muted-foreground">
                Property Valuation
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+14357577259"
                  className="hover:text-foreground transition-colors"
                >
                  (435) 757-7259
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:kristinaeck10@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  kristinaeck10@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  33 North Main
                  <br />
                  Logan, UT 84321
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/kristinaeckrealestateteam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/kristinaeckteam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="text-center space-y-1">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Kristina Eck Real Estate Team.
                All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                License #9471894-AB00 | Licensed in Utah & Idaho
              </p>
              <p className="text-xs text-muted-foreground">
                Powered by{" "}
                <a
                  href="https://oakleydye.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Oakley Dye Software & Design
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
