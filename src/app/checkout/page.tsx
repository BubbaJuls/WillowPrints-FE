'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CheckoutPage() {
  return (
    <div className="willow-route flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-2xl flex-1 px-4 py-12 sm:px-6 text-center">
        <h1 className="text-2xl font-semibold text-pastel-ink">Checkout</h1>
        <p className="mt-4 text-pastel-ink/70">
          Payment and shipping will be available soon. Thank you for your interest!
        </p>
        <Button asChild variant="outline" className="mt-6 border-pastel-border text-pastel-ink hover:bg-pastel-mist">
          <Link href="/cart">Back to cart</Link>
        </Button>
      </div>
    </div>
  );
}
