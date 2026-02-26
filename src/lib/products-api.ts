/**
 * Products API: fetches from WP-BE when NEXT_PUBLIC_API_URL is set;
 * otherwise uses local placeholder data. Prices in PHP.
 */

import { placeholderProducts, heroSlides } from '@/data/products';
import type { Product, HeroSlide } from '@/types/product';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const MOCK_DELAY_MS = 200;

const apiBase = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_API_URL;

/** Map BE product (id, name, description, price, images[]) to FE Product */
function mapApiProduct(p: { id: string; name: string; description: string; price: number | string; images: string[] }): Product {
  const images = Array.isArray(p.images) ? p.images : [];
  const price = typeof p.price === 'number' ? p.price : Number(p.price);
  return {
    id: p.id,
    name: p.name,
    description: p.description,
    price,
    image: images[0] ?? '',
    images: images.length ? images : undefined,
  };
}

async function fetchFromApi<T>(path: string): Promise<T> {
  const base = apiBase?.replace(/\/$/, '');
  if (!base) throw new Error('No API URL');
  const res = await fetch(`${base}${path}`);
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    if (apiBase) {
      const list = await fetchFromApi<{ id: string; name: string; description: string; price: number; images: string[] }[]>('/products');
      return list.map(mapApiProduct);
    }
  } catch {
    // fallback to local data
  }
  await delay(MOCK_DELAY_MS);
  return [...placeholderProducts];
}

export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    if (apiBase) {
      const p = await fetchFromApi<{ id: string; name: string; description: string; price: number; images: string[] }>(`/products/${id}`);
      return mapApiProduct(p);
    }
  } catch {
    // fallback to local lookup
  }
  await delay(MOCK_DELAY_MS);
  return placeholderProducts.find((p) => p.id === id) ?? null;
}

export async function fetchFeaturedProducts(): Promise<Product[]> {
  const all = await fetchProducts();
  return all.slice(0, 4);
}

export async function fetchHeroSlides(): Promise<HeroSlide[]> {
  await delay(MOCK_DELAY_MS);
  return [...heroSlides];
}
