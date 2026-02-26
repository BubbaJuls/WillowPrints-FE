'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatPricePHP } from '@/lib/format-price';

const MIN_QTY = 1;
const MAX_QTY = 99;

export default function CartPage() {
  const { items, itemCount, updateQuantity, removeItem, subtotal } = useCart();

  if (itemCount === 0) {
    return (
      <div className="willow-route flex min-h-screen flex-col">
        <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6">
          <h1 className="text-2xl font-semibold text-pastel-ink">Your cart</h1>
          <p className="mt-4 text-pastel-ink/70">Your cart is empty.</p>
          <Button asChild className="mt-6 bg-pastel-sage text-pastel-ink hover:bg-pastel-sage/90">
            <Link href="/products">Browse products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="willow-route flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-semibold text-pastel-ink">Your cart</h1>
        <p className="mt-1 text-sm text-pastel-ink/70">
          {itemCount} {itemCount === 1 ? 'item' : 'items'}
        </p>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
          <ul className="flex-1 space-y-6">
            {items.map(({ product, quantity }) => (
              <li
                key={product.id}
                className="flex flex-col gap-4 rounded-lg border border-pastel-border/60 bg-card p-4 sm:flex-row sm:items-center"
              >
                <Link
                  href={`/products/${product.id}`}
                  className="relative block h-24 w-24 shrink-0 overflow-hidden rounded-md bg-pastel-mist sm:h-28 sm:w-28"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/products/${product.id}`}
                    className="font-medium text-pastel-ink hover:underline"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-0.5 text-pastel-ink/80">
                    {formatPricePHP(product.price)} each
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 border-pastel-border text-pastel-ink hover:bg-pastel-mist"
                      onClick={() =>
                        updateQuantity(
                          product.id,
                          Math.max(MIN_QTY, quantity - 1)
                        )
                      }
                      aria-label="Decrease quantity"
                    >
                      −
                    </Button>
                    <Input
                      type="number"
                      min={MIN_QTY}
                      max={MAX_QTY}
                      value={quantity}
                      onChange={(e) => {
                        const v = parseInt(e.target.value, 10);
                        if (!Number.isNaN(v))
                          updateQuantity(
                            product.id,
                            Math.min(MAX_QTY, Math.max(MIN_QTY, v))
                          );
                      }}
                      className="h-8 w-14 border-pastel-border bg-card text-center text-pastel-ink"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 border-pastel-border text-pastel-ink hover:bg-pastel-mist"
                      onClick={() =>
                        updateQuantity(
                          product.id,
                          Math.min(MAX_QTY, quantity + 1)
                        )
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </Button>
                  </div>
                  <span className="w-20 text-right font-medium text-pastel-ink">
                    {formatPricePHP(product.price * quantity)}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-pastel-ink/70 hover:text-destructive hover:bg-destructive/10"
                    onClick={() => removeItem(product.id)}
                    aria-label="Remove from cart"
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <div className="shrink-0 lg:w-80">
            <div className="sticky top-24 rounded-lg border border-pastel-border/60 bg-card p-6">
              <h2 className="text-lg font-semibold text-pastel-ink">
                Order summary
              </h2>
              <div className="mt-4 flex justify-between text-pastel-ink/80">
                <span>Subtotal</span>
                <span>{formatPricePHP(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs text-pastel-ink/50">
                Shipping and taxes calculated at checkout.
              </p>
              <Button
                className="mt-6 w-full bg-pastel-sage text-pastel-ink hover:bg-pastel-sage/90"
                asChild
              >
                <Link href="/checkout">Proceed to checkout</Link>
              </Button>
              <Button variant="outline" className="mt-3 w-full border-pastel-border text-pastel-ink hover:bg-pastel-mist" asChild>
                <Link href="/products">Continue shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
