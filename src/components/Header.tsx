import { useState } from 'react';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { categories } from '@/data/mockData';
import { AuthModal } from './AuthModal';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { getTotalItems } = useCart();

  const handleCartClick = () => {
    window.location.href = '/cart';
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-card border-b shadow-nav">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden mr-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              
              <h1 className="text-2xl font-bold tracking-tight">
                <span className="text-primary">MEN'S LUXE</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary transition-smooth">
                    {categories.collection.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] bg-popover">
                      <div className="grid gap-2">
                        {categories.collection.subcategories.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block select-none rounded-md p-3 leading-none hover:bg-accent hover:text-accent-foreground transition-smooth"
                          >
                            <div className="text-sm font-medium">{item.name}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary transition-smooth">
                    {categories.clothing.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] bg-popover">
                      <div className="grid gap-2">
                        {categories.clothing.subcategories.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block select-none rounded-md p-3 leading-none hover:bg-accent hover:text-accent-foreground transition-smooth"
                          >
                            <div className="text-sm font-medium">{item.name}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for products..."
                  className="pl-10 bg-accent border-0 focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsAuthOpen(true)}
              >
                <User className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="relative" onClick={handleCartClick}>
                <ShoppingBag className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-medium">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-card">
              <div className="px-4 py-6 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search for products..."
                    className="pl-10 bg-accent border-0"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Categories
                  </h3>
                  {Object.values(categories).map((category) => (
                    <div key={category.title}>
                      <h4 className="font-medium py-2">{category.title}</h4>
                      <div className="pl-4 space-y-1">
                        {category.subcategories.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};