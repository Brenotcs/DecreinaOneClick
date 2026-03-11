import { motion } from 'framer-motion';
import { Tag, Target, Activity, ShieldCheck, CheckCircle2, Info, Droplets, Leaf, Shield, Clock, Sparkles, SprayCan, Eraser, PenLine, Wrench, AlertTriangle, ShoppingCart } from 'lucide-react';
import unguealInfoImg from '@/assets/unguealinfo.png';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const productsData = {
  ungueal: {
    id: "ungueal-decreina-01",
    name: "Solução Ungueal Decreína",
    subtitle: "Cuidado Completo e Intensivo para suas Unhas",
    description: "Fórmula complexa que atua diretamente na estrutura da unha para devolver sua saúde, resistência e beleza natural nas primeiras semanas de uso.",
    badges: ["100% Natural", "Rápida Absorção", "Eficácia Comprovada"],
    image: unguealInfoImg,
    details: [
      {
        title: "Categoria",
        description: "Dermocosmético de uso tópico – cuidado intensivo da lâmina ungueal.",
        icon: Tag,
      },
      {
        title: "Segurança e Qualidade",
        description: "Produto cosmético em conformidade com o Regulamento (CE) n.º 1223/2009.",
        note: "Nota: Não se trata de medicamento.",
        icon: ShieldCheck,
      },
      {
        title: "Indicação",
        description: "Produto indicado para o cuidado intensivo das unhas com alterações estéticas associadas à micose, incluindo:",
        list: ["Fragilidade", "Aspereza", "Descoloração", "Aspecto irregular da lâmina"],
        icon: Activity,
      },
      {
        title: "Indicação",
        description: "Produto indicado para o cuidado intensivo das unhas com alterações estéticas associadas à micose, incluindo:",
        list: ["Fragilidade", "Aspereza", "Descoloração", "Aspecto irregular da lâmina"],
        icon: Activity,
      },
      {
        title: "Objetivo Principal",
        description: "Auxiliar na manutenção da integridade da unha, na higienização da superfície ungueal e na melhoria progressiva da aparência.",
        icon: Target,
      }
    ],
    supportFeatures: [
      {
        title: "Higienização Cosmética",
        description: "Auxilia na limpeza profunda da superfície da unha, removendo impurezas.",
        icon: SprayCan,
      },
      {
        title: "Melhoria da Aparência",
        description: "Proporciona uma melhoria imediata no aspecto visual inicial da lâmina ungueal.",
        icon: PenLine,
      },
      {
        title: "Remoção de Resíduos",
        description: "Facilita a remoção suave de resíduos superficiais acumulados sobre a unha.",
        icon: Eraser,
      },
      {
        title: "Preparação Técnica",
        description: "Prepara a unha para receber procedimentos estéticos ou técnicos subsequentes.",
        icon: Wrench,
      }
    ],
    supportWarning: "O produto não substitui antissépticos ou produtos de assepsia clínica, mas atua como apoio complementar concentrado no local.",
    anatomyLabel: "Anatomia da Unha",
    anatomyParts: [
      { name: "Lâmina ungueal", description: "Estrutura queratinizada visível" },
      { name: "Leito ungueal", description: "Base vascularizada de suporte" },
      { name: "Matriz ungueal", description: "Região geradora de crescimento" },
      { name: "Cutícula/Eponíquio", description: "Proteção proximal" },
      { name: "Hiponíquio", description: "Selamento distal da unha" },
    ],
    anatomyNote: {
      title: "Características da Lâmina",
      description: "Composta por camadas de queratina que conferem resistência mecânica, mas exigem formulações específicas para permeação adequada de ativos."
    },
    price: 49.90
  },
  footTherapy: {
    id: "foot-therapy-decreina-02",
    name: "Decreína Foot Therapy",
    subtitle: "Renovação Profunda e Hidratação para os Pés",
    description: "Tratamento intensivo focado na recuperação da pele dos pés, combatendo ressecamento extremo, rachaduras e calosidades, proporcionando alívio imediato e duradouro.",
    badges: ["Hidratação 24h", "Toque Seco", "Renovação Celular"],
    image: "", // Placeholder ou imagem genérica pode ser inserida aqui posteriormente
    details: [
      {
        title: "Categoria",
        description: "Dermocosmético de alta performance para cuidados com a pele dos pés.",
        icon: Tag,
      },
      {
        title: "Segurança e Qualidade",
        description: "Dermatologicamente testado e seguro para uso diário contínuo.",
        note: "Ideal para uso em conjunto com a Solução Ungueal.",
        icon: ShieldCheck,
      },
      {
        title: "Indicação",
        description: "Tratamento diário e noturno para pés com necessidades de cuidado extremo:",
        list: ["Rachaduras severas no calcanhar", "Ressecamento", "Pele áspera e descamativa", "Cansaço e fadiga plantar"],
        icon: Activity,
      },
      {
        title: "Objetivo Principal",
        description: "Restaurar a barreira cutânea, nutrir profundamente as camadas da pele e promover a regeneração de áreas danificadas.",
        icon: Target,
      }
    ],
    anatomyLabel: "Estrutura da Pele do Pé",
    anatomyParts: [
      { name: "Estrato Córneo Espesso", description: "Camada externa mais grossa que precisa de emoliência." },
      { name: "Epiderme", description: "Barreira protetora onde a hidratação atua primariamente." },
      { name: "Derme", description: "Camada profunda que se regenera com ativos estimulantes." },
      { name: "Calcanhar (Zona de Impacto)", description: "Área de maior atrito, sujeita a hiperqueratose." },
    ],
    anatomyNote: {
      title: "Por que os Pés Ressecam?",
      description: "A pele dos pés possui menos glândulas sebáceas que o restante do corpo, tornando-se naturalmente mais propensa à desidratação e rachaduras causadas por peso e atrito."
    },
    supportFeatures: undefined,
    supportWarning: undefined,
    price: 38.90
  }
};

const badgeIcons = [Leaf, Clock, Shield];

export function ProductEducation() {
  const { addToCart } = useCart();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden" id="science">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -ml-64 -mb-64 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              100% Eficácia Comprovada
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Cuidado Completo para <br />
              <span className="text-primary italic">Seus Pés e Unhas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra a ciência por trás de nossos tratamentos e entenda por que milhares de profissionais e clientes confiam na Decreína.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="ungueal-decreina-01" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white dark:bg-zinc-900 border border-border shadow-md rounded-full p-1 h-auto">
              <TabsTrigger 
                value="ungueal-decreina-01" 
                className="rounded-full px-8 py-3 text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                Solução Ungueal
              </TabsTrigger>
              <TabsTrigger 
                value="foot-therapy-decreina-02" 
                className="rounded-full px-8 py-3 text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                Foot Therapy
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.values(productsData).map((product) => (
            <TabsContent key={product.id} value={product.id} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-12"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  
                  {/* Coluna 1: Imagem (Se não for Ungueal) e Informações Detalhadas (Indicação) */}
                  <div className="space-y-8 order-2 lg:order-1">
                    <div className="flex flex-col gap-6 lg:pt-4">
                      <h3 className="text-3xl font-display font-bold text-foreground leading-tight">{product.name}</h3>
                      <p className="text-xl text-primary font-medium tracking-wide">{product.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {product.description}
                      </p>
                    </div>
                    
                    <div className="grid gap-6">
                      {product.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-8 shadow-sm border border-border/50 hover:border-primary/40 hover:shadow-md transition-all flex flex-col h-full"
                        >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
                            <detail.icon className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-foreground text-lg">{detail.title}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {detail.description}
                        </p>
                        
                        {detail.list && (
                          <ul className="space-y-3 bg-secondary/30 p-4 rounded-xl">
                            {detail.list.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-foreground font-medium">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {detail.note && (
                          <p className="mt-4 text-xs font-medium text-muted-foreground/80 flex items-center gap-2 bg-primary/5 p-3 rounded-lg border border-primary/10">
                            <Info className="w-4 h-4 text-primary shrink-0" />
                            {detail.note}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Coluna 2: Anatomia (Alinhada com a Esquerda) */}
                <div className="space-y-8 order-1 lg:order-2 h-full">
                  <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-sm border border-border/50 relative group flex flex-col h-full lg:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-[2.5rem] pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {product.badges.map((badge, i) => {
                          const Icon = badgeIcons[i % badgeIcons.length];
                          return (
                            <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold shadow-sm">
                              <Icon className="w-3.5 h-3.5" />
                              {badge}
                            </span>
                          );
                        })}
                      </div>

                      {/* Imagem Padrão (só mostra se o id NÃO for 'ungueal' e tiver imagem real) */}
                      {product.id !== 'ungueal' && (
                        product.image ? (
                          <motion.div 
                            className="flex justify-center items-center mb-8"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <img 
                              src={product.image} 
                              alt={product.anatomyLabel}
                              className="w-full max-w-sm object-contain drop-shadow-2xl mix-blend-multiply dark:mix-blend-normal" 
                            />
                          </motion.div>
                        ) : (
                          <div className="w-full h-64 bg-secondary/50 rounded-2xl flex items-center justify-center mb-8 border-2 border-dashed border-border">
                            <p className="text-muted-foreground font-medium flex items-center gap-2">
                              <Activity className="w-5 h-5" />
                              Imagem Ilustrativa (Em Breve)
                            </p>
                          </div>
                        )
                      )}

                      <h4 className="font-bold text-xl text-foreground mb-6 flex items-center gap-2 mt-4 lg:mt-0">
                        <Activity className="w-5 h-5 text-primary" />
                        {product.anatomyLabel}
                      </h4>
                      <ul className="space-y-4 relative before:absolute before:inset-y-0 before:left-[15px] before:w-[2px] before:bg-primary/20 flex-1">
                        {product.anatomyParts.map((part, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start gap-4 relative z-10"
                          >
                            <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shrink-0 text-primary font-bold text-sm shadow-md">
                              {index + 1}
                            </div>
                            <div className="pt-1">
                              <strong className="text-foreground block mb-0.5">{part.name}</strong>
                              <span className="text-muted-foreground text-sm leading-tight inline-block">{part.description}</span>
                            </div>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="mt-8 bg-blue-50/80 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-5 flex gap-4 items-start shadow-sm h-auto lg:mt-auto">
                        <Info className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-blue-900 dark:text-blue-200 block mb-1.5 text-sm">{product.anatomyNote.title}</strong>
                          <p className="text-blue-800/80 dark:text-blue-300/80 text-sm leading-relaxed">
                            {product.anatomyNote.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                {/* Seção de Apoio Cosmético Base (Ocupa a largura total da página abaixo do grid principal) */}
                  {product.supportFeatures && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mt-12 bg-secondary/20 rounded-3xl p-8 border border-border"
                    >
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        Apoio Cosmético na <span className="text-primary">Preparação da Lâmina</span>
                      </h4>
                      <p className="text-muted-foreground mb-8">
                        O produto pode ser utilizado como apoio cosmético na preparação da lâmina ungueal, contribuindo para um ambiente mais cuidado.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-10">
                        {product.supportFeatures.map((feature, idx) => (
                          <div key={idx} className="flex gap-4 items-start bg-background/50 p-4 rounded-2xl h-full">
                            <div className="bg-primary/10 p-3.5 rounded-full text-primary shrink-0 shadow-sm">
                              <feature.icon className="w-6 h-6" />
                            </div>
                            <div className="pt-1">
                              <strong className="text-foreground text-lg block mb-2">{feature.title}</strong>
                              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {product.supportWarning && (
                        <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 rounded-2xl p-5 flex gap-4 items-start shadow-sm">
                          <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-amber-900 dark:text-amber-500 block mb-1 text-sm">Nota Importante</strong>
                            <p className="text-amber-800/80 dark:text-amber-400/80 text-sm leading-relaxed">
                              {product.supportWarning}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Botão de Compra Centralizado Ocupando a Base */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 flex justify-center w-full"
                  >
                    {(product.price !== undefined || product.id === 'ungueal-decreina-01') && (
                      <Button 
                        size="lg" 
                        className="btn-primary rounded-full px-12 py-8 text-xl sm:min-w-[400px] shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                        onClick={() => addToCart({ id: product.id, price: product.price || 49.90 })}
                      >
                        <ShoppingCart className="w-6 h-6 mr-3" />
                        Compre Agora
                      </Button>
                    )}
                  </motion.div>

              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
