import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog – Gabaya Legacy",
  description:
    "Explore sustainable fashion guides, vegan leather trends, styling tips, and luxury lifestyle content from Gabaya Legacy.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F5F0E8] to-[#EDE5D8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-2">
            Journal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4">
            Stories & Insights
          </h1>
          <p className="text-[#5C5C5C] max-w-xl mx-auto leading-relaxed">
            Sustainable fashion, styling guides, and the story behind conscious
            luxury living.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        <Link
          href={`/blog/${featured.id}`}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden border border-[#E8E0D5] hover:border-[#7B9E87] transition-colors mb-12"
        >
          <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-[#7B9E87]/20 to-[#7B9E87]/40 flex items-center justify-center min-h-[250px]">
            <span className="text-8xl">🌱</span>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-[#7B9E87] text-white px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                Featured
              </span>
              <span className="text-xs text-[#7B9E87] uppercase tracking-widest font-medium">
                {featured.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mb-4 group-hover:text-[#7B9E87] transition-colors">
              {featured.title}
            </h2>
            <p className="text-[#5C5C5C] leading-relaxed mb-6">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>{featured.date}</span>
              <span>·</span>
              <span>{featured.readTime}</span>
              <span>·</span>
              <span>{featured.author}</span>
            </div>
          </div>
        </Link>

        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8E0D5] hover:border-[#7B9E87] transition-colors"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#F5F0E8] to-[#E8E0D5] flex items-center justify-center">
                <span className="text-6xl">
                  {post.category === "Sustainable Fashion"
                    ? "♻️"
                    : post.category === "Style Guide"
                      ? "✨"
                      : "🔬"}
                </span>
              </div>
              <div className="p-5">
                <span className="text-xs text-[#7B9E87] uppercase tracking-widest font-medium">
                  {post.category}
                </span>
                <h3 className="text-sm font-bold text-[#2C2C2C] mt-2 mb-3 leading-snug group-hover:text-[#7B9E87] transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <section className="bg-[#7B9E87] py-16 text-white">
        <div className="max-w-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-3">Stay in the Loop</h2>
          <p className="text-white/80 mb-6 text-sm">
            Get the latest sustainable fashion guides, styling tips, and
            exclusive offers straight to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full text-sm text-[#2C2C2C] outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-[#2C2C2C] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-white hover:text-[#2C2C2C] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
