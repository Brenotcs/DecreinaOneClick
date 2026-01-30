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
  id: "speaker-premium-01",
  name: "SoundWave Pro",
  tagline: "Som que transforma ambientes",
  description: "Experimente a excelência sonora com o SoundWave Pro. Design elegante, áudio premium de 360° e bateria que dura o dia inteiro. A combinação perfeita de tecnologia e sofisticação para quem não aceita menos que o extraordinário.",
  price: 599.90,
  originalPrice: 899.90,
  images: [],
  features: [
    {
      icon: "volume-2",
      title: "Som 360° Imersivo",
      description: "Tecnologia de dispersão sonora que preenche todo o ambiente com qualidade cristalina."
    },
    {
      icon: "battery-full",
      title: "24h de Bateria",
      description: "Uma carga completa para acompanhar você o dia inteiro, sem interrupções."
    },
    {
      icon: "bluetooth",
      title: "Conexão Bluetooth 5.3",
      description: "Pareamento instantâneo e conexão estável até 15 metros de distância."
    },
    {
      icon: "droplets",
      title: "Resistente à Água",
      description: "Certificação IPX7 para uso em qualquer ambiente, sem preocupações."
    }
  ],
  specifications: [
    { label: "Potência", value: "40W RMS" },
    { label: "Resposta de Frequência", value: "20Hz - 20kHz" },
    { label: "Bluetooth", value: "5.3" },
    { label: "Bateria", value: "5000mAh" },
    { label: "Peso", value: "850g" },
    { label: "Dimensões", value: "18 x 8 x 8 cm" },
  ]
};

export const shippingOptions = [
  { id: "standard", name: "Frete Padrão", price: 19.90, days: "5-8 dias úteis" },
  { id: "express", name: "Frete Expresso", price: 39.90, days: "2-3 dias úteis" },
  { id: "free", name: "Frete Grátis", price: 0, days: "10-15 dias úteis", minOrder: 500 },
];
