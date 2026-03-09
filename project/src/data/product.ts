export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  benefits: string[];
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
    id: "ungueal-decreina-01",
    name: "Solução Ungueal Decreína",
    tagline: "Dermocosmético para Cuidado Intensivo das Unhas",
    description: "Produto indicado para o cuidado intensivo das unhas com alterações estéticas associadas à micose.",
    price: 59.90,
    originalPrice: 89.90,
    images: [produto1Image],
    benefits: [
      "Auxiliar na manutenção da integridade da unha",
      "Ajuda na higienização da superfície ungueal",
      "Dermatologicamente Testado"
    ],
    features: [],
    specifications: []
  },
  {
    id: "foot-therapy-decreina-02",
    name: "Foot Therapy",
    tagline: "Cuidado Avançado para Pés Secos e Ásperos",
    description: "Creme de alta concentração para o cuidado intensivo de pés secos e ásperos. Com Ureia 30% + Pro-Vitamina B5 + Ácido Hialurónico, atua como queratolítico e hidratante profundo.",
    price: 69.90,
    originalPrice: 99.90,
    images: [produto2Image],
    benefits: [
      "Fórmula Vegana e Sem Parabenos",
      "Ação Regeneradora e Calmante",
      "Dermatologicamente Testado"
    ],
    features: [],
    specifications: []
  }
];

export const shippingOptions = [
  { id: "standard", name: "Frete Padrão", price: 14.90, days: "5-8 dias úteis" },
  { id: "express", name: "Frete Expresso", price: 29.90, days: "2-3 dias úteis" },
  { id: "free", name: "Frete Grátis", price: 0, days: "10-15 dias úteis", minOrder: 150 },
];

