import { Sparkles, ShieldCheck, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export function DividerBanner() {
  const items = [
    { text: "EFICÁCIA COMPROVADA", icon: Sparkles },
    { text: "100% NATURAL", icon: Leaf },
    { text: "DERMATOLOGICAMENTE TESTADO", icon: ShieldCheck },
  ];

  return (
    <div className="w-full bg-primary/90 text-primary-foreground py-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 pointer-events-none"></div>
      
      {/* Container com animação de marquee (letreiro) */}
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 30 
        }}
      >
        {/* Duplicando a lista para criar o efeito infinito sem quebras vazias */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-4 px-12 md:px-24">
            <item.icon className="w-5 h-5 opacity-80" />
            <span className="font-display font-bold tracking-widest text-sm md:text-base">
              {item.text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
