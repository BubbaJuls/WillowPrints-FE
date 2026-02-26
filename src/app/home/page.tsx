'use client';

import Link from 'next/link';
import { Carousel } from '@/components/Carousel';
import { ProductCard } from '@/components/ProductCard';
import { useFeaturedProducts, useHeroSlides } from '@/hooks/use-products';

/**
 * Home Page: hero carousel + 4 featured products + Shop Now CTA.
 * Minimal pastel styling, responsive layout.
 */
export default function HomePage() {
  const { data: slides, isLoading: slidesLoading } = useHeroSlides();
  const { data: featured, isLoading: productsLoading } = useFeaturedProducts();

  return (
    <div className="willow-route flex min-h-screen flex-col">
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
      </section>

      {/* Contact us */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6" id="contact">
        <div className="rounded-lg border border-pastel-border/60 bg-card/50 px-6 py-8 text-pastel-ink sm:px-8 sm:py-10">
          <h2 className="text-xl font-semibold text-pastel-ink sm:text-2xl">
            Contact us
          </h2>
          <p className="mt-2 text-pastel-ink/80">
            Questions, custom orders, or just saying hi—we’d love to hear from you.
          </p>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'contact@willowprints.com'}`}
              className="inline-flex items-center gap-2 text-pastel-sage font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-pastel-sage/50 focus:ring-offset-2 rounded"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send us an email
            </a>

            <div className="flex flex-wrap items-center gap-6">
              <span className="text-sm text-pastel-ink/70">Follow us:</span>
              <a
                href="https://web.facebook.com/Willowprints0102"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-pastel-ink/80 hover:text-pastel-ink focus:outline-none focus:ring-2 focus:ring-pastel-sage/50 focus:ring-offset-2 rounded"
                aria-label="Willow.Prints on Facebook"
              >
                <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>fb.com/Willowprints0102</span>
              </a>
              <a
                href="https://www.instagram.com/willow.printss/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-pastel-ink/80 hover:text-pastel-ink focus:outline-none focus:ring-2 focus:ring-pastel-sage/50 focus:ring-offset-2 rounded"
                aria-label="Willow.Prints on Instagram"
              >
                <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span>instagram.com/willow.printss</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
