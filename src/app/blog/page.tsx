import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: '10 Simple Swaps to Reduce Your Plastic Waste at Home',
    excerpt: 'From kitchen staples to bathroom essentials, these small changes add up to big environmental impact. Discover the easiest sustainable swaps you can make starting today.',
    author: 'Maya Chen',
    date: 'December 12, 2023',
    category: 'Sustainable Living',
    readTime: '6 min read',
    emoji: '♻️',
    featured: true,
  },
  {
    id: 2,
    title: 'The Truth About Greenwashing: How to Spot It and Avoid It',
    excerpt: 'Not all "eco-friendly" claims are created equal. We break down the most common greenwashing tactics and share what certifications actually mean something.',
    author: 'Sofia Ramirez',
    date: 'November 28, 2023',
    category: 'Consumer Education',
    readTime: '8 min read',
    emoji: '🔍',
    featured: false,
  },
  {
    id: 3,
    title: 'Inside Our Supply Chain: From Maker to Your Doorstep',
    excerpt: 'Transparency is one of our core values. Follow a bamboo cutting board from raw material in Vietnam to your Portland kitchen — every step documented.',
    author: 'Liam Okafor',
    date: 'November 14, 2023',
    category: 'Behind the Scenes',
    readTime: '10 min read',
    emoji: '🎋',
    featured: false,
  },
  {
    id: 4,
    title: 'Zero-Waste Holiday Gift Guide 2023',
    excerpt: 'Give gifts that matter this season. Our curated guide features sustainable options for every budget — from stocking stuffers to statement pieces.',
    author: 'James Park',
    date: 'October 30, 2023',
    category: 'Gift Guides',
    readTime: '5 min read',
    emoji: '🎁',
    featured: false,
  },
  {
    id: 5,
    title: 'How We Planted 10,000 Trees (And What We Learned)',
    excerpt: 'Reaching our 10,000-tree milestone was a moment of celebration, but also deep reflection on what reforestation really means for local communities.',
    author: 'Maya Chen',
    date: 'October 15, 2023',
    category: 'Impact Stories',
    readTime: '7 min read',
    emoji: '🌳',
    featured: false,
  },
  {
    id: 6,
    title: 'The Science of Beeswax Wraps: Do They Really Work?',
    excerpt: 'We put our best-selling beeswax wraps through rigorous testing. How do they compare to plastic wrap for freshness, durability, and ease of use?',
    author: 'Liam Okafor',
    date: 'September 22, 2023',
    category: 'Product Deep-Dives',
    readTime: '4 min read',
    emoji: '🍯',
    featured: false,
  },
];

const categories = [
  { name: 'All Posts', count: 24 },
  { name: 'Sustainable Living', count: 8 },
  { name: 'Consumer Education', count: 5 },
  { name: 'Behind the Scenes', count: 4 },
  { name: 'Gift Guides', count: 3 },
  { name: 'Impact Stories', count: 6 },
  { name: 'Product Deep-Dives', count: 7 },
];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-3">The EcoShop Journal</h1>
          <p className="text-indigo-200 text-lg max-w-xl mx-auto">
            Sustainability insights, product deep-dives, impact stories, and practical guides for living more consciously.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Post */}
            <div className="mb-10">
              <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-4">Featured Post</h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-green-100 to-indigo-100 h-64 flex items-center justify-center text-8xl">
                  {featured.emoji}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">{featured.category}</span>
                    <span className="text-xs text-gray-400">{featured.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{featured.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                        {featured.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{featured.author}</p>
                        <p className="text-xs text-gray-400">{featured.date}</p>
                      </div>
                    </div>
                    <Link href={`/blog/${featured.id}`} className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Grid */}
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="bg-gradient-to-br from-green-50 to-indigo-50 h-36 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                    {post.emoji}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{post.category}</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 leading-snug text-sm">{post.title}</h3>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-700">{post.author}</p>
                          <p className="text-xs text-gray-400">{post.date}</p>
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`} className="text-indigo-600 hover:text-indigo-800 text-xs font-medium transition-colors">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-20">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Categories</h3>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <button className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${cat.name === 'All Posts' ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                      <span>{cat.name}</span>
                      <span className="text-xs text-gray-400">{cat.count}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Newsletter</h3>
                <p className="text-xs text-gray-500 mb-3">Get new articles delivered to your inbox weekly.</p>
                <input type="email" placeholder="your@email.com" className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition-colors">Subscribe</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
