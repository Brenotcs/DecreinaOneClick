import { motion } from 'framer-motion';
import { ShoppingCart, Shield, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { product } from '@/data/product';
import { useCart } from '@/contexts/CartContext';

export function CTA() {
  const { addToCart } = useCart();

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
            Pronta para ter pés macios e saudáveis?
          </h2>
          <p className="text-xl text-background/70 mb-8">
            Junte-se a mais de 15.000 clientes satisfeitas e descubra o cuidado profissional em casa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                onClick={addToCart}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full font-semibold gap-3"
              >
                <ShoppingCart className="w-5 h-5" />
                Comprar por R$ {product.price.toFixed(2).replace('.', ',')}
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center mb-3">
                <Truck className="w-6 h-6" />
              </div>
              <p className="font-medium">Frete Grátis</p>
              <p className="text-sm text-background/60">Acima de R$ 150</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <p className="font-medium">Garantia de 1 Ano</p>
              <p className="text-sm text-background/60">Cobertura total</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center mb-3">
                <RotateCcw className="w-6 h-6" />
              </div>
              <p className="font-medium">30 Dias para Troca</p>
              <p className="text-sm text-background/60">Sem burocracia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
