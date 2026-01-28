# Blog Component Guide

Simple, file-based blog system for your real estate website. No database or CMS required!

## Quick Start

### Adding a New Blog Post

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter (metadata) at the top
3. Write your content in Markdown
4. Save and rebuild - that's it!

## File Structure

```
content/
└── blog/
    ├── first-time-home-buyer-guide.md
    ├── staging-tips-sell-faster.md
    └── your-new-post.md    ← Add new posts here
```

## Creating a Blog Post

### Step 1: Create the File

File name becomes the URL slug:
- `my-blog-post.md` → `/blog/my-blog-post`
- Use lowercase and hyphens
- Keep it short and descriptive
- No spaces or special characters

**Examples:**
- ✅ `spring-market-update.md`
- ✅ `top-10-neighborhoods.md`
- ✅ `mortgage-rate-guide-2026.md`
- ❌ `My Blog Post!.md`
- ❌ `post 123.md`

### Step 2: Add Frontmatter

At the very top of your file, add metadata between `---`:

```markdown
---
title: "Your Post Title Here"
date: "2026-01-25"
excerpt: "A brief summary of your post (1-2 sentences)"
author: "Your Name"
category: "Home Buying"
image: "/images/your-image.webp"
tags: ["Tag1", "Tag2", "Tag3"]
---

Your content starts here...
```

### Frontmatter Fields Explained

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ Yes | Post title (50-60 chars ideal) | "10 Tips for First-Time Buyers" |
| `date` | ✅ Yes | Publish date (YYYY-MM-DD) | "2026-01-25" |
| `excerpt` | ✅ Yes | Summary for listings (150-160 chars) | "Learn essential tips for buying your first home..." |
| `author` | ✅ Yes | Author name | "Kristina Eck" |
| `category` | ✅ Yes | Main category | "Home Buying" |
| `image` | ⚠️ Optional | Featured image path | "/images/blog/post1.webp" |
| `tags` | ⚠️ Optional | Array of tags | ["Tips", "Guide", "Buyers"] |

### Step 3: Write Content

Write your content in Markdown after the frontmatter.

## Markdown Basics

### Headings

```markdown
# Heading 1 (Page title - use once)
## Heading 2 (Main sections)
### Heading 3 (Subsections)
#### Heading 4 (Minor sections)
```

### Text Formatting

```markdown
**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough~~
```

### Lists

**Unordered:**
```markdown
- Item one
- Item two
  - Nested item
  - Another nested
- Item three
```

**Ordered:**
```markdown
1. First step
2. Second step
3. Third step
```

**Checklists:**
```markdown
- [ ] Unchecked item
- [x] Checked item
```

### Links

```markdown
[Link text](https://example.com)
[Internal link](/contact)
```

### Images

```markdown
![Alt text](/images/photo.webp)
```

### Blockquotes

```markdown
> This is a quote or callout
> It can span multiple lines
```

### Code

**Inline code:**
```markdown
Use `code` for inline references
```

**Code blocks:**
````markdown
```
Code block
Multiple lines
```
````

### Horizontal Rules

```markdown
---
```

## Complete Example Post

```markdown
---
title: "5 Mistakes to Avoid When Selling Your Home"
date: "2026-02-01"
excerpt: "Don't make these common mistakes when selling your home. Learn from the experts and get top dollar for your property."
author: "Sarah Martinez"
category: "Home Selling"
image: "/images/blog/selling-mistakes.webp"
tags: ["Selling Tips", "Common Mistakes", "Home Selling", "Real Estate Advice"]
---

Selling your home can be stressful, but avoiding these five common mistakes will help you get the best price and a smooth transaction.

## 1. Overpricing Your Home

One of the biggest mistakes sellers make is pricing too high. Here's why:

- Limits your buyer pool
- Sits on market longer
- Eventually requires price reductions
- Signals problems to buyers

### How to Price Right

Work with your agent to:

1. Analyze comparable sales
2. Consider current market conditions
3. Factor in your home's unique features
4. Price competitively from day one

**Pro tip**: Homes priced right sell within the first 30 days.

## 2. Neglecting Curb Appeal

First impressions matter! Buyers form opinions in the first 7 seconds.

### Quick Curb Appeal Fixes

- Fresh mulch in beds ($50-100)
- Mow and edge lawn ($0-50)
- Paint front door ($50-150)
- Add potted plants ($30-60)
- Power wash walkway ($100-200)

These small investments can yield thousands in return!

## 3. Being Present During Showings

**Never be home during showings.** Here's why:

- Buyers feel uncomfortable
- They won't open closets
- They rush through
- Can't speak freely with their agent

> "Buyers need space to envision the home as theirs, not feel like they're intruding on yours."

## 4. Ignoring Your Agent's Advice

You hired an expert - listen to them!

Common pushback that hurts sellers:
- "I don't want to stage"
- "My price is firm"
- "I'm not making those repairs"
- "I want to be at all showings"

Remember: They've sold hundreds of homes. Trust their expertise.

## 5. Getting Emotional

It's just business. Don't:

- Take low offers personally
- Refuse reasonable requests
- Get attached to the outcome
- Make decisions based on emotion

### Stay Objective

Think of your home as a product you're selling, not your baby you're giving away. This mindset helps you:

- Negotiate effectively
- Make rational decisions
- Accept fair offers
- Move forward smoothly

## The Bottom Line

Avoid these five mistakes and you'll:

✅ Sell faster
✅ Get a better price
✅ Have less stress
✅ Close smoothly

## Need Help Selling?

The Kristina Eck Real Estate Team has helped hundreds of sellers avoid these pitfalls and achieve their goals.

**Contact us today** for a free home valuation and selling strategy session.

📞 (555) 123-4567
📧 [Get Started](/contact)

We'll create a custom plan to sell your home for top dollar!
```

## Categories

Use these standard categories for consistency:

- **Home Buying** - Buyer guides, tips, financing
- **Home Selling** - Seller tips, staging, pricing
- **Market Updates** - Trends, statistics, forecasts
- **Neighborhood Guides** - Area spotlights, amenities
- **Investment** - Investment strategies, ROI, rentals
- **Home Improvement** - Renovations, maintenance, DIY
- **Real Estate News** - Industry news, policy changes
- **Tips & Tricks** - General advice, life hacks

## Tags

Use specific, searchable tags:

**Good tags:**
- First-Time Buyers
- Luxury Homes
- Mortgages
- Interest Rates
- Home Inspection
- Curb Appeal
- Market Analysis

**Avoid vague tags:**
- ❌ Real Estate (too broad)
- ❌ Homes (too generic)
- ❌ Info (meaningless)

## Images

### Featured Images

- **Size**: 1200x630px recommended
- **Format**: WebP for best performance
- **Location**: `/public/images/blog/`
- **Quality**: High quality, professional photos

### Adding Images to Posts

1. Add image to `/public/images/blog/`
2. Reference in frontmatter: `image: "/images/blog/filename.webp"`
3. Add images inline: `![Description](/images/blog/filename.webp)`

### Image Optimization

Convert to WebP for faster loading:

```bash
cd public/images/blog
magick your-image.jpg -quality 85 -define webp:method=6 your-image.webp
```

## SEO Best Practices

### Title

- 50-60 characters
- Include main keyword
- Make it compelling
- Be specific

**Examples:**
- ✅ "10 First-Time Home Buyer Mistakes to Avoid in 2026"
- ✅ "How to Stage Your Home: Complete Guide for Sellers"
- ❌ "Home Buying Tips"
- ❌ "Real Estate Information"

### Excerpt

- 150-160 characters
- Include keyword
- Compelling summary
- Call to action encouraged

### Content

- **Length**: 800-2000 words ideal
- **Headings**: Use H2 and H3 for structure
- **Keywords**: Use naturally, don't stuff
- **Links**: Link to your pages (properties, contact)
- **Images**: Include relevant images with alt text
- **Lists**: Use bullet points and numbered lists
- **Formatting**: Bold important points

## Publishing Workflow

### 1. Write Your Post

Create the `.md` file with frontmatter and content.

### 2. Test Locally

```bash
npm run dev
```

Visit http://localhost:3000/blog to see your post.

### 3. Review

Check:
- [ ] Title and excerpt are compelling
- [ ] No typos or grammar errors
- [ ] Links work correctly
- [ ] Images load properly
- [ ] Formatting looks good
- [ ] Mobile responsive

### 4. Build and Deploy

```bash
npm run build
```

Deploy to your hosting platform.

### 5. Share

- Share on social media
- Email to your list
- Add to newsletter

## Maintenance

### Updating Posts

1. Edit the `.md` file
2. Save changes
3. Rebuild and deploy

### Deleting Posts

1. Delete the `.md` file
2. Rebuild and deploy

The post will automatically be removed from listings and sitemap.

## Advanced Features

### Internal Links

Link to your pages to keep visitors on site:

```markdown
Learn more about our [property search tools](/properties).

Ready to buy? [Contact us today](/contact) for expert guidance.

See our [team profiles](/about) to meet your agent.
```

### Call-to-Actions

End posts with strong CTAs:

```markdown
## Ready to Take the Next Step?

Contact Kristina Eck Real Estate Team today!

📞 **(555) 123-4567**
📧 **[Schedule a Consultation](/contact)**
🏠 **[Browse Homes](/properties)**
```

### Table of Contents

For long posts, add a manual TOC:

```markdown
## In This Guide

- [Section 1](#section-1)
- [Section 2](#section-2)
- [Section 3](#section-3)

## Section 1

Content here...
```

## Troubleshooting

### Post Not Showing

**Check:**
1. File is in `content/blog/` directory
2. File has `.md` extension
3. Frontmatter is properly formatted (between `---`)
4. Date is not in the future
5. Rebuilt the site after adding

### Images Not Loading

**Check:**
1. Image is in `/public/images/` or subdirectory
2. Path starts with `/` (e.g., `/images/photo.webp`)
3. File name matches exactly (case-sensitive)
4. Image file exists and is not corrupted

### Formatting Issues

**Common fixes:**
- Ensure blank line before and after headings
- Check for unclosed markdown syntax
- Verify quotes are proper markdown quotes
- Test locally before deploying

## Content Ideas

### Evergreen Topics

- First-time buyer guides
- Home selling tips
- Market analysis basics
- Mortgage explanations
- Home maintenance guides
- Neighborhood spotlights

### Timely Content

- Seasonal tips (spring market, winter prep)
- Current market updates
- Interest rate analysis
- New local developments
- Policy changes affecting real estate

### Local Focus

- Neighborhood profiles
- School district guides
- Local events calendar
- Community spotlights
- Area amenities

## Best Practices

1. **Post Consistently**: Weekly or bi-weekly is ideal
2. **Quality Over Quantity**: Better to post one great article than three mediocre ones
3. **Local Focus**: Write about your area - you're the expert!
4. **Answer Questions**: Address common client questions
5. **Be Helpful**: Provide real value, not just sales pitches
6. **Update Old Posts**: Keep evergreen content current
7. **Promote Posts**: Share on social media and in emails
8. **Track Performance**: See which topics resonate with readers

## Getting Help

### Markdown Editors

- **Visual Studio Code** (free) - Best for developers
- **Typora** - WYSIWYG Markdown editor
- **iA Writer** - Clean, distraction-free writing
- **MarkText** - Free, open-source editor

### Markdown Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Markdown Tutorial](https://guides.github.com/features/mastering-markdown/)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Need Assistance?

For technical issues or questions:
1. Check this guide first
2. Review example posts in `content/blog/`
3. Test changes locally before deploying

---

**Happy blogging!** 📝

Your blog is a powerful tool for attracting clients and establishing expertise. Post regularly and provide genuine value to see the best results.
