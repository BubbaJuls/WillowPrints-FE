'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/cart-context';

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/products', label: 'Products' },
];

export function Navbar() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pastel-border/60 bg-pastel-cream/95 backdrop-blur supports-[backdrop-filter]:bg-pastel-cream/80">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/home"
          className="flex items-center gap-2 text-pastel-ink hover:opacity-90"
          aria-label="Willow.Prints – Home"
        >
          <Image
            src="/willowprints-logo.png"
            alt="Willow.Prints Arts & Crafts"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'text-sm font-medium text-pastel-ink/80 transition-colors hover:text-pastel-ink'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/cart"
              className="relative flex items-center justify-center text-pastel-ink/80 transition-colors hover:text-pastel-ink"
              aria-label={`Cart, ${itemCount} items`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-pastel-sage px-1 text-xs font-medium text-pastel-ink">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
