import { Link } from 'react-router-dom';
import logoDecreina from '@/assets/logodecreina.png';
import { Instagram } from 'lucide-react';

const WhatsappIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-5 h-5"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex justify-center md:justify-start">
            <button onClick={scrollToTop} className="cursor-pointer focus:outline-none">
              <img src={logoDecreina} alt="Decreína" className="h-8 w-auto hover:opacity-80 transition-opacity" />
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Decreína. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center justify-center md:justify-end gap-6 text-sm text-muted-foreground">
            <Link to="/termos" className="hover:text-foreground transition-colors">Termos</Link>
            <Link to="/privacidade" className="hover:text-foreground transition-colors">Privacidade</Link>
            <div className="flex items-center gap-4 ml-0 md:ml-2 border-l border-border pl-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="WhatsApp">
                <WhatsappIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col justify-center items-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="font-medium">Métodos de pagamento:</span>
            <div className="flex gap-2">
              <span className="bg-secondary px-2 py-1 rounded text-foreground font-bold shadow-sm border border-border">MULTIBANCO</span>
              <span className="bg-secondary px-2 py-1 rounded text-foreground font-bold shadow-sm border border-border">MB WAY</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
