# IDX Broker Integration Guide

This guide will help you set up and configure IDX Broker integration for your real estate website. Two integration methods are available: **API Integration** and **Widget Integration**.

## Quick Start

1. **Get Your Credentials**
   - Log in to [IDX Broker Dashboard](https://middleware.idxbroker.com/mgmt/)
   - Navigate to Settings > API Keys
   - Copy your API Key, Partner Key, and Account ID

2. **Configure Environment Variables**
   - Add your IDX Broker credentials to your `.env` file:
   ```env
   IDX_BROKER_API_KEY="your-api-key-here"
   IDX_BROKER_SUBDOMAIN="your-subdomain.idxbroker.com"
   ```

3. **Restart Your Development Server**
   ```bash
   npm run dev
   ```

---

## Integration Method 1: API Integration (Recommended)

### Overview
The API integration fetches property data directly from IDX Broker's API and displays it using your custom design. This provides the best user experience and seamless integration with your site's theme.

### Features
- ✅ Full control over design and layout
- ✅ Matches your site's fall pastel color scheme
- ✅ Better SEO (properties are server-rendered)
- ✅ Faster page loads
- ✅ Custom filtering and search
- ✅ Mobile-optimized

### How It Works
1. Properties are fetched server-side using the IDX Broker API
2. Data is displayed using your custom shadcn/ui components
3. Images are optimized with Next.js Image component
4. Properties update automatically (5-minute cache)

### View It
Visit `/properties/api` to see the API integration in action.

### API Endpoints Used
```typescript
// Get featured properties
await idxBroker.getFeaturedProperties(6);

// Get all active properties
await idxBroker.getActiveProperties(50);

// Search properties
await idxBroker.searchProperties({
  bedrooms: 3,
  minPrice: 200000,
  maxPrice: 500000,
  city: "Your City"
});

// Get property details
await idxBroker.getPropertyDetails("listing-id");
```

### Customization
Edit `src/lib/idx-broker.ts` to:
- Modify API request parameters
- Add custom filters
- Change caching behavior
- Add error handling

---

## Integration Method 2: Widget Integration

### Overview
Widget integration embeds pre-built IDX Broker widgets directly into your pages. This is the quickest way to get started with minimal configuration.

### Features
- ✅ Quick setup (no coding required)
- ✅ Managed and updated by IDX Broker
- ✅ Multiple widget types available
- ⚠️ Less control over styling
- ⚠️ May not match your theme perfectly

### How It Works
1. Create widgets in your IDX Broker dashboard
2. Copy the embed code
3. Add it to your page

### View It
Visit `/properties/widget` to see the widget integration example.

### Available Widget Types

#### 1. Omnisearch Widget
Comprehensive search form with all filter options.

**Setup:**
1. Go to IDX Dashboard > Design > Widgets
2. Create/edit an Omnisearch widget
3. Copy the widget ID
4. Add to your page:
```html
<script src="https://www.idxbroker.com/idx/omnisearch.js?widgetid=YOUR_WIDGET_ID"></script>
```

#### 2. Results Widget
Display property results in grid or list format.

```html
<script src="https://www.idxbroker.com/idx/resultswidget.js?widgetid=YOUR_WIDGET_ID"></script>
```

#### 3. Map Search Widget
Interactive map-based property search.

```html
<script src="https://www.idxbroker.com/idx/mapsearch.js?widgetid=YOUR_WIDGET_ID"></script>
```

#### 4. Featured Listings Widget
Display featured or newest listings.

```html
<script src="https://www.idxbroker.com/idx/carousel.js?widgetid=YOUR_WIDGET_ID"></script>
```

### Adding Widgets to Your Site

1. **Get Widget Code**
   - Log in to IDX Broker
   - Go to Design > Widgets
   - Select or create a widget
   - Copy the embed code

2. **Add to Page**
   - Open `src/app/properties/widget/page.tsx`
   - Replace `widgetid=XXXXX` with your actual widget ID
   - Widget will automatically load on the page

### Styling Widgets
While widgets have limited styling options, you can:
- Customize colors in IDX Dashboard > Design > Styles
- Override some styles with custom CSS
- Choose widget layouts that match your design

---

## Comparison: API vs Widget

| Feature | API Integration | Widget Integration |
|---------|----------------|-------------------|
| Setup Time | 30 minutes | 5 minutes |
| Design Control | Full | Limited |
| Theme Matching | Perfect | Approximate |
| SEO Benefits | Excellent | Good |
| Maintenance | You manage | IDX manages |
| Flexibility | High | Low |
| Updates | Manual | Automatic |
| Mobile Experience | Optimized | Good |

---

## Homepage Integration

The homepage automatically displays featured properties using the API integration. If IDX credentials are not configured, it falls back to demo properties.

**File:** `src/components/featured-properties.tsx`

This component:
- Fetches 3 featured properties from IDX Broker
- Falls back to demo data if API is unavailable
- Uses the same design as the rest of the site

---

## Troubleshooting

### Properties Not Showing
1. Check that your `.env` file has the correct credentials
2. Verify API key is active in IDX Dashboard
3. Check browser console for errors
4. Ensure your IDX account has active listings

### API Errors
- **401 Unauthorized**: Check your API key
- **404 Not Found**: Verify endpoint URLs
- **Rate Limited**: IDX has API rate limits, cache responses

### Widget Not Loading
1. Verify widget ID is correct
2. Check that widget is published in IDX Dashboard
3. Ensure JavaScript is enabled
4. Check browser console for errors

---

## Advanced Configuration

### Custom Search Filters
Edit `src/lib/idx-broker.ts` to add custom search parameters:

```typescript
await idxBroker.searchProperties({
  propertyType: "residential",
  bedrooms: 3,
  bathrooms: 2,
  minPrice: 200000,
  maxPrice: 500000,
  city: "Your City",
  zipcode: "12345"
});
```

### Caching Strategy
Properties are cached for 5 minutes by default. Adjust in page files:

```typescript
export const revalidate = 300; // 5 minutes (in seconds)
```

### Adding More API Endpoints
The IDX Broker API supports many endpoints. Add new methods to `src/lib/idx-broker.ts`:

```typescript
async getNewListings(days: number = 7): Promise<IDXProperty[]> {
  const data = await this.request<IDXProperty[]>(`/clients/newlistings/${days}`);
  return data;
}
```

---

## Best Practices

1. **Use API Integration for Production**
   - Better control and user experience
   - Matches your brand perfectly
   - Better performance and SEO

2. **Cache Aggressively**
   - MLS data doesn't change every second
   - Reduce API calls to stay under limits
   - Use Next.js built-in caching

3. **Handle Errors Gracefully**
   - Always provide fallback UI
   - Show demo properties if API fails
   - Log errors for debugging

4. **Optimize Images**
   - Use Next.js Image component
   - Lazy load off-screen images
   - Compress and resize appropriately

5. **Test Mobile Experience**
   - Ensure touch-friendly search
   - Optimize card layouts
   - Test on various devices

---

## Support Resources

- [IDX Broker API Documentation](https://middleware.idxbroker.com/docs/api/)
- [IDX Broker Widget Guide](https://support.idxbroker.com/category/widgets)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)

---

## Next Steps

1. Configure your credentials in `.env`
2. Test both integration methods
3. Choose the one that fits your needs
4. Customize the design to match your brand
5. Add additional features like property detail pages
6. Set up property alerts and saved searches

Happy selling! 🏡
