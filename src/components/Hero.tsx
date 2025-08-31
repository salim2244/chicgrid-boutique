import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-fashion.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Men's Fashion
            <br />
            {/* <span className="gradient-secondary bg-clip-text text-transparent">
              Store
            </span> */}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover premium men's clothing from top brands like Tommy Hilfiger, Jack & Jones, and more at unbeatable prices.
          </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg gradient-secondary text-secondary-foreground hover:opacity-90 transition-smooth shadow-hero"
          >
            Shop Collection
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary transition-smooth"
          >
            Explore Lookbook
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">200+</div>
            <div className="text-sm text-white/80">Men's Items</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">8</div>
            <div className="text-sm text-white/80">Top Brands</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">4.8★</div>
            <div className="text-sm text-white/80">Customer Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};