import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "E-mail",
      value: "contato@decreina.com.br",
      description: "Respondemos em até 24h"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "WhatsApp",
      value: "(11) 99999-9999",
      description: "Atendimento imediato"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Horário de Atendimento",
      value: "Seg a Sex, 9h às 18h",
      description: "Exceto feriados"
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border/50" id="contato">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Fale <span className="text-primary">Conosco</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tem alguma dúvida sobre os produtos Decreína? Nossa equipe está pronta para ajudar.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-3xl p-8 shadow-sm flex flex-col items-center text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {info.title}
              </h3>
              <p className="text-lg font-medium text-foreground mb-1">
                {info.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
