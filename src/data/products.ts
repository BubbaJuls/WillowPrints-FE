/**
 * Fallback product data when API is not configured.
 * Prices in Philippine pesos (PHP), two decimals. Images in public/products/.
 */

import type { Product, HeroSlide } from '@/types/product';

const BASE = '';

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Willow.Prints Logo Tote Bag',
    description:
      'Our signature cream canvas tote features the Willow.Prints Arts & Crafts logo in crisp black print. Made from sturdy, natural fabric that holds up to daily use, this bag is roomy enough for groceries, books, or a day out. The classic design works for gifting or keeping for yourself. Pair it with any outfit for a touch of handmade charm.',
    price: 449.95,
    image: `${BASE}/products/tote-willowprints.jpg`,
    images: ['/products/tote-willowprints.jpg'],
    category: 'tote',
  },
  {
    id: '2',
    name: 'Themed Design Tote Bag',
    description:
      'Stand out with this cream canvas tote featuring a bold, graphic design. Perfect for expressing your style, it combines durable construction with a roomy interior. The high-quality print stays vivid wash after wash. Ideal for concerts, travel, or everyday carry—a statement piece that is also practical.',
    price: 499.95,
    image: `${BASE}/products/tote-themed.jpg`,
    images: ['/products/tote-themed.jpg'],
    category: 'tote',
  },
  {
    id: '3',
    name: 'Personalized Burlap Tote',
    description:
      'A natural burlap tote with a white canvas pocket personalised with a name in elegant script. White rope handles and a button closure give it a rustic, handmade feel. Choose a name and we will print it for you—great for gifts, events, or a unique everyday bag. Sturdy and distinctive.',
    price: 549.5,
    image: `${BASE}/products/tote-personalized.jpg`,
    images: ['/products/tote-personalized.jpg'],
    category: 'tote',
  },
  {
    id: '4',
    name: "Happy Mother's Day Glass Mug",
    description:
      'A clear glass mug with "Happy Mother\'s Day" in decorative script and a subtle copper or bronze finish. Dishwasher-safe and perfect for coffee, tea, or hot chocolate. A thoughtful, lasting gift that she will use every morning. Simple, elegant, and made to be enjoyed year after year.',
    price: 349.99,
    image: `${BASE}/products/mug-mothers-day.jpg`,
    images: ['/products/mug-mothers-day.jpg'],
    category: 'mug',
  },
  {
    id: '5',
    name: 'Personalized Acrylic Keychains',
    description:
      'Clear acrylic keychains with your choice of name and floral or patterned designs. Available in oval or round shapes, with various text and background colours. Each comes with a keyring and an optional tassel. Perfect as favours, gifts, or a little treat for yourself. Lightweight and durable.',
    price: 199.99,
    image: `${BASE}/products/keychains-acrylic.jpg`,
    images: ['/products/keychains-acrylic.jpg'],
    category: 'keychain',
  },
  {
    id: '6',
    name: 'Personalized Glass Mugs',
    description:
      'Clear glass mugs personalised with a name in elegant black script. Ideal for the office, home, or as a thoughtful gift. The design is understated and timeless—great for anyone who appreciates a personal touch. Dishwasher-safe and built for everyday use.',
    price: 349.99,
    image: `${BASE}/products/mugs-personalized.jpg`,
    images: ['/products/mugs-personalized.jpg'],
    category: 'mug',
  },
  {
    id: '7',
    name: 'Name Tag Keychains',
    description:
      'Cream-coloured tag keychains with your name in bold neon pink. Gold lobster clasp, colourful ball chain, and a heart-shaped carabiner make these fun and easy to spot. Perfect for bags, keys, or as event giveaways. Cheerful, customizable, and made to last.',
    price: 249.95,
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
