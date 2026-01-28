/**
 * Reviews utilities for reading and parsing client reviews
 */

import fs from 'fs';
import path from 'path';
import { cache } from 'react';

const reviewsDirectory = path.join(process.cwd(), 'content/reviews');

export interface Review {
  id: string;
  name: string;
  review: string;
  rating?: number; // 1-5, optional
  date?: string;
  location?: string;
  propertyType?: string;
  featured?: boolean;
}

// Get all review IDs
export function getAllReviewIds(): string[] {
  try {
    const fileNames = fs.readdirSync(reviewsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.json'))
      .map((fileName) => fileName.replace(/\.json$/, ''));
  } catch (error) {
    return [];
  }
}

// Get a single review by ID
export const getReviewById = cache((id: string): Review | null => {
  try {
    if (!id || typeof id !== 'string') {
      return null;
    }

    const fullPath = path.join(reviewsDirectory, `${id}.json`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const reviewData = JSON.parse(fileContents);

    return {
      id,
      name: reviewData.name || 'Anonymous',
      review: reviewData.review || '',
      rating: reviewData.rating,
      date: reviewData.date,
      location: reviewData.location,
      propertyType: reviewData.propertyType,
      featured: reviewData.featured || false,
    };
  } catch (error) {
    console.error(`Error reading review ${id}:`, error);
    return null;
  }
});

// Fisher-Yates shuffle algorithm for randomizing array order
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get all reviews (randomized order)
export const getAllReviews = cache((): Review[] => {
  const ids = getAllReviewIds();

  const reviews = ids
    .map((id) => getReviewById(id))
    .filter((review): review is Review => review !== null);

  // Randomize the order
  return shuffleArray(reviews);
});

// Get featured reviews
export function getFeaturedReviews(limit: number = 3): Review[] {
  const allReviews = getAllReviews();
  const featured = allReviews.filter((review) => review.featured);

  // If we don't have enough featured reviews, fill with recent ones
  if (featured.length < limit) {
    const additional = allReviews
      .filter((review) => !review.featured)
      .slice(0, limit - featured.length);
    return [...featured, ...additional];
  }

  return featured.slice(0, limit);
}

// Get reviews by rating
export function getReviewsByRating(rating: number): Review[] {
  const allReviews = getAllReviews();
  return allReviews.filter((review) => review.rating === rating);
}

// Get average rating (only counts reviews with ratings)
export function getAverageRating(): number {
  const allReviews = getAllReviews();
  const reviewsWithRatings = allReviews.filter((review) => review.rating !== undefined);

  if (reviewsWithRatings.length === 0) return 0;

  const sum = reviewsWithRatings.reduce((acc, review) => acc + (review.rating || 0), 0);
  return Math.round((sum / reviewsWithRatings.length) * 10) / 10; // Round to 1 decimal
}

// Get total review count
export function getTotalReviewCount(): number {
  return getAllReviews().length;
}

// Format date for display
export function formatReviewDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
}
