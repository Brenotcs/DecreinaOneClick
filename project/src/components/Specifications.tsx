import { motion } from 'framer-motion';
import { product } from '@/data/product';

export function Specifications() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            Especificações Técnicas
          </h2>

          <div className="card-elevated overflow-hidden">
            {product.specifications.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex justify-between items-center p-6 ${
                  index !== product.specifications.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <span className="text-muted-foreground font-medium">{spec.label}</span>
                <span className="font-semibold text-foreground">{spec.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
