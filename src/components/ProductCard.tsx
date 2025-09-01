import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { toast } = useToast();
  const { addToCart, isInCart } = useCart();
  const productInCart = isInCart(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleGoToCart = () => {
    window.location.href = '/cart';
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-product transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-accent">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOUI5Qjk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iPkltYWdlPC90ZXh0Pgo8L3N2Zz4K';
          }}
        />
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
            -{discountPercentage}%
          </Badge>
        )}

        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Add to Cart / Go to Cart */}
        <Button
          onClick={productInCart ? handleGoToCart : handleAddToCart}
          className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 gradient-primary text-primary-foreground"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {productInCart ? 'Go to Cart' : 'Add to Cart'}
        </Button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground capitalize">
            {product.subcategory}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="price-brand-section mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-bold text-foreground">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <div className="text-sm text-primary font-medium">
            {product.brand}
          </div>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-muted-foreground">Colors:</span>
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                style={{ 
                  backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                                 color.toLowerCase() === 'black' ? '#000000' :
                                 color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                 color.toLowerCase() === 'grey' || color.toLowerCase() === 'gray' ? '#6b7280' :
                                 color.toLowerCase() === 'beige' ? '#f5f5dc' :
                                 color.toLowerCase() === 'burgundy' ? '#800020' :
                                 color.toLowerCase() === 'cream' ? '#f7f3e9' :
                                 color.toLowerCase() === 'khaki' ? '#c3b091' :
                                 color.toLowerCase() === 'olive' ? '#808000' :
                                 color.toLowerCase() === 'charcoal' ? '#36454f' :
                                 color.toLowerCase() === 'dusty pink' ? '#dcae96' :
                                 color.toLowerCase() === 'ivory' ? '#fffff0' :
                                 '#94a3b8'
                }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <span className={`text-xs font-medium ${
            product.inStock ? 'text-green-600' : 'text-destructive'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          
          <span className="text-xs text-muted-foreground">
            {product.sizes.length} sizes
          </span>
        </div>
      </div>
    </div>
  );
};