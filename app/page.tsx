import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, blogPosts } from "@/lib/data";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-[#F5F0E8] via-[#EDE5D8] to-[#DDD0BE] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, #7B9E87 0%, transparent 50%), radial-gradient(circle at 75% 75%, #C9A84C 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Decorative large bag outline */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
          <svg
            width="600"
            height="600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2C2C2C"
            strokeWidth="0.3"
          >
            <path d="M19 7h-1V6a4 4 0 00-8 0v1H9a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2zm-7-1a2 2 0 012 2v1h-4V6a2 2 0 012-2zm7 14H9V9h1v1a1 1 0 002 0V9h4v1a1 1 0 002 0V9h1v11z" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-4">
              Conscious Luxury
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[#2C2C2C] mb-6">
              Luxury Should Be{" "}
              <span className="text-[#7B9E87]">Kind to the Earth</span>
            </h1>
            <p className="text-lg text-[#5C5C5C] leading-relaxed mb-10 max-w-xl">
              Premium bio-vegan leather handbags, handcrafted in India. Designed
              for long-term use, timeless aesthetics, and everyday utility —
              without compromising the planet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 bg-[#2C2C2C] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#7B9E87] transition-colors"
              >
                Shop Collections
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-[#2C2C2C] text-[#2C2C2C] px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#2C2C2C] hover:text-white transition-colors"
              >
                Our Story
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-[#D4C8B4]">
              {[
                { icon: "🌱", text: "100% Vegan" },
                { icon: "🇮🇳", text: "Handcrafted in India" },
                { icon: "⭐", text: "4.8/5 Rating" },
                { icon: "🚚", text: "Free Shipping ₹2000+" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#5C5C5C]">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Bar */}
      <section className="bg-[#7B9E87] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-xs tracking-widest uppercase font-semibold">
            <span className="flex items-center gap-2">
              🚚 Free Shipping above ₹2000
            </span>
            <span className="flex items-center gap-2">🔁 30-Day Returns</span>
            <span className="flex items-center gap-2">
              🔐 Secure Checkout (SSL)
            </span>
            <span className="flex items-center gap-2">📞 24/7 Support</span>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-2">
              Featured
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-4">
              Our Bestselling Bags
            </h2>
            <p className="text-[#5C5C5C] max-w-xl mx-auto leading-relaxed">
              Each piece is carefully crafted with bio-vegan leather and premium
              hardware, designed to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 border border-[#2C2C2C] text-[#2C2C2C] px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#2C2C2C] hover:text-white transition-colors"
            >
              View All Collections
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values / USP Section */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-2">
              Why Gabaya Legacy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]">
              Crafted with Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Sustainable Luxury",
                desc: "Every bag is made from premium bio-vegan leather — a sustainable, cruelty-free alternative that looks and feels like real leather.",
              },
              {
                icon: "👐",
                title: "Handcrafted in India",
                desc: "Our artisans in Jaipur bring decades of craftsmanship to every stitch, ensuring each bag is a work of art.",
              },
              {
                icon: "⏳",
                title: "Designed to Last",
                desc: "Built for long-term use, not fast fashion. Clean stitching, premium hardware, and structured silhouettes that age beautifully.",
              },
              {
                icon: "💚",
                title: "100% Cruelty-Free",
                desc: "No animals harmed. Ever. Our materials are ethically sourced and eco-friendly from start to finish.",
              },
              {
                icon: "✨",
                title: "Premium at Mid-Range",
                desc: "Luxury aesthetics don't have to cost a fortune. We offer designer-quality bags starting at just ₹1,899.",
              },
              {
                icon: "🔄",
                title: "Low Environmental Impact",
                desc: "From eco-friendly materials to ethical manufacturing, we minimize our carbon footprint at every step.",
              },
            ].map((usp) => (
              <div
                key={usp.title}
                className="bg-white rounded-2xl p-8 border border-[#E8E0D5] hover:border-[#7B9E87] transition-colors"
              >
                <span className="text-4xl mb-4 block">{usp.icon}</span>
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-3">
                  {usp.title}
                </h3>
                <p className="text-sm text-[#5C5C5C] leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-2">
              Browse
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]">
              Shop by Category
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Handbags", emoji: "👜" },
              { name: "Crossbody Bags", emoji: "👝" },
              { name: "Tote Bags", emoji: "🛍️" },
              { name: "Shoulder Bags", emoji: "💼" },
              { name: "Sling Bags", emoji: "🎒" },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={`/collections?category=${encodeURIComponent(cat.name)}`}
                className="flex flex-col items-center justify-center gap-3 bg-[#F5F0E8] rounded-2xl p-6 hover:bg-[#7B9E87] hover:text-white transition-colors group border border-[#E8E0D5]"
              >
                <span className="text-4xl">{cat.emoji}</span>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#2C2C2C] group-hover:text-white text-center">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-[#2C2C2C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="w-5 h-5 text-[#C9A84C]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-400 text-sm">
                4.7 average from 690+ reviews
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya S.",
                city: "Mumbai",
                rating: 5,
                review:
                  "Absolutely love my Élan Tote Bag! The quality is premium and it's so spacious. Can't believe it's vegan leather — feels luxurious!",
                product: "GABAYA Élan Tote Bag",
              },
              {
                name: "Ananya R.",
                city: "Delhi",
                rating: 5,
                review:
                  "The Aurelia Hand Bag is stunning. Perfect for office and evenings out. Great craftsmanship and beautiful stitching. Highly recommend!",
                product: "GABAYA Aurelia Hand Bag",
              },
              {
                name: "Meera K.",
                city: "Bengaluru",
                rating: 4,
                review:
                  "Love the Linea Sling Bag — it's minimal, chic, and super functional. Fast delivery and beautiful packaging too!",
                product: "GABAYA Linea Sling Bag",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className={`w-4 h-4 ${
                        s <= review.rating
                          ? "text-[#C9A84C]"
                          : "text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  &ldquo;{review.review}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {review.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {review.city} · {review.product}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio-Vegan Leather Section */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-3">
                Our Material
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-6">
                What is Bio-Vegan Leather?
              </h2>
              <p className="text-[#5C5C5C] leading-relaxed mb-6">
                Bio-vegan leather is a sustainable alternative to animal leather
                that delivers the same premium look, feel, and durability —
                without the environmental or ethical cost. Made from eco-friendly
                materials with low environmental impact.
              </p>
              <ul className="space-y-3">
                {[
                  "Durable, soft texture — identical look and feel to real leather",
                  "Eco-friendly & low-impact production process",
                  "100% cruelty-free and animal-free",
                  "Long-lasting — resists wear, scratches, and weather",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#7B9E87] shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-[#5C5C5C]">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold tracking-wider uppercase text-[#7B9E87] hover:text-[#2C2C2C] transition-colors"
              >
                Learn More About Us
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Visual */}
            <div className="bg-gradient-to-br from-[#EDE5D8] to-[#DDD0BE] rounded-3xl p-12 flex items-center justify-center min-h-[350px]">
              <div className="text-center">
                <div className="text-8xl mb-6">🌿</div>
                <p className="text-[#5C5C5C] font-semibold text-lg mb-2">
                  Bio-Vegan Leather
                </p>
                <p className="text-[#8C7C6A] text-sm">
                  Sustainable · Durable · Premium
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-2">
                Journal
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]">
                From Our Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[#2C2C2C] hover:text-[#7B9E87] transition-colors"
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8E0D5] hover:border-[#7B9E87] transition-colors"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#F5F0E8] to-[#E8E0D5] flex items-center justify-center">
                  <span className="text-6xl">
                    {post.category === "Sustainable Fashion"
                      ? "🌱"
                      : post.category === "Style Guide"
                        ? "✨"
                        : "🔬"}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs text-[#7B9E87] uppercase tracking-widest font-medium">
                    {post.category}
                  </span>
                  <h3 className="text-sm font-bold text-[#2C2C2C] mt-2 mb-2 leading-snug group-hover:text-[#7B9E87] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#7B9E87] text-white">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Carry Conscious Luxury?
          </h2>
          <p className="text-white/80 mb-8 text-lg leading-relaxed">
            Join thousands of women who have made the switch to sustainable
            luxury. Shop our collection of premium bio-vegan leather bags.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/collections"
              className="bg-white text-[#2C2C2C] px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-[#F5F0E8] transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
