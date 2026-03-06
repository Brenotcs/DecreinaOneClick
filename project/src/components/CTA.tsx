import { motion } from 'framer-motion';
import { ArrowDown, Shield, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTA() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      const headerOffset = 80;
      const elementPosition = productsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Pronto para ter pés macios e saudáveis?
          </h2>
          <p className="text-xl text-background/70 mb-8">
            Junte-se à nossa comunidade e descubra de uma vez por todas o cuidado perfeito da linha Decreína.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                onClick={scrollToProducts}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full font-semibold gap-3"
              >
                Ver Produtos
                <ArrowDown className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center mb-3">
                <Truck className="w-6 h-6" />
              </div>
              <p className="font-medium">Entrega Rápida</p>
              <p className="text-sm text-background/60">Para todo o Brasil</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <p className="font-medium">Compra 100% Segura</p>
              <p className="text-sm text-background/60">Dados Encriptados</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center mb-3">
                <RotateCcw className="w-6 h-6" />
              </div>
              <p className="font-medium">Garantia de Satisfação</p>
              <p className="text-sm text-background/60">Ou seu dinheiro de volta</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
