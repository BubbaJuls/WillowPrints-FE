'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Carousel } from '@/components/Carousel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useProduct } from '@/hooks/use-products';
import { useCart } from '@/context/cart-context';
import { formatPricePHP } from '@/lib/format-price';

const MIN_QTY = 1;
const MAX_QTY = 99;

/**
 * Product Detail Page: image carousel, name, description, price,
 * quantity selector, Add to Cart, breadcrumb.
 */
export default function ProductDetailPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : null;
  const { data: product, isLoading, error } = useProduct(id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Carousel slides: main image + gallery images if present
  const carouselSlides = useMemo(() => {
    if (!product) return [];
    const images = product.images?.length ? product.images : [product.image];
    return images.map((url, i) => ({
      id: `${product.id}-${i}`,
      image: url,
      alt: i === 0 ? product.name : `${product.name} view ${i + 1}`,
    }));
  }, [product]);

  if (isLoading) {
    return (
      <div className="willow-route flex min-h-screen flex-col">
        <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6">
          <div className="h-6 w-48 animate-pulse rounded bg-pastel-mist" />
          <div className="mt-8 aspect-square max-w-lg animate-pulse rounded-lg bg-pastel-mist" />
          <div className="mt-6 h-8 w-64 animate-pulse rounded bg-pastel-mist" />
          <div className="mt-4 h-4 w-full animate-pulse rounded bg-pastel-mist" />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="willow-route flex min-h-screen flex-col items-center justify-center px-4">
        <p className="text-pastel-ink/80">Product not found.</p>
        <Button asChild variant="outline" className="mt-4">
          <Link href="/products">Back to products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="willow-route flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6">
        {/* Breadcrumb: Home / Products / Product Name */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-pastel-ink/70">
            <li>
              <Link href="/home" className="hover:text-pastel-ink">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/products" className="hover:text-pastel-ink">
                Products
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-pastel-ink" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image carousel */}
          <div className="overflow-hidden rounded-lg border border-pastel-border/60 bg-pastel-mist">
            {carouselSlides.length > 0 ? (
              <Carousel
                slides={carouselSlides}
                autoPlayInterval={0}
                variant="gallery"
              />
            ) : (
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-pastel-ink sm:text-3xl">
              {product.name}
            </h1>
            <p className="mt-2 text-xl font-semibold text-pastel-ink">
              {formatPricePHP(product.price)}
            </p>
            <p className="mt-4 text-pastel-ink/80 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="quantity" className="text-sm font-medium text-pastel-ink">
                  Quantity
                </label>
                <Input
                  id="quantity"
                  type="number"
                  min={MIN_QTY}
                  max={MAX_QTY}
                  value={quantity}
                  onChange={(e) => {
                    const v = parseInt(e.target.value, 10);
                    if (!Number.isNaN(v)) setQuantity(Math.min(MAX_QTY, Math.max(MIN_QTY, v)));
                  }}
                  className="w-20 border-pastel-border bg-card text-pastel-ink"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="shrink-0 border-pastel-border text-pastel-ink hover:bg-pastel-mist"
                  onClick={() => setQuantity((q) => Math.max(MIN_QTY, q - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="shrink-0 border-pastel-border text-pastel-ink hover:bg-pastel-mist"
                  onClick={() => setQuantity((q) => Math.min(MAX_QTY, q + 1))}
                  aria-label="Increase quantity"
                >
                  +
                </Button>
              </div>
              <Button
                className="bg-pastel-sage text-pastel-ink hover:bg-pastel-sage/90"
                onClick={() => {
                  addItem(product, quantity);
                  setAdded(true);
                  setTimeout(() => setAdded(false), 2000);
                }}
              >
                {added ? 'Added to cart' : 'Add to Cart'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
