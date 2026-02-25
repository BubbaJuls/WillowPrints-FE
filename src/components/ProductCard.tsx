import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types/product';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  /** 'featured' for home (Shop Now style), 'grid' for products list (View Details) */
  variant?: 'featured' | 'grid';
  className?: string;
}

/**
 * Reusable product card: image, name, price, and CTA button.
 * Responsive: works in 1–4 column grids.
 */
export function ProductCard({ product, variant = 'grid', className }: ProductCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-lg border border-pastel-border/60 bg-card shadow-sm transition-shadow hover:shadow-md',
        className
      )}
    >
      <Link href={`/products/${product.id}`} className="relative block aspect-square overflow-hidden bg-pastel-mist">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-medium text-pastel-ink line-clamp-2">{product.name}</h3>
        <p className="mt-1 text-lg font-semibold text-pastel-ink">
          ${product.price.toFixed(2)}
        </p>
        <div className="mt-auto pt-4">
          {isFeatured ? (
            <Button asChild className="w-full bg-pastel-sage text-pastel-ink hover:bg-pastel-sage/90">
              <Link href="/products">Shop Now</Link>
            </Button>
          ) : (
            <Button asChild variant="outline" className="w-full border-pastel-border text-pastel-ink hover:bg-pastel-mist">
              <Link href={`/products/${product.id}`}>View Details</Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
