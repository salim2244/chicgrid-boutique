import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">LUXE</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Redefining luxury fashion with timeless elegance and contemporary style. 
              Discover pieces that speak to your unique sense of style.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-primary-light">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-light">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-light">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-light">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </a>
              <a href="/collections" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Collections
              </a>
              <a href="/new-arrivals" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                New Arrivals
              </a>
              <a href="/sale" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Sale
              </a>
              <a href="/lookbook" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Lookbook
              </a>
            </nav>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Care</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact Us
              </a>
              <a href="/size-guide" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Size Guide
              </a>
              <a href="/shipping" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Shipping Info
              </a>
              <a href="/returns" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Returns & Exchanges
              </a>
              <a href="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <p className="text-primary-foreground/80 text-sm">
              Subscribe to our newsletter for exclusive offers and style updates.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email"
                className="bg-primary-light border-primary-light text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="gradient-secondary text-secondary-foreground">
                Subscribe
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mt-6">
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>hello@luxefashion.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 LUXE Fashion. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-4 text-primary-foreground/40">
              <span className="text-sm">Secure payments:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-primary-foreground/20 rounded flex items-center justify-center text-xs">
                  VISA
                </div>
                <div className="w-8 h-5 bg-primary-foreground/20 rounded flex items-center justify-center text-xs">
                  MC
                </div>
                <div className="w-8 h-5 bg-primary-foreground/20 rounded flex items-center justify-center text-xs">
                  AMEX
                </div>
                <div className="w-8 h-5 bg-primary-foreground/20 rounded flex items-center justify-center text-xs">
                  PP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};