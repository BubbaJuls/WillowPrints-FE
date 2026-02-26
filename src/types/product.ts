/**
 * Product types for Willow.Prints (API or fallback data).
 * Replace with API types when connecting to WP-BE.
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  /** Main image URL */
  image: string;
  /** Optional gallery for detail page carousel */
  images?: string[];
  /** Category or tag for future filtering */
  category?: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
}
