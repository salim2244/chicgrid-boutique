import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart, ArrowLeft } from 'lucide-react';
import { mockProducts } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Button onClick={() => navigate('/')}>Go back to home</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast({
        title: "Please select options",
        description: "Please select both color and size before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    addToCart(product, selectedColor, selectedSize);
    toast({
      title: "Added to cart!",
      description: `${product.name} (${selectedColor}, ${selectedSize}) added to your cart.`,
    });
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const discount = product.originalPrice ? 
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  const isProductInCart = selectedColor && selectedSize ? isInCart(product.id, selectedColor, selectedSize) : false;

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                {discount > 0 && (
                  <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                    {discount}% OFF
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart 
                    className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                  />
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">{product.brand}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-6">{product.description}</p>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Color</h3>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      onClick={() => setSelectedColor(color)}
                      className="min-w-16"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Size</h3>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className="min-w-12"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                {isProductInCart ? (
                  <Button 
                    onClick={handleGoToCart}
                    className="w-full gradient-primary text-primary-foreground"
                    size="lg"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Go to Cart
                  </Button>
                ) : (
                  <Button 
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="w-full gradient-primary text-primary-foreground"
                    size="lg"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                )}
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    if (!selectedColor || !selectedSize) {
                      toast({
                        title: "Please select options",
                        description: "Please select both color and size.",
                        variant: "destructive",
                      });
                      return;
                    }
                    // Add to cart and go to checkout
                    if (!isProductInCart) {
                      addToCart(product, selectedColor, selectedSize);
                    }
                    // Here you would typically navigate to checkout
                    toast({
                      title: "Proceeding to checkout",
                      description: "Checkout functionality coming soon!",
                    });
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;