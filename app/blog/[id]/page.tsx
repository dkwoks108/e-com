import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) return {};
  return {
    title: `${post.title} – Gabaya Legacy Blog`,
    description: post.excerpt,
  };
}

const articleContent: Record<string, string[]> = {
  "why-vegan-leather-is-trending": [
    "The fashion industry is undergoing a seismic shift. As consumers become increasingly aware of the environmental and ethical implications of their choices, vegan leather has emerged as one of the most exciting innovations in sustainable fashion.",
    "Bio-vegan leather — made from sustainable, plant-based or synthetic materials — now rivals traditional animal leather in durability, softness, and luxury feel. Major fashion houses and independent brands alike are embracing this material as the future of premium accessories.",
    "But why now? Several factors converge to make 2025 the tipping point for vegan leather: greater consumer awareness, improved material technology, and a growing rejection of fast fashion in favor of considered, long-lasting purchases.",
    "At Gabaya Legacy, we have been at the forefront of this movement since our founding. Our bio-vegan leather bags are proof that you don't have to compromise on quality to make an ethical choice.",
    "Whether you're a long-time advocate for sustainable fashion or just beginning your conscious luxury journey, vegan leather deserves a place in your wardrobe — and in the future of fashion.",
  ],
  "how-to-choose-sustainable-handbags": [
    "Choosing a sustainable handbag is more than just picking one that says 'eco-friendly' on the label. True sustainability encompasses the full lifecycle of a product — from material sourcing to manufacturing to how long it lasts.",
    "Here are the key factors to consider when choosing your next sustainable handbag:",
    "Material: Look for bio-vegan leather, organic cotton, or recycled materials. Bio-vegan leather, like we use at Gabaya Legacy, offers the premium look and feel of real leather without the ethical or environmental costs.",
    "Manufacturing: Where and how the bag is made matters. Handcrafted production by skilled artisans ensures quality, reduces waste, and supports local economies.",
    "Longevity: The most sustainable bag is one that lasts. Look for quality construction, premium hardware, and timeless design that won't go out of style.",
    "Brand Values: Research the brand's commitments to sustainability, ethical labor practices, and transparency. A truly sustainable brand will be open about their processes.",
    "At Gabaya Legacy, we check every one of these boxes. Our bags are made from bio-vegan leather, handcrafted by skilled artisans in Jaipur, designed to last decades, and backed by a brand with deep commitments to ethical fashion.",
  ],
  "styling-guide-vegan-bags": [
    "One of the greatest things about a well-designed bag is its versatility. A Gabaya Legacy bag isn't just an accessory — it's the finishing touch that elevates any outfit.",
    "Here are five ways to style your Gabaya bag for different occasions:",
    "1. The Office Look: Pair the Élan Tote Bag in Tan Caramel with tailored trousers and a crisp white blouse. The structured silhouette adds professionalism while the warm color adds warmth.",
    "2. Weekend Brunch: The Linea Sling Bag in Dusty Rose complements a floral midi dress or casual jeans-and-tee combo. Lightweight and hands-free — perfect for a relaxed morning.",
    "3. Evening Out: The Luméra Mini Clutch in Champagne Gold pairs beautifully with a little black dress. The compact size keeps you minimal and chic.",
    "4. Travel Ready: The Sofia Crossbody in Cognac Brown is your ideal travel companion — secure, hands-free, and stylish enough for airports, museums, and everything in between.",
    "5. Casual Street Style: The Two-Tone Structured Bag makes a bold statement with any monochrome outfit. Let the bag do the talking.",
  ],
  "bio-vegan-leather-explained": [
    "You've heard the term 'bio-vegan leather', but what exactly is it? And why are sustainable fashion brands around the world embracing it as the future of luxury accessories?",
    "Bio-vegan leather is a premium material created without the use of animal products. Unlike traditional animal leather, which requires intensive farming and chemical processing, bio-vegan leather is produced using eco-friendly materials and processes that have a significantly lower environmental impact.",
    "The result is a material that is remarkably similar to animal leather in look, feel, texture, and durability — but without the ethical or environmental cost.",
    "Key characteristics of bio-vegan leather include: exceptional softness that improves with use, high resistance to scratches, water, and general wear, a wide range of textures and finishes that mimic traditional leather, and significantly lower carbon footprint compared to animal leather.",
    "At Gabaya Legacy, we source our bio-vegan leather from certified suppliers who adhere to strict environmental standards. The material undergoes rigorous quality testing before it reaches our artisans' hands in Jaipur.",
    "The result? A bag that looks and feels like a luxury product, carries none of the ethical concerns of animal leather, and lasts for years with proper care. That's the promise of bio-vegan leather — and the promise of Gabaya Legacy.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) notFound();

  const content = articleContent[id] || [post.excerpt];
  const relatedPosts = blogPosts.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F5F0E8] to-[#EDE5D8] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#7B9E87] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-[#7B9E87] transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#2C2C2C] font-medium line-clamp-1">
              {post.title}
            </span>
          </nav>
          <span className="text-xs text-[#7B9E87] uppercase tracking-widest font-semibold">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mt-3 mb-5 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image Placeholder */}
        <div className="aspect-[16/7] bg-gradient-to-br from-[#7B9E87]/20 to-[#7B9E87]/40 rounded-2xl flex items-center justify-center mb-10">
          <span className="text-8xl">
            {post.category === "Sustainable Fashion"
              ? "🌱"
              : post.category === "Style Guide"
                ? "✨"
                : "🔬"}
          </span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {content.map((paragraph, index) => (
            <p
              key={index}
              className="text-[#4A4A4A] leading-8 mb-5 text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-10 pt-8 border-t border-[#E8E0D5] flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-[#F5F0E8] text-[#7B9E87] text-xs rounded-full font-medium uppercase tracking-wider"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#F5F0E8] rounded-2xl p-8 text-center">
          <p className="text-[#7B9E87] text-sm uppercase tracking-widest font-semibold mb-2">
            Explore Our Collection
          </p>
          <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">
            Ready to Make the Switch to Conscious Luxury?
          </h3>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 bg-[#2C2C2C] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#7B9E87] transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#F5F0E8] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-8">
              More from Our Journal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E8E0D5] hover:border-[#7B9E87] transition-colors"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#F5F0E8] to-[#E8E0D5] flex items-center justify-center">
                    <span className="text-5xl">
                      {rp.category === "Sustainable Fashion"
                        ? "♻️"
                        : rp.category === "Style Guide"
                          ? "✨"
                          : "🔬"}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-[#7B9E87] uppercase tracking-widest font-medium">
                      {rp.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#2C2C2C] mt-2 mb-2 leading-snug group-hover:text-[#7B9E87] transition-colors">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {rp.date} · {rp.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
