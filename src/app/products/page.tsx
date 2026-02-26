'use client';

import { Input } from '@/components/ui/input';
import { ProductCard } from '@/components/ProductCard';
import { useProducts } from '@/hooks/use-products';

/**
 * Products Page: responsive grid (3 cols desktop, 1 on mobile),
 * search bar (no functionality yet), product cards with View Details → /products/[id].
 */
export default function ProductsPage() {
  const { data: products, isLoading, error } = useProducts();

  return (
    <div className="willow-route flex min-h-screen flex-col bg-pastel-cream">
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-semibold text-pastel-ink sm:text-3xl">
          All products
        </h1>
        <p className="mt-1 text-pastel-ink/70">
          Browse our full collection of handcrafted totes, mugs, and keychains.
        </p>

        {/* Search bar – placeholder, no functionality yet */}
        <div className="mt-6 max-w-md">
          <Input
            type="search"
            placeholder="Search products…"
            className="border-pastel-border bg-card text-pastel-ink placeholder:text-pastel-ink/50 focus-visible:ring-pastel-sage"
            aria-label="Search products"
          />
        </div>

        {/* Responsive grid: 3 cols desktop, 1 col mobile */}
        {error && (
          <p className="mt-6 text-sm text-destructive">
            Failed to load products. Please try again.
          </p>
        )}

        {isLoading ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-pastel-mist animate-pulse"
              />
            ))}
          </div>
        ) : products && products.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} variant="grid" />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-pastel-ink/70">No products yet.</p>
        )}
      </div>
    </div>
  );
}
