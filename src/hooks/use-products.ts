'use client';

/**
 * TanStack Query hooks for product data.
 * Example usage: useProducts(), useProduct(id), useFeaturedProducts(), useHeroSlides().
 */

import { useQuery } from '@tanstack/react-query';
import {
  fetchProducts,
  fetchProductById,
  fetchFeaturedProducts,
  fetchHeroSlides,
} from '@/lib/products-api';

const queryKeys = {
  products: ['products'] as const,
  product: (id: string) => ['products', id] as const,
  featured: ['products', 'featured'] as const,
  heroSlides: ['heroSlides'] as const,
};

/** All products – used on Products page */
export function useProducts() {
  return useQuery({
    queryKey: queryKeys.products,
    queryFn: fetchProducts,
  });
}

/** Single product – used on Product Detail page */
export function useProduct(id: string | null) {
  return useQuery({
    queryKey: queryKeys.product(id ?? ''),
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });
}

/** First 4 products – used on Home page featured grid */
export function useFeaturedProducts() {
  return useQuery({
    queryKey: queryKeys.featured,
    queryFn: fetchFeaturedProducts,
  });
}

/** Hero carousel slides – used on Home page */
export function useHeroSlides() {
  return useQuery({
    queryKey: queryKeys.heroSlides,
    queryFn: fetchHeroSlides,
  });
}
