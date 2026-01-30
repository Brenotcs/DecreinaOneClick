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
  id: "podocare-pro-01",
  name: "PodoCare Pro",
  tagline: "Pés perfeitos em minutos",
  description: "O removedor de calosidades elétrico mais avançado do mercado. Tecnologia profissional de spa em casa, com lixas intercambiáveis e motor silencioso. Resultados visíveis desde a primeira aplicação para pés macios e saudáveis.",
  price: 189.90,
  originalPrice: 299.90,
  images: [],
  features: [
    {
      icon: "sparkles",
      title: "Remoção Profissional",
      description: "Lixas de cristal de alta precisão que removem calosidades sem agredir a pele saudável."
    },
    {
      icon: "battery-full",
      title: "Bateria de Longa Duração",
      description: "Até 45 minutos de uso contínuo com apenas 2 horas de carregamento USB-C."
    },
    {
      icon: "volume-x",
      title: "Motor Silencioso",
      description: "Tecnologia de motor brushless ultra silencioso para uma experiência relaxante."
    },
    {
      icon: "droplets",
      title: "Fácil de Limpar",
      description: "Design à prova d'água IPX6 permite limpeza sob água corrente."
    }
  ],
  specifications: [
    { label: "Velocidades", value: "2 níveis" },
    { label: "Bateria", value: "Li-ion 800mAh" },
    { label: "Autonomia", value: "45 minutos" },
    { label: "Carregamento", value: "USB-C" },
    { label: "Peso", value: "180g" },
    { label: "Lixas Incluídas", value: "3 unidades" },
  ]
};

export const shippingOptions = [
  { id: "standard", name: "Frete Padrão", price: 14.90, days: "5-8 dias úteis" },
  { id: "express", name: "Frete Expresso", price: 29.90, days: "2-3 dias úteis" },
  { id: "free", name: "Frete Grátis", price: 0, days: "10-15 dias úteis", minOrder: 150 },
];
