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
          <div className="aspect-[3/1] max-h-[220px] sm:max-h-[260px] md:max-h-[280px] w-full animate-pulse bg-pastel-mist" />
        ) : slides && slides.length > 0 ? (
          <Carousel slides={slides} autoPlayInterval={5000} variant="hero" />
        ) : null}
      </section>

      {/* Shop description */}
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="rounded-lg border border-pastel-border/60 bg-card/50 px-6 py-6 text-pastel-ink sm:px-8 sm:py-8">
          <p className="leading-relaxed">
            Willow.Prints is a small Arts & Crafts shop focused on personalized and handcrafted items. We make totes, mugs, keychains, and more—each piece designed to be both useful and meaningful. Whether you are looking for a gift with a name on it, a sturdy bag for everyday use, or something special for an occasion, we aim to deliver quality and a touch of care in every order.
          </p>
          <p className="mt-4 leading-relaxed">
            We believe in keeping things simple and personal: clear designs, durable materials, and attention to detail. Our products are made in small batches so we can keep standards high and stay close to what our customers love. Thank you for supporting a small shop—we are glad you are here.
          </p>
        </div>
      </section>

      {/* Featured products + Shop Now */}
      <section className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-pastel-ink sm:text-3xl">
            Featured products
          </h2>
          <p className="mt-2 text-pastel-ink/70">
            Handcrafted totes, mugs, and keychains—made with care.
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
