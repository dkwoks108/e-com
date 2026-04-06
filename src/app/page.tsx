import Link from 'next/link';

const featuredCategories = [
  { emoji: '🏠', title: 'Home & Living', desc: 'Eco-friendly essentials for every room', href: '/products?category=home' },
  { emoji: '🧴', title: 'Personal Care', desc: 'Natural beauty and wellness products', href: '/products?category=personal-care' },
  { emoji: '👗', title: 'Sustainable Fashion', desc: 'Organic and recycled clothing', href: '/products?category=fashion' },
  { emoji: '🍃', title: 'Food & Kitchen', desc: 'Zero-waste kitchen solutions', href: '/products?category=kitchen' },
];

const featuredProducts = [
  { id: 1, name: 'Bamboo Cutting Board Set', price: 34.99, rating: 4.8, reviews: 214, emoji: '🎋' },
  { id: 2, name: 'Organic Cotton Tote Bag', price: 18.00, rating: 4.9, reviews: 389, emoji: '👜' },
  { id: 3, name: 'Beeswax Food Wraps (3-pack)', price: 22.50, rating: 4.7, reviews: 156, emoji: '🍯' },
  { id: 4, name: 'Reusable Stainless Water Bottle', price: 29.99, rating: 4.9, reviews: 521, emoji: '💧' },
  { id: 5, name: 'Natural Loofah Sponge Pack', price: 12.99, rating: 4.6, reviews: 97, emoji: '🌾' },
  { id: 6, name: 'Recycled Glass Storage Jars', price: 27.50, rating: 4.8, reviews: 183, emoji: '🫙' },
];

const testimonials = [
  { name: 'Sarah M.', location: 'Portland, OR', text: 'EcoShop changed the way I think about shopping. Every product is thoughtfully made and I feel good about every purchase.', rating: 5 },
  { name: 'James T.', location: 'Austin, TX', text: 'Incredible quality! My bamboo cutting board has held up better than any I have owned. Fast shipping and beautiful packaging too.', rating: 5 },
  { name: 'Priya K.', location: 'Seattle, WA', text: 'Love that I can buy everything from one place. The B2B service was seamless when we stocked our café with EcoShop products.', rating: 5 },
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

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-10 left-10 text-9xl">🌿</div>
          <div className="absolute bottom-10 right-10 text-9xl">🌍</div>
          <div className="absolute top-1/2 left-1/3 text-7xl">♻️</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <span className="inline-block bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium px-4 py-1 rounded-full mb-6">
            🌱 Certified Carbon Neutral Since 2021
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Sustainable Products for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              a Better World
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-indigo-200 max-w-2xl mx-auto mb-10">
            Every product in our store is thoughtfully sourced, ethically produced, and designed
            to reduce your environmental footprint — without compromising on quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="px-8 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition-colors shadow-lg">
              Shop Now
            </Link>
            <Link href="/our-story" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors">
              Our Story
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto text-center">
            <div><div className="text-2xl font-bold text-white">50K+</div><div className="text-xs text-indigo-300">Happy Customers</div></div>
            <div><div className="text-2xl font-bold text-white">200+</div><div className="text-xs text-indigo-300">Eco Products</div></div>
            <div><div className="text-2xl font-bold text-white">10K</div><div className="text-xs text-indigo-300">Trees Planted</div></div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Shop by Category</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Explore our curated collections of sustainable products for every part of your life.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((cat) => (
              <Link key={cat.title} href={cat.href} className="group bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all">
                <div className="text-5xl mb-4">{cat.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors">{cat.title}</h3>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Best Sellers</h2>
              <p className="text-gray-500">Our most loved eco-friendly products, chosen by thousands of happy customers.</p>
            </div>
            <Link href="/products" className="hidden sm:inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className="bg-gradient-to-br from-green-50 to-indigo-50 h-52 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform">
                  {product.emoji}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <StarRating rating={product.rating} />
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-700">${product.price.toFixed(2)}</span>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EcoShop */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose EcoShop?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We hold ourselves to the highest standards — so you can shop with confidence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🌱', title: '100% Eco-Certified', desc: 'Every product meets rigorous sustainability standards.' },
              { icon: '🚚', title: 'Free Shipping', desc: 'Complimentary carbon-offset shipping on orders over $50.' },
              { icon: '↩️', title: '30-Day Returns', desc: 'Hassle-free returns if you are not completely satisfied.' },
              { icon: '🤝', title: 'Ethical Sourcing', desc: 'Fair wages and safe conditions for every maker in our supply chain.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What Our Customers Say</h2>
            <p className="text-gray-500">Real reviews from real people making a difference.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <StarRating rating={t.rating} />
                <p className="mt-4 text-gray-700 leading-relaxed text-sm">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-indigo-700 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Join the Green Movement</h2>
          <p className="text-indigo-200 mb-8">Subscribe for exclusive offers, sustainability tips, and new product launches.</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" placeholder="Enter your email" className="flex-1 max-w-sm px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400" required />
            <button type="submit" className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition-colors">Subscribe</button>
          </form>
          <p className="text-xs text-indigo-300 mt-4">No spam, ever. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
