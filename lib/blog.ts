export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "why-vegan-leather-is-trending",
    title: "Why Vegan Leather Is Trending in 2025",
    excerpt:
      "From runways to street style, bio-vegan leather is redefining what luxury means in a world that demands sustainability. Here's why conscious consumers are making the switch.",
    content: "",
    author: "Gabaya Legacy Team",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Sustainable Fashion",
    tags: ["vegan leather", "sustainability", "trends", "luxury"],
  },
  {
    id: "how-to-choose-sustainable-handbags",
    title: "How to Choose Sustainable Handbags: A Complete Guide",
    excerpt:
      "Not all sustainable handbags are created equal. Learn what to look for — from material sourcing to ethical manufacturing — when choosing a bag that aligns with your values.",
    content: "",
    author: "Gabaya Legacy Team",
    date: "February 28, 2025",
    readTime: "7 min read",
    category: "Sustainable Fashion",
    tags: ["handbags", "guide", "sustainable", "vegan"],
  },
  {
    id: "styling-guide-vegan-bags",
    title: "5 Ways to Style Your Gabaya Bag for Every Occasion",
    excerpt:
      "From boardroom meetings to brunch dates, our bags are designed for versatility. Discover how to style your Gabaya Legacy bag across different looks and occasions.",
    content: "",
    author: "Gabaya Legacy Team",
    date: "February 10, 2025",
    readTime: "4 min read",
    category: "Style Guide",
    tags: ["styling", "fashion", "outfits", "accessories"],
  },
  {
    id: "bio-vegan-leather-explained",
    title: "Bio-Vegan Leather: What It Is and Why It Matters",
    excerpt:
      "We break down exactly what bio-vegan leather is, how it's made, and why it's a game-changer for the fashion industry — without compromising on quality or durability.",
    content: "",
    author: "Gabaya Legacy Team",
    date: "January 22, 2025",
    readTime: "6 min read",
    category: "Materials",
    tags: ["bio-vegan leather", "materials", "eco-friendly", "technology"],
  },
];
