/**
 * Fallback product data when API is not configured.
 * Prices in Philippine pesos (PHP). Images in public/products/.
 */

import type { Product, HeroSlide } from '@/types/product';

const BASE = '';

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Willow.Prints Logo Tote Bag',
    description:
      'Cream canvas tote with the Willow.Prints Arts & Crafts logo. Sturdy, natural fabric with black printed design. Perfect for daily use or gifting.',
    price: 449,
    image: `${BASE}/products/tote-willowprints.jpg`,
    images: ['/products/tote-willowprints.jpg'],
    category: 'tote',
  },
  {
    id: '2',
    name: 'Themed Design Tote Bag',
    description:
      'Cream canvas tote with a bold graphic design. Statement piece for fans of music and style. Durable construction, roomy interior.',
    price: 499,
    image: `${BASE}/products/tote-themed.jpg`,
    images: ['/products/tote-themed.jpg'],
    category: 'tote',
  },
  {
    id: '3',
    name: 'Personalized Burlap Tote',
    description:
      'Natural burlap tote with white canvas pocket. Custom name printed in elegant script. White rope handles and button closure.',
    price: 549,
    image: `${BASE}/products/tote-personalized.jpg`,
    images: ['/products/tote-personalized.jpg'],
    category: 'tote',
  },
  {
    id: '4',
    name: "Happy Mother's Day Glass Mug",
    description:
      'Clear glass mug with "Happy Mother\'s Day" in decorative script. Copper/bronze finish. Dishwasher-safe, perfect for a thoughtful gift.',
    price: 349,
    image: `${BASE}/products/mug-mothers-day.jpg`,
    images: ['/products/mug-mothers-day.jpg'],
    category: 'mug',
  },
  {
    id: '5',
    name: 'Personalized Acrylic Keychains',
    description:
      'Clear acrylic keychains with custom names and floral designs. Multiple styles and colors. Includes keyring and optional tassel.',
    price: 199,
    image: `${BASE}/products/keychains-acrylic.jpg`,
    images: ['/products/keychains-acrylic.jpg'],
    category: 'keychain',
  },
  {
    id: '6',
    name: 'Personalized Glass Mugs',
    description:
      'Clear glass mugs with your name in elegant black script. Ideal for home, office, or as a gift.',
    price: 349,
    image: `${BASE}/products/mugs-personalized.jpg`,
    images: ['/products/mugs-personalized.jpg'],
    category: 'mug',
  },
  {
    id: '7',
    name: 'Name Tag Keychains',
    description:
      'Cream tag keychains with your name in bold neon pink. Gold clasp, colorful ball chain, heart carabiner. Fun and customizable.',
    price: 249,
    image: `${BASE}/products/keychains-name-tags.jpg`,
    images: ['/products/keychains-name-tags.jpg'],
    category: 'keychain',
  },
];

// Hero carousel: first 3 products
export const heroSlides: HeroSlide[] = [
  {
    id: 'hero-1',
    image: '/products/tote-willowprints.jpg',
    alt: 'Willow.Prints Logo Tote',
    title: 'Willow.Prints',
    subtitle: 'Arts & Crafts',
  },
  {
    id: 'hero-2',
    image: '/products/tote-themed.jpg',
    alt: 'Themed Design Tote',
    title: 'Handcrafted totes & more',
    subtitle: 'Made with care',
  },
  {
    id: 'hero-3',
    image: '/products/mug-mothers-day.jpg',
    alt: "Mother's Day Mug",
    title: 'Personalized gifts',
    subtitle: 'Mugs, keychains & bags',
  },
];

export const placeholderProducts: Product[] = initialProducts;
