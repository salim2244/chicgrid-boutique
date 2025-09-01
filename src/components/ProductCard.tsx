import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { toast } = useToast();
  const { addToCart, isInCart } = useCart();
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();

  // 🔑 Always compute from cart context
  const productInCart =
    selectedColor && selectedSize
      ? isInCart(product.id, selectedColor, selectedSize)
      : false;

  const isAddDisabled =
    (product.colors.length > 0 && !selectedColor) ||
    (product.sizes.length > 0 && !selectedSize);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedColor || !selectedSize) {
      toast({
        title: 'Select options',
        description: 'Please choose a color and size before adding to cart.',
        variant: 'destructive',
      });
      return;
    }
    addToCart(product, selectedColor, selectedSize);
    toast({
      title: 'Added to Cart',
      description: `${product.name} (${selectedColor}, ${selectedSize}) added.`,
    });
    // ❌ Don’t reset button state manually
    // The button will update automatically because isInCart() will return true now
  };

  const handleGoToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/cart');
  };

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div
      className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-product transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-accent">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {discountPercentage > 0 && (
          <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
            -{discountPercentage}%
          </Badge>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.brand}</p>
        <p className="font-bold">₹{product.price.toLocaleString()}</p>

        {/* Color picker */}
        <div className="flex gap-2 mt-2">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedColor(color);
              }}
              className={`w-5 h-5 rounded-full border ${
                selectedColor === color ? 'ring-2 ring-primary' : ''
              }`}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>

        {/* Size picker */}
        <div className="flex gap-2 mt-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSize(size);
              }}
              className={`px-2 py-1 text-xs border rounded ${
                selectedSize === size ? 'bg-primary text-white' : ''
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Add / Go to Cart button */}
        <Button
          onClick={productInCart ? handleGoToCart : handleAddToCart}
          className="w-full mt-3"
          disabled={!productInCart && isAddDisabled}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {productInCart ? 'Go to Cart' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
};
