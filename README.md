# Kristina Eck Real Estate Team Website

A modern, responsive real estate website built with Next.js 16, featuring a beautiful fall-themed pastel color scheme with light pinks and oranges.

## Features

- **Modern Tech Stack**: Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4
- **Beautiful UI**: Styled with shadcn/ui components and a custom fall pastel theme
- **IDX Broker Integration**: Full MLS integration with both API and widget options
- **SEO Optimized**: Comprehensive SEO with metadata, structured data, Open Graph, and Twitter Cards
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Database Ready**: Prisma ORM configured for PostgreSQL
- **Fast Performance**: Optimized for speed with WebP images and static generation
- **Accessible**: Built with accessibility in mind
- **PWA Ready**: Web app manifest for progressive web app support

## Pages

- **Home** (`/`) - Hero section, features, and property showcase
- **Properties** (`/properties`) - Browse available listings with integration options
  - `/properties/api` - API integration showing live MLS data
  - `/properties/widget` - Widget integration with embedded IDX Broker tools
- **Blog** (`/blog`) - Real estate insights, tips, and market updates
  - File-based blog with Markdown support
  - Automatically generated from `/content/blog/` files
- **About** (`/about`) - Team information, mission, and values
- **Contact** (`/contact`) - Contact form and business information

## IDX Broker Integration

This site includes full IDX Broker integration for displaying MLS property listings. Two integration methods are available:

### 1. API Integration (Recommended)
- Custom design matching your theme
- Full control over layout and functionality
- Better SEO and performance
- View at `/properties/api`

### 2. Widget Integration
- Quick setup with minimal configuration
- Managed by IDX Broker
- View at `/properties/widget`

**Setup Guide:** See [IDX_BROKER_SETUP.md](./IDX_BROKER_SETUP.md) for detailed configuration instructions.

## SEO Optimization

Comprehensive SEO implementation for maximum search engine visibility:

### Features
- ✅ **Meta Tags**: Unique titles and descriptions for every page
- ✅ **Open Graph**: Optimized social media sharing (Facebook, LinkedIn, etc.)
- ✅ **Twitter Cards**: Enhanced Twitter sharing with large image cards
- ✅ **Structured Data**: JSON-LD schemas for LocalBusiness, Organization, and more
- ✅ **Sitemap**: Auto-generated XML sitemap at `/sitemap.xml`
- ✅ **Robots.txt**: Properly configured at `/robots.txt`
- ✅ **PWA Manifest**: Progressive web app support
- ✅ **Performance**: WebP images, lazy loading, optimized fonts

### Quick Setup
1. Update site URL in `src/lib/seo.ts`
2. Add your contact information and coordinates
3. Configure social media links
4. Add search console verification codes
5. Submit sitemap to Google Search Console

**Full Guide:** See [SEO_OPTIMIZATION.md](./SEO_OPTIMIZATION.md) for complete documentation.

## Blog System

Simple file-based blog with Markdown support. No database or CMS required!

### Features
- ✅ **Markdown Files**: Write posts in simple Markdown format
- ✅ **Auto-Generated**: Posts automatically appear on the blog page
- ✅ **SEO Optimized**: Each post has proper metadata and structured data
- ✅ **Categories & Tags**: Organize content easily
- ✅ **Reading Time**: Automatically calculated
- ✅ **Responsive Design**: Beautiful on all devices

### Adding a Blog Post

1. Create a new file in `content/blog/your-post-name.md`
2. Add frontmatter (metadata):
```markdown
---
title: "Your Post Title"
date: "2026-01-25"
excerpt: "Brief summary of your post"
author: "Your Name"
category: "Home Buying"
image: "/images/your-image.webp"
tags: ["Tag1", "Tag2"]
---

Your content here in Markdown...
```
3. Save and rebuild - your post is live!

**Example posts included** to show you how it works.

**Complete Guide:** See [BLOG_GUIDE.md](./BLOG_GUIDE.md) for detailed instructions and examples.

## Getting Started

### Prerequisites

- Node.js 20.12.1 or higher
- npm or yarn
- PostgreSQL database (optional, for production use)
- IDX Broker account (optional, for MLS integration)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file in the root directory:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/real_estate_db"

# IDX Broker (optional - for MLS integration)
IDX_BROKER_API_KEY="your-api-key-here"
IDX_BROKER_PARTNER_KEY="your-partner-key-here"
IDX_BROKER_ACCOUNT_ID="your-account-id-here"
IDX_BROKER_SUBDOMAIN="your-subdomain.idxbroker.com"
```

3. Initialize the database (if using Prisma):
```bash
npx prisma migrate dev --name init
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Database**: Prisma + PostgreSQL
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── properties/     # Properties listing page
│   ├── layout.tsx      # Root layout with header & footer
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles & theme
├── components/
│   ├── ui/            # shadcn/ui components
│   ├── header.tsx     # Site header/navigation
│   └── footer.tsx     # Site footer
└── lib/
    ├── prisma.ts      # Prisma client
    └── utils.ts       # Utility functions

prisma/
└── schema.prisma      # Database schema
```

## Database Schema

The Prisma schema includes models for:
- **Property** - Real estate listings
- **ContactInquiry** - Contact form submissions
- **TeamMember** - Team member profiles

## Customization

### Colors

The fall pastel theme is defined in `src/app/globals.css`. Customize the color scheme by modifying the CSS variables in the `:root` section.

### Images

All images have been optimized to WebP format for performance. See [IMAGE_OPTIMIZATION.md](./IMAGE_OPTIMIZATION.md) for details.

**Current images:**
- Homepage hero: Professional real estate photography
- Team photos: Kristina Eck, Michael Thompson, Sarah Martinez
- Property showcases: Featured listings with real images
- Office location: Contact page imagery

**To add new images:**
```bash
# Convert to WebP for optimal performance
cd public/images
magick your-image.jpg -quality 85 -define webp:method=6 your-image.webp
```

### Content

- Update team members in `src/app/about/page.tsx`
- Modify property listings in `src/properties/page.tsx`
- Customize contact information in `src/components/footer.tsx` and `src/app/contact/page.tsx`
- Replace images in `public/images/` with your own branded photos

## Future Enhancements

- Connect contact form to backend API or email service (e.g., SendGrid, Resend)
- Add property detail pages with image galleries and virtual tours
- Implement advanced property search and filtering with IDX API
- Add user authentication for property management dashboard
- Add interactive map integration for property locations (Google Maps, Mapbox)
- Implement property favorites and saved searches with user accounts
- Add mortgage calculator and affordability tools
- Integrate CRM for lead management
- Add blog/resources section for SEO

## License

Copyright © 2026 Kristina Eck Real Estate Team. All rights reserved.
