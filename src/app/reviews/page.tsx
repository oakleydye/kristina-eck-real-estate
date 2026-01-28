import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Home } from "lucide-react";
import { getAllReviews, getAverageRating, getTotalReviewCount, formatReviewDate } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | Kristina Eck Real Estate",
  description: "Read what our clients say about working with Kristina Eck Real Estate Team. Real reviews from satisfied homebuyers and sellers in Cache Valley.",
  keywords: ["client reviews", "testimonials", "real estate reviews", "Logan Utah realtor reviews", "Cache Valley real estate testimonials"],
  openGraph: {
    title: "Client Reviews - Kristina Eck Real Estate Team",
    description: "See why clients trust Kristina Eck for their real estate needs in Cache Valley. Read authentic reviews from satisfied buyers and sellers.",
  },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${
            star <= rating
              ? "fill-primary text-primary"
              : "text-border"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const reviews = getAllReviews();
  const averageRating = getAverageRating();
  const totalReviews = getTotalReviewCount();

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              Client Reviews
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              What Our Clients Say
            </h1>
            <p className="text-lg text-muted-foreground">
              Real experiences from families we've helped find their dream homes in Cache Valley.
            </p>

            {/* Stats */}
            {(averageRating > 0 || totalReviews > 0) && (
              <div className="flex items-center justify-center gap-8 pt-6">
                {averageRating > 0 && (
                  <>
                    <div className="text-center">
                      <div className="flex items-center gap-2 justify-center mb-1">
                        <span className="text-3xl font-bold text-primary">{averageRating}</span>
                        <Star className="h-6 w-6 fill-primary text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                    <div className="h-12 w-px bg-border" />
                  </>
                )}
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{totalReviews}</div>
                  <div className="text-sm text-muted-foreground">Total Reviews</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Avatar Circle with Initial */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                      </div>

                      {/* Review Content */}
                      <div className="flex-1 space-y-4">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              {review.name}
                            </h3>
                            {(review.location || review.propertyType) && (
                              <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                                {review.location && (
                                  <span className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    {review.location}
                                  </span>
                                )}
                                {review.propertyType && (
                                  <span className="flex items-center gap-1">
                                    <Home className="h-3 w-3" />
                                    {review.propertyType}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col items-start sm:items-end gap-1">
                            {review.rating && <StarRating rating={review.rating} />}
                            {review.date && (
                              <span className="text-sm text-muted-foreground">
                                {formatReviewDate(review.date)}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Review Text */}
                        <div className="text-muted-foreground leading-relaxed space-y-4">
                          {review.review.split('\n').map((paragraph, idx) => (
                            <p key={idx}>
                              {idx === 0 && '"'}
                              {paragraph}
                              {idx === review.review.split('\n').length - 1 && '"'}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
