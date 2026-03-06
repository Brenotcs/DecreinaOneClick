import { Link } from 'react-router-dom';
import logoDecreina from '@/assets/logodecreina.png';

export default function Privacy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20">
            <div className="flex items-center gap-3 sm:gap-4">
              <button onClick={scrollToTop} className="cursor-pointer focus:outline-none">
                <img src={logoDecreina} alt="Decreína" className="h-8 w-auto hover:opacity-80 transition-opacity" />
              </button>
              <div className="h-6 w-px bg-border"></div>
              <div className="font-display font-bold text-sm sm:text-lg text-primary uppercase tracking-wide">
                Políticas de Privacidade
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-32 max-w-4xl pt-32">
        <h1 className="font-display text-4xl lg:text-5xl font-bold mb-8">Política de Privacidade</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground mb-6">A sua privacidade é importante para nós. É política da Decreína respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Coleta de Informações</h2>
          <p className="leading-relaxed text-muted-foreground mb-6">
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço (como durante a criação do seu pedido no checkout). Fazemo-lo por meios justos e legais.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Segurança dos Dados</h2>
          <p className="leading-relaxed text-muted-foreground mb-6">
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. Nosso sistema de pagamento possui criptografia ponta a ponta.
          </p>
        </div>
      </main>

      <footer className="py-12 border-t border-border mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <button onClick={scrollToTop} className="cursor-pointer focus:outline-none">
              <img src={logoDecreina} alt="Decreína" className="h-8 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            </button>
            <Link to="/" className="text-primary hover:underline font-medium">Voltar para página principal</Link>
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Decreína. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
