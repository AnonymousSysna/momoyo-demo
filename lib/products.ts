export type ProductCategory = 'fruit-tea' | 'ice-cream' | 'coffee' | 'add-on';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: { small: number; medium: number; large: number };
  image: string;
  badge?: 'Bestseller' | 'New' | 'Seasonal';
  featured: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'mango-yakult',
    name: 'Mango Yakult',
    category: 'fruit-tea',
    description: 'Ripe mango with yakult tang and tea freshness.',
    price: { small: 89, medium: 109, large: 129 },
    image: '/images/mango-yakult.svg',
    badge: 'Bestseller',
    featured: true,
  },
  {
    id: 'strawberry-lychee',
    name: 'Strawberry Lychee',
    category: 'fruit-tea',
    description: 'Sweet berry and lychee layers over green tea.',
    price: { small: 95, medium: 115, large: 135 },
    image: '/images/strawberry-lychee.svg',
    badge: 'New',
    featured: true,
  },
  {
    id: 'passionfruit-green-tea',
    name: 'Passionfruit Green Tea',
    category: 'fruit-tea',
    description: 'Citrusy brightness with a clean green tea finish.',
    price: { small: 85, medium: 105, large: 125 },
    image: '/images/passionfruit-green-tea.svg',
    featured: false,
  },
  {
    id: 'mixed-berry-yakult',
    name: 'Mixed Berry Yakult',
    category: 'fruit-tea',
    description: 'Blueberry and raspberry notes with probiotic creaminess.',
    price: { small: 95, medium: 115, large: 135 },
    image: '/images/mixed-berry-yakult.svg',
    badge: 'Seasonal',
    featured: false,
  },
  {
    id: 'ube-overload',
    name: 'Ube Overload',
    category: 'ice-cream',
    description: 'Local ube swirl topped with chewy mochi bits.',
    price: { small: 99, medium: 119, large: 139 },
    image: '/images/ube-overload.svg',
    badge: 'Bestseller',
    featured: true,
  },
  {
    id: 'mango-sorbet',
    name: 'Mango Sorbet',
    category: 'ice-cream',
    description: 'Dairy-free frozen mango crafted for hot afternoons.',
    price: { small: 89, medium: 109, large: 129 },
    image: '/images/mango-sorbet.svg',
    badge: 'Seasonal',
    featured: false,
  },
  {
    id: 'cookies-and-cream',
    name: 'Cookies & Cream',
    category: 'ice-cream',
    description: 'Crunchy cookie crumble folded into vanilla cream.',
    price: { small: 95, medium: 115, large: 135 },
    image: '/images/cookies-and-cream.svg',
    featured: false,
  },
  {
    id: 'matcha-latte-ice-cream',
    name: 'Matcha Latte Ice Cream',
    category: 'ice-cream',
    description: 'Earthy matcha blended with creamy latte sweetness.',
    price: { small: 99, medium: 119, large: 139 },
    image: '/images/matcha-latte-ice-cream.svg',
    badge: 'New',
    featured: false,
  },
  {
    id: 'classic-cold-brew',
    name: 'Classic Cold Brew',
    category: 'coffee',
    description: 'Slow-steeped coffee with bold and smooth body.',
    price: { small: 99, medium: 119, large: 139 },
    image: '/images/classic-cold-brew.svg',
    badge: 'Bestseller',
    featured: true,
  },
  {
    id: 'salted-caramel-latte',
    name: 'Salted Caramel Latte',
    category: 'coffee',
    description: 'Sweet caramel balance with a subtle sea-salt finish.',
    price: { small: 109, medium: 129, large: 149 },
    image: '/images/salted-caramel-latte.svg',
    featured: false,
  },
  {
    id: 'iced-spanish-latte',
    name: 'Iced Spanish Latte',
    category: 'coffee',
    description: 'Rich espresso with velvety milk and light sweetness.',
    price: { small: 109, medium: 129, large: 149 },
    image: '/images/iced-spanish-latte.svg',
    badge: 'New',
    featured: false,
  },
  {
    id: 'brown-sugar-milk-coffee',
    name: 'Brown Sugar Milk Coffee',
    category: 'coffee',
    description: 'Toasted sugar syrup and espresso over creamy milk.',
    price: { small: 115, medium: 135, large: 155 },
    image: '/images/brown-sugar-milk-coffee.svg',
    badge: 'Seasonal',
    featured: false,
  },
  {
    id: 'pearls',
    name: 'Boba Pearls Add-on',
    category: 'add-on',
    description: 'Chewy tapioca pearls for extra texture.',
    price: { small: 20, medium: 20, large: 20 },
    image: '/images/addon-pearls.svg',
    featured: false,
  },
];

export const FEATURED_PRODUCTS = {
  'fruit-tea': PRODUCTS.find((p) => p.id === 'mango-yakult')!,
  'ice-cream': PRODUCTS.find((p) => p.id === 'ube-overload')!,
  coffee: PRODUCTS.find((p) => p.id === 'classic-cold-brew')!,
};

