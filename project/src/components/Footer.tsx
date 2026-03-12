import { Link } from 'react-router-dom';
import logoDecreina from '@/assets/logodecreina.png';

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
