import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import logoDecreina from '@/assets/logodecreina.png';

export function Header() {
  const { items, setIsCartOpen } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button onClick={scrollToTop} className="font-display text-xl font-bold text-foreground cursor-pointer focus:outline-none">
            <img src={logoDecreina} alt="Decreína" className="h-8 w-auto hover:opacity-80 transition-opacity" />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-muted rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
