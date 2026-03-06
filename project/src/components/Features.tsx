import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Droplets, Wind, CheckCircle, Activity } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Combate Fungos nos Pés",
    description: "Ingredientes ativos combatem a infecção, danificando células fúngicas e deixando a pele saudável."
  },
  {
    icon: Sparkles,
    title: "Repara as Unhas",
    description: "Trata fungos nas unhas eliminando coloração e espessamento, garantindo unhas fortes e brilhantes."
  },
  {
    icon: Droplets,
    title: "Alivia a Coceira",
    description: "Extratos naturais nutrem a pele aliviando coceira e queimação, restaurando o conforto."
  },
  {
    icon: Wind,
    title: "Interrompe o Suor excessivo",
    description: "Uma mistura de ervas remove o excesso de umidade e protege contra o suor."
  },
  {
    icon: CheckCircle,
    title: "Inibe o Mau Odor",
    description: "Agentes antimicrobianos equilibram a epiderme e neutralizam rapidamente os odores."
  },
  {
    icon: Activity,
    title: "Previne Novas Infecções",
    description: "Cria uma barreira contra o crescimento de microrganismos, prevenindo infecções futuras."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-secondary/30" id="benefits">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Cuidado Especializado
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cuidado Completo Para <span className="text-primary">Seus Pés</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A solução mais eficaz e natural para a saúde das suas unhas e pés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
