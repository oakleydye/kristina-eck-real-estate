"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote, MapPin } from "lucide-react";
import type { Review } from "@/lib/reviews";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface ReviewsCarouselProps {
  reviews: Review[];
}

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-2">
              <Card className="h-[450px] border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <Quote className="h-10 w-10 text-primary/20 mb-4 flex-shrink-0" />

                  {/* Review Text - Scrollable */}
                  <div className="flex-grow overflow-y-auto mb-6 pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <div className="text-muted-foreground leading-relaxed space-y-3">
                      {review.review.split('\n').map((paragraph, idx) => (
                        <p key={idx}>
                          {idx === 0 && '"'}
                          {paragraph}
                          {idx === review.review.split('\n').length - 1 && '"'}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  {review.rating && (
                    <div className="flex gap-1 mb-4 flex-shrink-0">
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
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50 flex-shrink-0">
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
  );
}
