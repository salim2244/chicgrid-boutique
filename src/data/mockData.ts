export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'mens' | 'womens';
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
    name: 'Premium Wool Jacket',
    price: 299,
    originalPrice: 399,
    category: 'mens',
    subcategory: 'outerwear',
    image: '/src/assets/product-jacket.jpg',
    description: 'Luxurious wool blend jacket with modern tailoring',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Charcoal', 'Black'],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Elegant Evening Dress',
    price: 179,
    category: 'womens',
    subcategory: 'dresses',
    image: '/src/assets/product-dress.jpg',
    description: 'Sophisticated evening dress for special occasions',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Burgundy'],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Premium Leather Sneakers',
    price: 189,
    category: 'womens',
    subcategory: 'shoes',
    image: '/src/assets/product-sneakers.jpg',
    description: 'Handcrafted leather sneakers with comfort padding',
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['White', 'Black', 'Beige'],
    rating: 4.7,
    reviews: 203,
    inStock: true
  },
  {
    id: '4',
    name: 'Cashmere Blend Sweater',
    price: 159,
    originalPrice: 220,
    category: 'mens',
    subcategory: 'knitwear',
    image: '/src/assets/product-jacket.jpg',
    description: 'Ultra-soft cashmere blend for ultimate comfort',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grey', 'Navy', 'Cream'],
    rating: 4.6,
    reviews: 67,
    inStock: true
  },
  {
    id: '5',
    name: 'Silk Blouse',
    price: 129,
    category: 'womens',
    subcategory: 'tops',
    image: '/src/assets/product-dress.jpg',
    description: 'Pure silk blouse with elegant draping',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Black', 'Dusty Pink'],
    rating: 4.8,
    reviews: 145,
    inStock: true
  },
  {
    id: '6',
    name: 'Tailored Chinos',
    price: 89,
    category: 'mens',
    subcategory: 'pants',
    image: '/src/assets/product-jacket.jpg',
    description: 'Perfectly tailored chinos for modern gentlemen',
    sizes: ['30', '32', '34', '36', '38', '40'],
    colors: ['Khaki', 'Navy', 'Olive'],
    rating: 4.5,
    reviews: 98,
    inStock: true
  }
];

export const categories = {
  mens: {
    title: 'Men\'s',
    subcategories: [
      { name: 'New Arrivals', href: '/mens/new' },
      { name: 'Outerwear', href: '/mens/outerwear' },
      { name: 'Knitwear', href: '/mens/knitwear' },
      { name: 'Shirts', href: '/mens/shirts' },
      { name: 'Pants', href: '/mens/pants' },
      { name: 'Accessories', href: '/mens/accessories' }
    ]
  },
  womens: {
    title: 'Women\'s',
    subcategories: [
      { name: 'New Arrivals', href: '/womens/new' },
      { name: 'Dresses', href: '/womens/dresses' },
      { name: 'Tops', href: '/womens/tops' },
      { name: 'Bottoms', href: '/womens/bottoms' },
      { name: 'Shoes', href: '/womens/shoes' },
      { name: 'Accessories', href: '/womens/accessories' }
    ]
  }
};