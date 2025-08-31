import { ProductCard } from './ProductCard';
import { mockProducts } from '@/data/mockData';

export const ProductGrid = () => {
  const featuredProducts = mockProducts.filter(product => product.featured);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Featured Collection</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover premium men's fashion from top brands like Tommy Hilfiger, Jack & Jones, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8">All Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};