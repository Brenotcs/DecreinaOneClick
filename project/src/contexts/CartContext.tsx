import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, products, shippingOptions } from '@/data/product';

interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  selectedShipping: string;
  customerInfo: CustomerInfo;
  addToCart: (product: { id: string, price: number }) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setIsCartOpen: (open: boolean) => void;
  setSelectedShipping: (shippingId: string) => void;
  setCustomerInfo: (info: CustomerInfo) => void;
  getSubtotal: () => number;
  getShippingCost: () => number;
  getTotal: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState("standard");
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const addToCart = (productObj: { id: string, price: number }) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.productId === productObj.id);
      if (existingItem) {
        return prev.map(item =>
          item.productId === productObj.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { productId: productObj.id, quantity: 1, price: productObj.price }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getShippingCost = () => {
    const subtotal = getSubtotal();
    const shipping = shippingOptions.find(s => s.id === selectedShipping);
    if (!shipping) return 0;
    if (shipping.minOrder && subtotal >= shipping.minOrder) return 0;
    return shipping.price;
  };

  const getTotal = () => {
    return getSubtotal() + getShippingCost();
  };

  const clearCart = () => {
    setItems([]);
    setCustomerInfo({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        selectedShipping,
        customerInfo,
        addToCart,
        removeFromCart,
        updateQuantity,
        setIsCartOpen,
        setSelectedShipping,
        setCustomerInfo,
        getSubtotal,
        getShippingCost,
        getTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

