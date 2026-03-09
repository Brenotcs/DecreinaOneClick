import { motion } from 'framer-motion';
import { ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/product';

export function Products() {
  const { addToCart } = useCart();

  return (
    <section className="py-24 bg-secondary/20" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Escolha o <span className="text-primary">Tratamento Ideal</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resultados visíveis nos primeiros dias de uso. Cuide da saúde dos seus pés agora mesmo.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => {
            const discount = product.originalPrice 
              ? Math.round((1 - product.price / product.originalPrice) * 100) 
              : 0;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-3xl p-8 shadow-xl border-2 border-border hover:border-primary/50 transition-colors flex flex-col relative"
              >
                {discount > 0 && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {discount}% OFF
                  </div>
                )}
                
                <div className="w-full aspect-square bg-secondary rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
                  {product.images?.[0] ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <span className="text-6xl">{index === 0 ? "🧴" : "💨"}</span>
                  )}
                </div>

                <div className="mb-6 flex-1">
                  <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="flex items-end gap-3 mb-6">
                    <span className="text-4xl font-bold text-foreground">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through mb-1">
                        R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full btn-primary py-6 text-lg font-bold rounded-full gap-2 shadow-lg shadow-primary/20"
                    onClick={() => addToCart({ id: product.id, price: product.price })}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
