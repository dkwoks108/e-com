"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory } from "@/lib/data";

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = getProductsByCategory(activeCategory);

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F5F0E8] to-[#EDE5D8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-2">
            Our Collection
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4">
            Premium Bio-Vegan Bags
          </h1>
          <p className="text-[#5C5C5C] max-w-xl mx-auto leading-relaxed">
            Handcrafted in India. Designed for the conscious luxury lifestyle.
            Each bag tells a story of sustainability, style, and purpose.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-[#FAFAF8] border-b border-[#E8E0D5] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors border ${
                  activeCategory === cat
                    ? "bg-[#2C2C2C] text-white border-[#2C2C2C]"
                    : "border-[#D4C8B4] text-[#5C5C5C] hover:border-[#7B9E87] hover:text-[#7B9E87]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-gray-500 mb-6">
          Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No products found in this category.
          </div>
        )}
      </div>

      {/* Policies Banner */}
      <div className="bg-[#F5F0E8] border-t border-[#E8E0D5] py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: "🚚",
                title: "Free Shipping",
                desc: "On orders above ₹2000",
              },
              { icon: "🔁", title: "Easy Returns", desc: "30-day return policy" },
              {
                icon: "🔐",
                title: "Secure Payment",
                desc: "SSL encrypted checkout",
              },
              {
                icon: "📞",
                title: "24/7 Support",
                desc: "We're here to help",
              },
            ].map((policy) => (
              <div key={policy.title} className="flex flex-col items-center">
                <span className="text-3xl mb-2">{policy.icon}</span>
                <p className="text-xs font-bold uppercase tracking-wider text-[#2C2C2C]">
                  {policy.title}
                </p>
                <p className="text-xs text-[#5C5C5C] mt-1">{policy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
