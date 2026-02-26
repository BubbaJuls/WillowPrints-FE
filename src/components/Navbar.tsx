'use client';

import Link from 'next/link';
import Image from 'next/image';
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
        </ul>
      </nav>
    </header>
  );
}
