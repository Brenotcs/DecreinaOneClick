import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Cláudia R.",
    text: "Ótimo produto, entrega rápida... Uso várias vezes ao dia para aceleração dos resultados! Minhas unhas nunca estiveram tão saudáveis.",
    rating: 5,
    date: "Há 2 dias"
  },
  {
    name: "Marcos Paulo",
    text: "Passei por muito sofrimento e dor por causa de uma infecção fúngica. Por 7 meses tentei de tudo e na verdade esse kit foi a única solução para o meu problema. Muito obrigado!",
    rating: 5,
    date: "Há 1 semana"
  },
  {
    name: "Luciana M.",
    text: "Mantendo meus pés protegidos onde quer que eu vá 😉 Super recomendo a Loção Spray, a sensação de frescor é imediata.",
    rating: 5,
    date: "Há 2 semanas"
  },
  {
    name: "Roberto S.",
    text: "É loucura que não dê pra achar algo tão eficaz nas farmácias normais. O Creme Decreína mudou a textura dos meus calcanhares em apenas 5 dias. Muito obrigado Decreína ❤ ❤",
    rating: 5,
    date: "Há 1 mês"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossa <span className="text-primary">Comunidade</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja o que nossos clientes estão dizendo sobre os resultados reais.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
