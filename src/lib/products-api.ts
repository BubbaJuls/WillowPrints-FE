/**
 * Products API layer – mocked for now with local JSON.
 * Swap with fetch(process.env.NEXT_PUBLIC_API_URL + '/products') when WP-BE is ready.
 */

import { placeholderProducts, heroSlides } from '@/data/products';
import type { Product, HeroSlide } from '@/types/product';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Simulate network delay for demo */
const MOCK_DELAY_MS = 300;

/** Fetch all products (mocked). Use with TanStack Query in useProducts(). */
export async function fetchProducts(): Promise<Product[]> {
  await delay(MOCK_DELAY_MS);
  return [...placeholderProducts];
}

/** Fetch a single product by id (mocked). Use with useProduct(id). */
export async function fetchProductById(id: string): Promise<Product | null> {
  await delay(MOCK_DELAY_MS);
  return placeholderProducts.find((p) => p.id === id) ?? null;
}

/** Fetch featured products (first 4). Use on home page. */
export async function fetchFeaturedProducts(): Promise<Product[]> {
  await delay(MOCK_DELAY_MS);
  return placeholderProducts.slice(0, 4);
}

/** Hero slides for home page carousel */
export async function fetchHeroSlides(): Promise<HeroSlide[]> {
  await delay(MOCK_DELAY_MS);
  return [...heroSlides];
}
