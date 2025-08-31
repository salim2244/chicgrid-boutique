export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: 'mens';
  subcategory: string;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Denim Jeans',
    brand: 'Tommy Hilfiger',
    price: 3999,
    originalPrice: 5999,
    category: 'mens',
    subcategory: 'jeans',
    image: '/src/assets/men-jeans.jpg',
    description: 'Classic fit premium denim with signature Tommy styling',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Light Blue', 'Black'],
    rating: 4.8,
    reviews: 324,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Cotton Casual Shirt',
    brand: 'Jack & Jones',
    price: 2499,
    originalPrice: 3499,
    category: 'mens',
    subcategory: 'shirts',
    image: '/src/assets/men-shirt.jpg',
    description: '100% cotton casual shirt with modern slim fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Grey'],
    rating: 4.6,
    reviews: 189,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Graphic Print T-Shirt',
    brand: 'Roadster',
    price: 899,
    originalPrice: 1299,
    category: 'mens',
    subcategory: 'tshirts',
    image: '/src/assets/men-tshirt.jpg',
    description: 'Trendy graphic print t-shirt with comfortable cotton blend',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'White'],
    rating: 4.4,
    reviews: 567,
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Jogger Track Pants',
    brand: 'HRX',
    price: 1799,
    originalPrice: 2499,
    category: 'mens',
    subcategory: 'lower',
    image: '/src/assets/men-lower.jpg',
    description: 'Comfortable jogger pants perfect for casual wear and workouts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Navy'],
    rating: 4.5,
    reviews: 234,
    inStock: true
  },
  {
    id: '5',
    name: 'Formal Cotton Shirt',
    brand: 'Allen Solly',
    price: 2999,
    category: 'mens',
    subcategory: 'shirts',
    image: '/src/assets/men-shirt.jpg',
    description: 'Premium formal shirt with wrinkle-free technology',
    sizes: ['38', '40', '42', '44', '46'],
    colors: ['White', 'Light Blue', 'Pink'],
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: '6',
    name: 'Slim Fit Chinos',
    brand: 'Peter England',
    price: 2199,
    category: 'mens',
    subcategory: 'lower',
    image: '/src/assets/men-lower.jpg',
    description: 'Slim fit chinos for smart casual occasions',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Khaki', 'Navy', 'Olive'],
    rating: 4.3,
    reviews: 98,
    inStock: true
  },
  {
    id: '7',
    name: 'Polo T-Shirt',
    brand: 'U.S. Polo Assn.',
    price: 1999,
    originalPrice: 2999,
    category: 'mens',
    subcategory: 'tshirts',
    image: '/src/assets/men-tshirt.jpg',
    description: 'Classic polo t-shirt with authentic brand styling',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'White', 'Maroon'],
    rating: 4.6,
    reviews: 445,
    inStock: true
  },
  {
    id: '8',
    name: 'Printed Casual Shirt',
    brand: 'Wrangler',
    price: 2799,
    category: 'mens',
    subcategory: 'shirts',
    image: '/src/assets/men-shirt.jpg',
    description: 'Trendy printed shirt for weekend casual styling',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue Print', 'Black Print', 'Grey Print'],
    rating: 4.4,
    reviews: 123,
    inStock: true
  }
];

export const categories = {
  collection: {
    title: 'Collections',
    subcategories: [
      { name: 'New Arrivals', href: '/new-arrivals' },
      { name: 'Trending Now', href: '/trending' },
      { name: 'Best Sellers', href: '/bestsellers' },
      { name: 'Sale Items', href: '/sale' }
    ]
  },
  clothing: {
    title: 'Clothing',
    subcategories: [
      { name: 'Jeans', href: '/jeans' },
      { name: 'Shirts', href: '/shirts' },
      { name: 'T-Shirts', href: '/tshirts' },
      { name: 'Lower Wear', href: '/lower' },
      { name: 'Casual Wear', href: '/casual' },
      { name: 'Formal Wear', href: '/formal' }
    ]
  }
};

export const brands = [
  'Tommy Hilfiger',
  'Jack & Jones', 
  'Roadster',
  'HRX',
  'Allen Solly',
  'Peter England',
  'U.S. Polo Assn.',
  'Wrangler'
];