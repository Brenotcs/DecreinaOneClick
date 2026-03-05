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

export const product: Product = {
  id: "creme-decreina-01",
  name: "Creme Decreína",
  tagline: "Hidratação e renovação para seus pés",
  description: "O Creme Decreína foi desenvolvido especialmente para cuidados podológicos, promovendo hidratação intensa, renovação celular e alívio imediato do ressecamento. Fórmula enriquecida com ureia, óleo de melaleuca e pantenol para pés macios, saudáveis e protegidos.",
  price: 59.90,
  originalPrice: 89.90,
  images: [],
  features: [
    {
      icon: "droplets",
      title: "Hidratação Profunda",
      description: "Ureia 10% e pantenol restauram a barreira natural da pele, combatendo o ressecamento intenso."
    },
    {
      icon: "leaf",
      title: "Ação Antisséptica",
      description: "Óleo de melaleuca auxilia na prevenção de fungos e odores, mantendo os pés protegidos."
    },
    {
      icon: "sparkles",
      title: "Textura Não Oleosa",
      description: "Absorção rápida, sem deixar sensação pegajosa ou escorregadia."
    },
    {
      icon: "shield-check",
      title: "Dermatologicamente Testado",
      description: "Seguro para todos os tipos de pele, inclusive diabéticos."
    }
  ],
  specifications: [
    { label: "Conteúdo", value: "120g" },
    { label: "Principais ativos", value: "Ureia 10%, Óleo de Melaleuca, Pantenol" },
    { label: "Indicação", value: "Hidratação e renovação dos pés" },
    { label: "Textura", value: "Creme leve, rápida absorção" },
    { label: "Testes", value: "Dermatologicamente testado" },
    { label: "Origem", value: "Nacional" },
  ]
};

export const shippingOptions = [
  { id: "standard", name: "Frete Padrão", price: 14.90, days: "5-8 dias úteis" },
  { id: "express", name: "Frete Expresso", price: 29.90, days: "2-3 dias úteis" },
  { id: "free", name: "Frete Grátis", price: 0, days: "10-15 dias úteis", minOrder: 150 },
];
