import { Star } from 'lucide-react';

const feedbacks = [
  {
    name: 'Maria S.',
    text: 'O creme realmente mudou a saúde dos meus pés! Em poucos dias já senti a pele mais macia e sem rachaduras.',
    rating: 5,
  },
  {
    name: 'João P.',
    text: 'Produto excelente, absorve rápido e não deixa sensação oleosa. Recomendo para quem sofre com ressecamento.',
    rating: 5,
  },
  {
    name: 'Ana L.',
    text: 'Amei! O cheiro é suave e a hidratação dura o dia todo. Vale cada centavo.',
    rating: 5,
  },
];

export function FeedbackSection() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">O que nossos clientes dizem</h2>
        <p className="text-center text-muted-foreground mb-12">Veja relatos reais de quem já usou o Creme Podocare Ultra</p>
        <div className="grid md:grid-cols-3 gap-8">
          {feedbacks.map((fb, i) => (
            <div key={i} className="bg-card rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="flex gap-1 mb-2">
                {[...Array(fb.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-4">“{fb.text}”</p>
              <span className="font-semibold text-primary">{fb.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: 'O creme pode ser usado por diabéticos?',
    a: 'Sim! O Creme Podocare Ultra é dermatologicamente testado e seguro para todos os tipos de pele, inclusive diabéticos.'
  },
  {
    q: 'Com que frequência devo aplicar?',
    a: 'Recomenda-se aplicar 1 a 2 vezes ao dia, preferencialmente após o banho.'
  },
  {
    q: 'O produto é testado em animais?',
    a: 'Não. Nosso produto é cruelty-free e não é testado em animais.'
  },
  {
    q: 'Quanto tempo para ver resultados?',
    a: 'A maioria dos clientes percebe melhora significativa já nos primeiros dias de uso.'
  },
];

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-4">Perguntas Frequentes</h2>
        <p className="text-center text-muted-foreground mb-12">Tire suas dúvidas sobre o Creme Podocare Ultra</p>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
