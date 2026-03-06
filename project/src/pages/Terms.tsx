import { Link } from 'react-router-dom';
import logoDecreina from '@/assets/logodecreina.png';

export default function Terms() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20">
            <div className="flex items-center gap-4">
              <button onClick={scrollToTop} className="cursor-pointer focus:outline-none">
                <img src={logoDecreina} alt="Decreína" className="h-8 w-auto hover:opacity-80 transition-opacity" />
              </button>
              <div className="h-6 w-px bg-border"></div>
              <div className="font-display font-bold text-base sm:text-lg text-primary uppercase tracking-wide">
                Termos de Uso
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-32 max-w-4xl pt-32">
        <h1 className="font-display text-4xl lg:text-5xl font-bold mb-8">Termos de Uso</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Aceitação dos Termos</h2>
          <p className="leading-relaxed text-muted-foreground mb-6">
            Ao acessar e realizar compras em nosso site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Uso dos Produtos</h2>
          <p className="leading-relaxed text-muted-foreground mb-6">
            Os produtos Decreína são cosméticos para cuidados com os pés. Eles devem ser utilizados apenas conforme as instruções descritas nas embalagens.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Política de Compras</h2>
          <p className="leading-relaxed text-muted-foreground mb-6">
            Todas as compras estão sujeitas à confirmação de pagamento e disponibilidade de estoque. Reservamo-nos o direito de cancelar pedidos suspeitos de fraude.
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
