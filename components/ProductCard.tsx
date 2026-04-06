import Link from "next/link";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#E8E0D5]">
      {/* Product Image Placeholder */}
      <div className="relative aspect-square bg-gradient-to-br from-[#F5F0E8] to-[#E8E0D5] overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 text-xs font-semibold tracking-wider uppercase bg-[#7B9E87] text-white px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 z-10 text-xs font-semibold tracking-wider uppercase bg-[#C9A84C] text-white px-3 py-1 rounded-full">
            Sale
          </span>
        )}
        {/* Decorative bag icon as placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-24 h-24 text-[#C4B49A] group-hover:scale-105 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 7h-1V6a4 4 0 00-8 0v1H9a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2zm-7-1a2 2 0 012 2v1h-4V6a2 2 0 012-2zm7 14H9V9h1v1a1 1 0 002 0V9h4v1a1 1 0 002 0V9h1v11z" />
          </svg>
        </div>
        {/* Color dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {product.colors.slice(0, 4).map((color, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full border border-white/60 bg-[#7B9E87]"
              style={{
                opacity: 0.4 + i * 0.2,
              }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-[#7B9E87] uppercase tracking-widest font-medium mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-[#2C2C2C] leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-3.5 h-3.5 ${
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
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-[#2C2C2C]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/collections/${product.id}`}
          className="block w-full text-center text-sm font-medium tracking-wider uppercase py-2.5 rounded-full border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
