import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: 'Os produtos Decreína podem ser usados por diabéticos?',
    a: 'Sim! Toda a linha Decreína é dermatologicamente testada e segura para todos os tipos de pele, inclusive diabéticos, proporcionando um cuidado delicado e eficaz.'
  },
  {
    q: 'Com que frequência devo aplicar os produtos?',
    a: 'Recomenda-se aplicar o Creme e a Loção Spray de 1 a 2 vezes ao dia. O Spray é ideal para proteção rápida antes de calçar sapatos, e o Creme para uma hidratação noturna profunda.'
  },
  {
    q: 'Os produtos são testados em animais?',
    a: 'Não. Nossa fórmula é 100% livre de crueldade (cruelty-free) e composta por ingredientes naturais.'
  },
  {
    q: 'Quanto tempo demora para ver resultados na micose ou ressecamento?',
    a: 'A maioria dos nossos clientes percebe uma melhora significativa no conforto e na aparência da pele já nos primeiros 3 a 5 dias de uso contínuo.'
  },
  {
    q: 'Grávidas podem usar?',
    a: 'Nossa fórmula é natural, mas recomendamos que gestantes sempre consultem seu médico de confiança antes de iniciar o uso de qualquer dermocosmético.'
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-4xl font-bold text-center mb-4">Perguntas <span className="text-primary">Frequentes</span></h2>
        <p className="text-center text-muted-foreground mb-12">Tire suas dúvidas sobre o tratamento com a linha Decreína</p>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <AccordionItem value={`item-${i}`} className="bg-card border border-border/50 rounded-2xl shadow-sm px-6 overflow-hidden">
                <AccordionTrigger className="font-display font-semibold text-lg text-left hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}