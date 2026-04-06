import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById, products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: `${product.name} – Gabaya Legacy`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);
  const fallback = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4 - related.length);
  const relatedProducts = [...related, ...fallback].slice(0, 4);

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-[#7B9E87] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/collections"
            className="hover:text-[#7B9E87] transition-colors"
          >
            Collections
          </Link>
          <span>/</span>
          <span className="text-[#2C2C2C] font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-gradient-to-br from-[#F5F0E8] to-[#DDD0BE] rounded-3xl flex items-center justify-center overflow-hidden">
            {product.badge && (
              <span className="absolute top-4 left-4 text-xs font-semibold tracking-wider uppercase bg-[#7B9E87] text-white px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
            <svg
              className="w-40 h-40 text-[#C4B49A]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 7h-1V6a4 4 0 00-8 0v1H9a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2zm-7-1a2 2 0 012 2v1h-4V6a2 2 0 012-2zm7 14H9V9h1v1a1 1 0 002 0V9h4v1a1 1 0 002 0V9h1v11z" />
            </svg>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <p className="text-xs text-[#7B9E87] uppercase tracking-widest font-semibold mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold text-[#2C2C2C] mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.floor(product.rating)
                        ? "text-[#C9A84C]"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-[#2C2C2C]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-green-600 font-semibold">
                    Save ₹
                    {(
                      product.originalPrice - product.price
                    ).toLocaleString("en-IN")}
                  </span>
                </>
              )}
            </div>

            <p className="text-[#5C5C5C] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C] mb-3">
                Available Colors
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="px-3 py-1.5 rounded-full border border-[#D4C8B4] text-xs text-[#5C5C5C] hover:border-[#7B9E87] cursor-pointer transition-colors"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C] mb-3">
                Features
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#5C5C5C]">
                    <svg
                      className="w-4 h-4 text-[#7B9E87] shrink-0"
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
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <button className="flex-1 bg-[#2C2C2C] text-white py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#7B9E87] transition-colors">
                Add to Cart
              </button>
              <button className="w-14 h-14 rounded-full border border-[#D4C8B4] flex items-center justify-center text-[#5C5C5C] hover:border-red-400 hover:text-red-400 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Policies */}
            <div className="mt-6 pt-6 border-t border-[#E8E0D5] grid grid-cols-2 gap-3">
              {[
                { icon: "🚚", text: "Free shipping above ₹2000" },
                { icon: "🔁", text: "30-day easy returns" },
                { icon: "🔐", text: "Secure SSL checkout" },
                { icon: "🌱", text: "100% bio-vegan leather" },
              ].map((p) => (
                <div key={p.text} className="flex items-center gap-2 text-xs text-[#5C5C5C]">
                  <span>{p.icon}</span>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-[#F5F0E8] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
