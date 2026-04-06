import Link from 'next/link';

const teamMembers = [
  { name: 'Maya Chen', role: 'Co-Founder & CEO', emoji: '👩‍💼', bio: 'Former environmental scientist with 12 years in sustainable materials research. Maya founded EcoShop after seeing firsthand how consumer choices impact ecosystems.' },
  { name: 'Liam Okafor', role: 'Co-Founder & Head of Product', emoji: '👨‍🔬', bio: 'Industrial designer passionate about circular economy principles. Liam curates every product in our catalog and works directly with artisan makers worldwide.' },
  { name: 'Sofia Ramirez', role: 'Chief Sustainability Officer', emoji: '🌿', bio: 'Certified B Corp advisor with a background in supply chain ethics. Sofia oversees our carbon neutrality program and supplier code of conduct.' },
  { name: 'James Park', role: 'Head of Community', emoji: '🤝', bio: 'Community builder and former NGO director. James manages our ambassador network and leads EcoShop\'s tree-planting and ocean-cleanup partnerships.' },
];

const milestones = [
  { year: '2018', event: 'EcoShop founded in a Portland garage with just 12 products and a dream.' },
  { year: '2019', event: 'Launched our B2B wholesale program, reaching 50 independent retailers.' },
  { year: '2020', event: 'Achieved 10,000 customers and planted our first 1,000 trees in partnership with One Tree Planted.' },
  { year: '2021', event: 'Became a certified carbon-neutral business. Expanded to international shipping in 15 countries.' },
  { year: '2022', event: 'Launched Private Label program. Surpassed 25,000 active customers.' },
  { year: '2023', event: 'Reached 50,000 customers, planted 10,000 trees, and launched our Sustainability Report.' },
  { year: '2024', event: 'Expanding to 200+ products, launching mobile app, and targeting zero-waste packaging across all orders.' },
];

export default function OurStoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-indigo-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-500/20 border border-green-400/30 text-green-300 text-sm px-4 py-1 rounded-full mb-6">
            Founded 2018 · Portland, Oregon
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            We Started with a Simple Belief:<br />
            <span className="text-green-400">Shopping Should Leave the World Better</span>
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            EcoShop was born from frustration and hope — frustration at the sea of greenwashing, and hope that people genuinely want to make better choices if you give them beautiful, affordable alternatives.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">How It All Began</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In the summer of 2018, Maya Chen was on a research expedition in the Pacific, studying the impact of plastics on marine ecosystems. What she saw changed her life — and eventually, ours.
                </p>
                <p>
                  Back home in Portland, she teamed up with product designer Liam Okafor to ask a single question: <em>&quot;What if the most sustainable products were also the most beautiful and affordable?&quot;</em>
                </p>
                <p>
                  Starting with just 12 carefully vetted products in a garage, they built a community of eco-conscious shoppers who proved that sustainability and style were not mutually exclusive. Word spread. The community grew. EcoShop was born.
                </p>
                <p>
                  Today, with over 50,000 customers and 200+ products, we remain true to our founding promise: every item we sell is better for the planet, crafted with care, and priced for real life.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-indigo-100 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">🌿</div>
                <p className="text-green-800 font-medium">Portland, Oregon — 2018</p>
                <p className="text-green-600 text-sm">Where it all started</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Mission & Values</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Everything we do is guided by a clear north star and four core values.</p>
          </div>
          <div className="bg-indigo-700 rounded-2xl p-8 text-white text-center mb-10">
            <p className="text-lg font-medium italic max-w-2xl mx-auto">
              &ldquo;To make sustainable living accessible, affordable, and beautiful for everyone — while measurably reducing the environmental impact of everyday consumption.&rdquo;
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌍', title: 'Planet First', desc: 'Every business decision is filtered through the question: Is this good for the Earth?' },
              { icon: '🔍', title: 'Radical Transparency', desc: 'We publish our supply chain, carbon footprint, and supplier audits openly.' },
              { icon: '🤝', title: 'Fair for All', desc: 'Fair wages, safe conditions, and community reinvestment across every tier of our supply chain.' },
              { icon: '✨', title: 'Uncompromising Quality', desc: 'Sustainable should never mean second-rate. Our standards are the highest in the industry.' },
            ].map((val) => (
              <div key={val.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-3">{val.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{val.title}</h3>
                <p className="text-sm text-gray-500">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact So Far</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '50,000+', label: 'Customers Served', icon: '👥' },
              { number: '10,000', label: 'Trees Planted', icon: '🌳' },
              { number: '200+', label: 'Eco Products', icon: '♻️' },
              { number: '45 tons', label: 'Plastic Diverted', icon: '🌊' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-extrabold mb-1">{stat.number}</div>
                <div className="text-green-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Meet the Team</h2>
            <p className="text-gray-500">The passionate people behind EcoShop.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-3xl mx-auto mb-4">
                  {member.emoji}
                </div>
                <h3 className="font-semibold text-gray-900 mb-0.5">{member.name}</h3>
                <p className="text-indigo-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-200" aria-hidden="true" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 z-10">
                    {m.year}
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex-1 mt-1">
                    <p className="text-gray-700 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Be Part of the Story</h2>
          <p className="text-indigo-200 mb-8">Every purchase you make is a vote for the kind of world you want to live in. Join us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="px-8 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition-colors">
              Shop Now
            </Link>
            <Link href="/sustainability" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors">
              Our Sustainability Pledge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
