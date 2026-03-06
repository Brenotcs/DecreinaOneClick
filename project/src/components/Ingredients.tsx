import { motion } from 'framer-motion';
import { Leaf, Droplet, ShieldPlus } from 'lucide-react';

const ingredients = [
  {
    icon: Leaf,
    name: "Óleo de Melaleuca",
    description: "Possui fortes propriedades antifúngicas e antissépticas naturais. Neutraliza o crescimento do fungo na raiz e acalma a pele de irritações e vermelhidão."
  },
  {
    icon: Droplet,
    name: "Ureia 10%",
    description: "A ureia proporciona uma hidratação ultra profunda, quebrando o espessamento agressivo da pele e unhas, permitindo que a pele respire e se repare rapidamente."
  },
  {
    icon: ShieldPlus,
    name: "Pantenol (Pró-Vitamina B5)",
    description: "Restaura os tecidos lesados e promove a cicatrização. Ajuda a pele a reter umidade, mantendo proteção duradoura e devolvendo a maciez."
  }
];

export function Ingredients() {
  return (
    <section className="py-24 bg-teal-900 text-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              O que torna a Decreína tão <span className="text-teal-300">Eficaz?</span>
            </h2>
            <p className="text-lg text-teal-100/80 max-w-2xl mx-auto">
              Ingredientes Poderosos com uma Fórmula 100% Natural e Segura.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => {
            const Icon = ingredient.icon;
            return (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center p-6 bg-teal-950/40 rounded-3xl border border-teal-800/50 shadow-sm"
              >
                <div className="w-24 h-24 rounded-full bg-teal-800/50 flex items-center justify-center mb-6 shadow-sm border border-teal-500/20">
                  <Icon className="w-10 h-10 text-teal-300" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {ingredient.name}
                </h3>
                <p className="text-teal-100/70 leading-relaxed">
                  {ingredient.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
