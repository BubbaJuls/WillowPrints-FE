'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/products', label: 'Products' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-pastel-border/60 bg-pastel-cream/95 backdrop-blur supports-[backdrop-filter]:bg-pastel-cream/80">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/home"
          className="text-lg font-semibold text-pastel-ink hover:text-pastel-ink/90"
        >
          WillowPrints
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
        </ul>
      </nav>
    </header>
  );
}
