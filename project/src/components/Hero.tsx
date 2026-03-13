import { motion } from 'framer-motion';
import { ArrowDown, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
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
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-background overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -70, 0],
            y: [0, 70, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[10%] right-[15%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-accent/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[50vw] h-[20vw] bg-primary/10 rounded-full blur-[120px]"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center my-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 uppercase tracking-wider backdrop-blur-sm border border-primary/20 shadow-sm shadow-primary/10"
          >
            <Sparkles className="w-4 h-4" />
            Cuidado Completo Para Seus Pés
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-8 leading-[1.1] max-w-5xl tracking-tight"
        >
          A Solução <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">100% Natural</span> & Poderosa
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-3xl leading-relaxed"
        >
          Fórmula completa que combate o ressecamento, repara unhas e devolve o conforto que seus pés merecem.
        </motion.p>

        {/* Rating */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-12 hover:cursor-default"
        >
          <div className="flex bg-card/50 backdrop-blur-md px-4 py-2 rounded-full border border-border/50 shadow-sm">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.8 + (i * 0.1), type: "spring" }}
              >
                <Star className="w-5 h-5 fill-primary text-primary drop-shadow-sm" />
              </motion.div>
            ))}
          </div>
          <span className="text-muted-foreground font-medium bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
            Nota 4.8/5 baseada em +1.200 avaliações
          </span>
        </motion.div>

        {/* CTA Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center w-full"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Button 
              size="lg" 
              onClick={scrollToProducts}
              className="btn-primary text-xl px-10 py-8 rounded-full font-bold gap-3 shadow-[0_10px_40px_-10px_rgba(var(--primary),0.5)] border border-primary/50 relative overflow-hidden group"
            >
              <div className="absolute inset-x-0 w-full h-full -top-full bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:top-full transition-all duration-700 ease-in-out"></div>
              Ver Produtos
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-sm md:text-base text-foreground font-medium"
          >
            <motion.div whileHover={{ y: -5 }} className="flex items-center gap-2 bg-background/40 backdrop-blur-md px-4 py-2 rounded-full border border-border/30 shadow-sm cursor-default">
              <ShieldCheck className="w-5 h-5 text-primary"/> 100% Natural
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ delay: 0.1 }} className="flex items-center gap-2 bg-background/40 backdrop-blur-md px-4 py-2 rounded-full border border-border/30 shadow-sm cursor-default">
              <ShieldCheck className="w-5 h-5 text-primary"/> Compra Segura
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ delay: 0.2 }} className="flex items-center gap-2 bg-background/40 backdrop-blur-md px-4 py-2 rounded-full border border-border/30 shadow-sm cursor-default">
              <ShieldCheck className="w-5 h-5 text-primary"/> Eficácia Comprovada
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

