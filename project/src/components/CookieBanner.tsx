import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="bg-card border-2 border-border rounded-xl shadow-2xl p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="text-sm text-foreground flex-1">
                <p className="font-bold mb-1 text-base">Os seus Cookies e Privacidade</p>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies e tecnologias semelhantes para garantir o funcionamento correto do nosso site, analisar o tráfego e melhorar a sua experiência. 
                  Ao clicar em "Aceitar Todos", concorda com o uso de todas as cookies não essenciais de acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD). 
                  Pode alterar a sua preferência ou saber mais na nossa <Link to="/privacidade" className="text-primary font-medium hover:underline">Política de Privacidade</Link>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <Button variant="outline" onClick={handleDecline} className="w-full sm:w-auto text-muted-foreground font-semibold">
                  Recusar Opcionais
                </Button>
                <Button variant="default" onClick={handleAccept} className="w-full sm:w-auto font-bold btn-primary">
                  Aceitar Todos
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
