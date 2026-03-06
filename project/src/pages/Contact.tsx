import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-32 max-w-2xl text-center">
        <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">Fale Conosco</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Tem alguma dúvida sobre os produtos Decreína? Nossa equipe está pronta para ajudar.
        </p>

        <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground text-lg mb-2">E-mail</h3>
              <p className="text-muted-foreground">contato@decreina.com.br</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">(11) 99999-9999</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-2">Horário de Atendimento</h3>
              <p className="text-muted-foreground">Segunda a Sexta, das 9h às 18h</p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-border">
              <Button onClick={() => window.location.href = '/'} className="btn-primary py-6 px-8 rounded-full font-semibold">
                Voltar para a Loja
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
