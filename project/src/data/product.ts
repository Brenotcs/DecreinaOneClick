export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

import produto1Image from '@/assets/produto1.jpg';
import produto2Image from '@/assets/produto2.jpg';

export const products: Product[] = [
  {
    id: "creme-decreina-01",
    name: "Creme Decreína",
    tagline: "Hidratação e renovação para seus pés",
    description: "O Creme Decreína foi desenvolvido para promover hidratação intensa, renovação celular e alívio imediato do ressecamento. Enriquecido com ureia e óleo de melaleuca.",
    price: 59.90,
    originalPrice: 89.90,
    images: [produto1Image],
    features: [],
    specifications: []
  },
  {
    id: "locao-decreina-02",
    name: "Loção Spray Decreína",
    tagline: "Proteção e frescor diário",
    description: "A Loção Spray Decreína combate fungos, alivia a coceira e interrompe o suor excessivo rapidamente. Fórmula leve de rápida absorção com ativos naturais.",
    price: 69.90,
    originalPrice: 99.90,
    images: [produto2Image],
    features: [],
    specifications: []
  }
];

export const shippingOptions = [
  { id: "standard", name: "Frete Padrão", price: 14.90, days: "5-8 dias úteis" },
  { id: "express", name: "Frete Expresso", price: 29.90, days: "2-3 dias úteis" },
  { id: "free", name: "Frete Grátis", price: 0, days: "10-15 dias úteis", minOrder: 150 },
];

