# WillowPrints Frontend (WP-FE)

Next.js frontend with TypeScript, Tailwind CSS, and Shadcn UI. Minimal pastel styling.

## Run locally

```bash
cd WP-FE
cp .env.local.example .env.local   # then add your Supabase URL and key
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001). The app redirects `/` to `/home`.

### Supabase (optional)

To use Supabase from the frontend (auth, realtime, or direct table access), set in `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL` – project URL (e.g. `https://xxxx.supabase.co`)
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` – anon/publishable key

Then use the clients:

- **Server Components / Server Actions:** `import { createClient } from '@/utils/supabase/server'` and call `createClient(await cookies())` (Next 15) or `createClient(cookies())` (Next 14).
- **Client Components:** `import { createClient } from '@/utils/supabase/client'` and call `createClient()`.
- **Middleware:** `import { createClient } from '@/utils/supabase/middleware'` and use `createClient(request)` to get `{ supabase, response }`.

## Pages

| Route | Description |
|-------|-------------|
| `/home` | Hero carousel, 4 featured products, Shop Now → `/products` |
| `/products` | Responsive grid (3 cols desktop, 1 mobile), search bar (UI only), product cards with View Details → `/products/[id]` |
| `/products/[id]` | Product detail: image carousel, name, description, price, Add to Cart (placeholder), breadcrumb Home / Products / Product Name |

## Tech

- **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, **Shadcn UI** (Button, Input)
- **TanStack Query** for fetching placeholder product data (see `src/hooks/use-products.ts`)
- Placeholder data: `src/data/products.ts` (mocked JSON). Replace with WP-BE API when ready.

## Key folders

- `src/app/home`, `src/app/products`, `src/app/products/[id]` – page routes
- `src/components` – Navbar, Footer, ProductCard, Carousel, Providers
- `src/components/ui` – Button, Input (Shadcn-style)
- `src/hooks/use-products.ts` – TanStack Query hooks (useProducts, useProduct, useFeaturedProducts, useHeroSlides)
- `src/data/products.ts` – Placeholder product and hero slide data
- `src/types/product.ts` – Product and HeroSlide types

## Scripts

- `npm run dev` – Start dev server
- `npm run build` – Production build
- `npm run lint` – ESLint
- `npm run format` – Prettier
