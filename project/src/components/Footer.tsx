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

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="font-medium">Métodos de pagamento:</span>
            <div className="flex gap-2">
              <span className="bg-secondary px-2 py-1 rounded text-foreground font-bold shadow-sm border border-border">MULTIBANCO</span>
              <span className="bg-secondary px-2 py-1 rounded text-foreground font-bold shadow-sm border border-border">MB WAY</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 flex-wrap justify-center font-medium">
            <a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Livro de Reclamações Eletrónico
            </a>
            <span className="hidden md:inline text-border">•</span>
            <a href="https://www.consumidor.gov.pt/entidades-ral.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Resolução Alternativa de Litígios (RAL)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
