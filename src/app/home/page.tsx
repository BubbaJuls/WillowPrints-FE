'use client';

import Link from 'next/link';
import { Carousel } from '@/components/Carousel';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useFeaturedProducts, useHeroSlides } from '@/hooks/use-products';

/**
 * Home Page: hero carousel + 4 featured products + Shop Now CTA.
 * Minimal pastel styling, responsive layout.
 */
export default function HomePage() {
  const { data: slides, isLoading: slidesLoading } = useHeroSlides();
  const { data: featured, isLoading: productsLoading } = useFeaturedProducts();

  return (
    <div className="willow-route flex min-h-screen flex-col bg-pastel-cream">
      {/* Hero with image carousel */}
      <section className="w-full px-0">
        {slidesLoading ? (
          <div className="aspect-[21/9] w-full animate-pulse bg-pastel-mist" />
        ) : slides && slides.length > 0 ? (
          <Carousel slides={slides} autoPlayInterval={5000} variant="hero" />
        ) : null}
      </section>

      {/* Featured products + Shop Now */}
      <section className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-pastel-ink sm:text-3xl">
            Featured prints
          </h2>
          <p className="mt-2 text-pastel-ink/70">
            Handcrafted, minimal, and made with care.
          </p>
        </div>

        {productsLoading ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-pastel-mist animate-pulse"
              />
            ))}
          </div>
        ) : featured && featured.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} variant="featured" />
            ))}
          </div>
        ) : null}

        <div className="mt-12 flex justify-center">
          <Button asChild className="bg-pastel-sage text-pastel-ink hover:bg-pastel-sage/90">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
