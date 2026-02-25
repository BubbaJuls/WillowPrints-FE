import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-pastel-border/60 bg-pastel-cream/50 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link
            href="/home"
            className="text-sm font-medium text-pastel-ink/80 hover:text-pastel-ink"
          >
            WillowPrints
          </Link>
          <ul className="flex gap-6 text-sm text-pastel-ink/70">
            <li>
              <Link href="/home" className="hover:text-pastel-ink">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-pastel-ink">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <p className="mt-4 text-center text-xs text-pastel-ink/50 sm:text-left">
          © {new Date().getFullYear()} WillowPrints. Handcrafted prints, made with care.
        </p>
      </div>
    </footer>
  );
}
