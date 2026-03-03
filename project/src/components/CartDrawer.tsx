import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { product, shippingOptions } from '@/data/product';
import { useState } from 'react';

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    selectedShipping,
    setSelectedShipping,
    getSubtotal,
    getShippingCost,
    getTotal,
  } = useCart();

  const [step, setStep] = useState<'cart' | 'checkout'>('cart');

  const cartItem = items.find(item => item.productId === product.id);
  const quantity = cartItem?.quantity || 0;
  const subtotal = getSubtotal();

  const handleCheckout = () => {
    setStep('checkout');
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setTimeout(() => setStep('cart'), 300);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="font-display text-xl font-semibold">
                  {step === 'cart' ? 'Seu Carrinho' : 'Finalizar Compra'}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="text-lg text-muted-foreground">Seu carrinho está vazio</p>
                </div>
              ) : step === 'cart' ? (
                <div className="space-y-6">
                  {/* Product */}
                  <div className="flex gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center">
                      <span className="text-3xl">🦶</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{product.tagline}</p>
                      <p className="font-bold text-primary">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <div className="flex items-center gap-2 bg-background rounded-full p-1">
                        <button
                          onClick={() => updateQuantity(quantity - 1)}
                          className="p-1 hover:bg-muted rounded-full transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(quantity + 1)}
                          className="p-1 hover:bg-muted rounded-full transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Shipping */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Opções de Frete</h3>
                    </div>
                    
                    <RadioGroup value={selectedShipping} onValueChange={setSelectedShipping}>
                      {shippingOptions.map((option) => {
                        const isFreeEligible = option.minOrder && subtotal >= option.minOrder;
                        const showOption = !option.minOrder || isFreeEligible;
                        
                        if (!showOption && option.id === 'free') return null;
                        
                        return (
                          <div
                            key={option.id}
                            className={`flex items-center justify-between p-4 rounded-xl border-2 transition-colors cursor-pointer ${
                              selectedShipping === option.id
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                            onClick={() => setSelectedShipping(option.id)}
                          >
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value={option.id} id={option.id} />
                              <Label htmlFor={option.id} className="cursor-pointer">
                                <p className="font-medium">{option.name}</p>
                                <p className="text-sm text-muted-foreground">{option.days}</p>
                              </Label>
                            </div>
                            <span className={`font-semibold ${option.price === 0 ? 'text-green-600' : ''}`}>
                              {option.price === 0 ? 'Grátis' : `R$ ${option.price.toFixed(2).replace('.', ',')}`}
                            </span>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </div>
                </div>
              ) : (
                <CheckoutForm onBack={() => setStep('cart')} />
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Frete</span>
                    <span className={getShippingCost() === 0 ? 'text-green-600' : ''}>
                      {getShippingCost() === 0 ? 'Grátis' : `R$ ${getShippingCost().toFixed(2).replace('.', ',')}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">R$ {getTotal().toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>

                {step === 'cart' && (
                  <Button
                    onClick={handleCheckout}
                    className="w-full btn-primary py-6 text-lg font-semibold rounded-full"
                  >
                    Continuar para Checkout
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CheckoutForm({ onBack }: { onBack: () => void }) {
  const { getTotal } = useCart();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-12">
      <button
        type="button"
        onClick={onBack}
        className="text-sm text-primary hover:underline mb-4"
      >
        ← Voltar ao carrinho
      </button>
      <h3 className="font-semibold text-foreground mb-6">Finalizar Compra</h3>
      <a
        href="https://sualoja.myshopify.com/cart/ID_DO_PRODUTO:1"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <Button className="w-full btn-primary py-6 text-lg font-semibold rounded-full">
          Finalizar Compra • R$ {getTotal().toFixed(2).replace('.', ',')}
        </Button>
      </a>
      <p className="text-muted-foreground mt-4 text-sm">
        Você será redirecionado para o checkout do Shopify.
      </p>
    </div>
  );
}
