import { motion } from 'framer-motion';
import { ShoppingCart, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { product } from '@/data/product';
import { useCart } from '@/contexts/CartContext';
import productImage from '@/assets/product-hero.jpg';

export function Hero() {
  const { addToCart } = useCart();
  
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      <div className="container mx-auto px-4 py-20 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Lançamento Exclusivo
            </motion.div>

            <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-2xl lg:text-3xl text-muted-foreground font-light mb-6">
              {product.tagline}
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">(2.847 avaliações)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl lg:text-5xl font-bold text-foreground">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                onClick={addToCart}
                className="btn-primary text-lg px-8 py-6 rounded-full font-semibold gap-3"
              >
                <ShoppingCart className="w-5 h-5" />
                Comprar Agora
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground mt-4">
              ✓ Frete grátis acima de R$ 150 &nbsp;•&nbsp; ✓ Garantia de 1 ano
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full" />
              
              <img
                src={productImage}
                alt={product.name}
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-card p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🦶</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Spa em Casa</p>
                    <p className="text-sm text-muted-foreground">Qualidade Profissional</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
