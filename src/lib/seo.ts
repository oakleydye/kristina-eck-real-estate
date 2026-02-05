/**
 * SEO Configuration and Utilities
 */

import { Metadata } from "next";

// Base site configuration
export const siteConfig = {
  name: "Kristina Eck Real Estate Team",
  description:
    "Your trusted partner in finding the perfect home. Expert real estate services for buyers and sellers with over 23 years of experience. Licensed in Utah and Idaho, specializing in Cache Valley and Bear Lake.",
  url: "https://kristinaeck.com", // Update with your actual domain
  ogImage: "/images/_MG_4454Edit.webp",
  links: {
    instagram: "https://www.instagram.com/kristinaeckteam/",
    facebook: "", // Add if available
    twitter: "", // Add if available
    linkedin: "", // Add if available
  },
  contact: {
    phone: "(435) 757-7259",
    email: "kristinaeck10@gmail.com",
    address: {
      street: "33 North Main",
      city: "Logan",
      state: "UT",
      zip: "84321",
      country: "United States",
    },
  },
  license: "9471894-AB00", // Utah and Idaho license
  business: {
    name: "Kristina Eck Real Estate Team",
    legalName: "Kristina Eck Real Estate Team, LLC",
    foundingDate: "2002",
    priceRange: "$$",
  },
};

// Default metadata for the entire site
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Find Your Dream Home`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "real estate",
    "homes for sale",
    "property listings",
    "real estate agent",
    "buy home",
    "sell home",
    "residential real estate",
    "Kristina Eck",
    "real estate team",
    "MLS listings",
    "home buying",
    "home selling",
    "property search",
    "real estate services",
  ],
  authors: [{ name: "Kristina Eck Real Estate Team" }],
  creator: "Kristina Eck Real Estate Team",
  publisher: "Kristina Eck Real Estate Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Find Your Dream Home`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you get them
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    // bing: 'your-bing-verification-code',
  },
};

// Generate structured data for LocalBusiness
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.business.name,
    legalName: siteConfig.business.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/kristina-eck-team-logo.svg`,
    foundingDate: siteConfig.business.foundingDate,
    priceRange: siteConfig.business.priceRange,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    // @ts-ignore - license is a valid property
    license: siteConfig.license,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.7128", // Update with actual coordinates
      longitude: "-74.0060",
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.contact.address.city,
    },
    sameAs: [siteConfig.links.instagram].filter(Boolean),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
  };
}

// Generate structured data for Organization
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.business.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/kristina-eck-team-logo.svg`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: [siteConfig.links.instagram].filter(Boolean),
  };
}

// Generate structured data for BreadcrumbList
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

// Generate structured data for Product (Real Estate Listing)
export function generatePropertySchema(property: {
  name: string;
  description: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: property.name,
    description: property.description,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "RealEstateAgent",
        name: siteConfig.business.name,
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.state,
      postalCode: property.zipcode,
      addressCountry: "US",
    },
    image: property.images,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Bedrooms",
        value: property.bedrooms,
      },
      {
        "@type": "PropertyValue",
        name: "Bathrooms",
        value: property.bathrooms,
      },
      {
        "@type": "PropertyValue",
        name: "Square Feet",
        value: property.sqft,
      },
    ],
  };
}

// Generate structured data for Person (Team Member)
export function generatePersonSchema(person: {
  name: string;
  role: string;
  bio: string;
  email?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    description: person.bio,
    email: person.email,
    image: person.image,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.business.name,
    },
  };
}
