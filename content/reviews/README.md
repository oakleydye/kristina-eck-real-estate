# How to Add New Reviews

Adding client reviews is easy! Just create a new JSON file in this directory.

## Minimal Format (Only Name & Review Required!)

The simplest review only needs two fields:

```json
{
  "name": "Client Name",
  "review": "The full review text goes here. Keep it authentic and detailed."
}
```

## Full Format (All Optional Fields)

You can include additional details if available:

```json
{
  "name": "Client Name",
  "review": "The full review text goes here. Keep it authentic and detailed.",
  "rating": 5,
  "date": "2025-01-28",
  "location": "Logan, UT",
  "propertyType": "Single Family Home",
  "featured": true
}
```

## Field Descriptions

- **name** (REQUIRED): The client's name. Can be first name only, full name, or "FirstName & FirstName LastName" for couples.
- **review** (REQUIRED): The review text. Keep it authentic and conversational. For multi-paragraph reviews, use `\n` to separate paragraphs.
- **rating** (optional): Number from 1-5. Only include if client provided a rating.
- **date** (optional): Date in YYYY-MM-DD format (e.g., "2025-01-28"). Only include if you want to display when the review was written.
- **location** (optional): City/area where the property was located (e.g., "North Logan, UT")
- **propertyType** (optional): Type of property (e.g., "Single Family Home", "Townhouse", "Condo")
- **featured** (optional): Set to `true` to feature this review. Defaults to `false`. Limit to 3-4 featured reviews.

## File Naming

Name the file using lowercase letters, hyphens for spaces, and the `.json` extension:
- `john-smith.json`
- `sarah-and-mike-johnson.json`
- `emily-davis.json`

## Steps to Add a Review

1. Create a new `.json` file in the `content/reviews/` directory
2. Copy the JSON structure above
3. Fill in the client's information
4. Save the file
5. The review will automatically appear on the `/reviews` page

## Example

File: `content/reviews/jane-doe.json`

```json
{
  "name": "Jane Doe",
  "rating": 5,
  "review": "Kristina was amazing to work with! She helped us find the perfect starter home in our budget and made the entire process stress-free. We couldn't have asked for a better experience!",
  "date": "2025-01-15",
  "location": "Providence, UT",
  "propertyType": "Single Family Home",
  "featured": false
}
```

## Multi-Paragraph Reviews

To add line breaks and create multiple paragraphs in a review, use `\n` in the JSON string:

```json
{
  "name": "John Smith",
  "review": "First paragraph of the review goes here.\n\nSecond paragraph with more details.\n\nThird paragraph with final thoughts.",
  "rating": 5
}
```

Each `\n` will create a new paragraph with proper spacing.

## Tips

- Keep reviews authentic and natural
- Include specific details when possible
- Vary the length - some short, some longer
- Only mark truly exceptional reviews as featured
- Date format must be YYYY-MM-DD
- Rating must be a number (not a string)
- Use `\n` to separate paragraphs in longer reviews

## Need Help?

If you have questions about adding reviews, contact your developer.
