/**
 * Placeholder product data (mocked JSON).
 * In production, replace with API calls to WP-BE.
 */

import type { Product, HeroSlide } from '@/types/product';

// Hero carousel slides – minimal pastel-style imagery
export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
    alt: 'Soft pastel art print',
    title: 'Handcrafted Prints',
    subtitle: 'Minimal & timeless',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1200&q=80',
    alt: 'Cozy workspace',
    title: 'For Your Space',
    subtitle: 'Art that feels like home',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&q=80',
    alt: 'Botanical illustration',
    title: 'WillowPrints',
    subtitle: 'Small batch, made with care',
  },
];

// Placeholder products – used for Home featured and Products grid
export const placeholderProducts: Product[] = [
  {
    id: '1',
    name: 'Botanical No. 1',
    description:
      'A delicate botanical print on archival paper. Perfect for a calm corner or above your desk.',
    price: 28.0,
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    ],
    category: 'botanical',
  },
  {
    id: '2',
    name: 'Dawn Landscape',
    description:
      'Soft gradient landscape print. Brings a quiet, morning mood to any room.',
    price: 32.0,
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80',
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80',
    ],
    category: 'landscape',
  },
  {
    id: '3',
    name: 'Abstract Blush',
    description:
      'Minimal abstract print in blush and cream. Fits seamlessly into pastel interiors.',
    price: 26.0,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80',
    ],
    category: 'abstract',
  },
  {
    id: '4',
    name: 'Muted Florals',
    description:
      'Gentle floral composition with muted tones. Printed on sustainable paper.',
    price: 30.0,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    ],
    category: 'botanical',
  },
  {
    id: '5',
    name: 'Soft Geometry',
    description: 'Clean geometric shapes in soft pastels. Ideal for modern, minimal spaces.',
    price: 24.0,
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80',
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80',
    ],
    category: 'abstract',
  },
  {
    id: '6',
    name: 'Meadow Study',
    description: 'Inspired by quiet meadows. A restful addition to bedrooms or reading nooks.',
    price: 29.0,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80',
    ],
    category: 'landscape',
  },
];
