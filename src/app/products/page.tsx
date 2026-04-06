import Link from 'next/link';

const categories = ['All', 'Home & Living', 'Personal Care', 'Sustainable Fashion', 'Food & Kitchen', 'Garden & Outdoor'];

const products = [
  { id: 1, name: 'Bamboo Cutting Board Set', price: 34.99, category: 'Home & Living', rating: 4.8, reviews: 214, emoji: '🎋' },
  { id: 2, name: 'Organic Cotton Tote Bag', price: 18.00, category: 'Sustainable Fashion', rating: 4.9, reviews: 389, emoji: '👜' },
  { id: 3, name: 'Beeswax Food Wraps (3-pack)', price: 22.50, category: 'Food & Kitchen', rating: 4.7, reviews: 156, emoji: '🍯' },
  { id: 4, name: 'Reusable Stainless Water Bottle', price: 29.99, category: 'Home & Living', rating: 4.9, reviews: 521, emoji: '💧' },
  { id: 5, name: 'Natural Loofah Sponge Pack', price: 12.99, category: 'Personal Care', rating: 4.6, reviews: 97, emoji: '🌾' },
  { id: 6, name: 'Recycled Glass Storage Jars', price: 27.50, category: 'Food & Kitchen', rating: 4.8, reviews: 183, emoji: '🫙' },
  { id: 7, name: 'Organic Shea Body Butter', price: 19.99, category: 'Personal Care', rating: 4.7, reviews: 241, emoji: '🧴' },
  { id: 8, name: 'Hemp Linen Bed Sheet Set', price: 89.00, category: 'Home & Living', rating: 4.8, reviews: 128, emoji: '🛏️' },
  { id: 9, name: 'Solar Garden Lights (4-pack)', price: 44.99, category: 'Garden & Outdoor', rating: 4.6, reviews: 76, emoji: '☀️' },
  { id: 10, name: 'Recycled Wool Throw Blanket', price: 59.00, category: 'Home & Living', rating: 4.9, reviews: 163, emoji: '🧶' },
  { id: 11, name: 'Compostable Phone Case', price: 24.99, category: 'Home & Living', rating: 4.5, reviews: 89, emoji: '📱' },
  { id: 12, name: 'Bamboo Toothbrush 4-Pack', price: 14.99, category: 'Personal Care', rating: 4.8, reviews: 435, emoji: '🪥' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-4 h-4 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          <p className="text-gray-500 mt-1">Discover {products.length} sustainably made products</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-8 sticky top-20">
              {/* Categories */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Categories</h3>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${cat === 'All' ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Price Range</h3>
                <div className="space-y-2">
                  {['Under $20', '$20 – $40', '$40 – $60', '$60 – $100', 'Over $100'].map((range) => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-gray-600">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Sort By</h3>
                <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                  <option>Most Reviews</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">Showing {products.length} products</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">View:</span>
                <button className="p-1.5 rounded bg-indigo-50 text-indigo-600" aria-label="Grid view">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <div className="bg-gradient-to-br from-green-50 to-indigo-50 h-48 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                    {product.emoji}
                  </div>
                  <div className="p-4">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full mb-2">
                      {product.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm leading-snug">{product.name}</h3>
                    <div className="flex items-center gap-1.5 mb-3">
                      <StarRating rating={product.rating} />
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-indigo-700">${product.price.toFixed(2)}</span>
                      <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button className="px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">← Prev</button>
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`w-9 h-9 text-sm rounded-lg transition-colors ${page === 1 ? 'bg-indigo-600 text-white' : 'text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Next →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
