export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  colors: string[];
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "aurelia-hand-bag",
    name: "GABAYA Aurelia Hand Bag",
    price: 2049,
    originalPrice: 2599,
    category: "Handbags",
    description:
      "The Aurelia Hand Bag blends timeless elegance with modern utility. Crafted from premium bio-vegan leather with clean stitching and premium hardware, it is designed for the conscious luxury lifestyle.",
    rating: 4.8,
    reviewCount: 124,
    badge: "Bestseller",
    colors: ["Noir Black", "Ivory Cream", "Sage Green"],
    features: [
      "Bio-vegan leather",
      "Premium metal hardware",
      "Multiple compartments",
      "Detachable strap",
    ],
    inStock: true,
  },
  {
    id: "lumera-mini-clutch",
    name: "GABAYA Luméra Mini Clutch",
    price: 2299,
    category: "Handbags",
    description:
      "The Luméra Mini Clutch is the perfect companion for evenings out. Its structured silhouette and minimalist design make it a versatile accessory for any occasion.",
    rating: 4.6,
    reviewCount: 87,
    badge: "New",
    colors: ["Champagne Gold", "Midnight Blue", "Rose Blush"],
    features: [
      "Bio-vegan leather",
      "Gold-toned hardware",
      "Card slots inside",
      "Wrist strap included",
    ],
    inStock: true,
  },
  {
    id: "elan-tote-bag",
    name: "GABAYA Élan Tote Bag",
    price: 2499,
    category: "Tote Bags",
    description:
      "The Élan Tote Bag is your everyday luxury essential. Spacious, structured, and sustainably made — it carries everything you need while keeping you effortlessly stylish.",
    rating: 4.9,
    reviewCount: 203,
    badge: "Top Rated",
    colors: ["Tan Caramel", "Slate Grey", "Forest Green"],
    features: [
      "Bio-vegan leather",
      "Reinforced handles",
      "Interior zip pocket",
      "Laptop compartment",
    ],
    inStock: true,
  },
  {
    id: "two-tone-structured-bag",
    name: "Two-Tone Structured Bag",
    price: 2399,
    category: "Shoulder Bags",
    description:
      "A bold statement piece with contrasting two-tone design. The structured silhouette exudes sophistication, making it perfect for the modern urban woman.",
    rating: 4.7,
    reviewCount: 156,
    colors: ["Black & Beige", "Brown & Tan", "Navy & White"],
    features: [
      "Bio-vegan leather",
      "Two-tone colorblock design",
      "Adjustable shoulder strap",
      "Magnetic closure",
    ],
    inStock: true,
  },
  {
    id: "linea-sling-bag",
    name: "GABAYA Linea Sling Bag",
    price: 1899,
    category: "Sling Bags",
    description:
      "The signature Linea Sling Bag. Minimalist design meets modern luxury. Lightweight, compact, and available in stunning multi-color options for every mood.",
    rating: 4.5,
    reviewCount: 178,
    badge: "Signature",
    colors: ["Jet Black", "Dusty Rose", "Olive Green", "Cobalt Blue"],
    features: [
      "Bio-vegan leather",
      "Adjustable crossbody strap",
      "Slim profile design",
      "Secure zip closure",
    ],
    inStock: true,
  },
  {
    id: "sofia-crossbody-bag",
    name: "GABAYA Sofia Crossbody",
    price: 2199,
    category: "Crossbody Bags",
    description:
      "The Sofia Crossbody effortlessly transitions from day to night. Its compact yet functional design features thoughtful organization for your everyday essentials.",
    rating: 4.7,
    reviewCount: 142,
    colors: ["Cognac Brown", "Black", "Burgundy"],
    features: [
      "Bio-vegan leather",
      "Crossbody & shoulder wear",
      "Multi-pocket design",
      "Premium zippers",
    ],
    inStock: true,
  },
];

export const categories = [
  "All",
  "Handbags",
  "Crossbody Bags",
  "Tote Bags",
  "Shoulder Bags",
  "Sling Bags",
];

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
