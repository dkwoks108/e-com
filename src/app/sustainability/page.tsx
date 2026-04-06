import Link from 'next/link';

const commitments = [
  {
    icon: '♻️',
    title: 'Recycled & Upcycled Materials',
    desc: 'Over 70% of our product catalog is made from recycled, upcycled, or reclaimed materials. We prioritize materials that would otherwise end up in landfill or oceans.',
  },
  {
    icon: '🌍',
    title: 'Carbon Neutral Operations',
    desc: 'Since 2021, EcoShop has been fully carbon neutral. We offset 100% of our Scope 1, 2, and 3 emissions through verified reforestation and renewable energy projects.',
  },
  {
    icon: '🤝',
    title: 'Ethical & Fair Trade Sourcing',
    desc: 'We audit every supplier annually. All our manufacturing partners pay living wages, maintain safe working conditions, and are prohibited from child labor.',
  },
  {
    icon: '📦',
    title: 'Zero-Waste Packaging',
    desc: 'All EcoShop packaging is 100% recyclable or compostable. We eliminated single-use plastic from our supply chain in 2022 and are targeting zero-waste across all orders by 2024.',
  },
  {
    icon: '🌊',
    title: 'Ocean Plastic Recovery',
    desc: 'We partner with Ocean Conservancy to fund the removal of one kilogram of ocean plastic for every order placed. To date, we have funded the recovery of over 45 metric tons.',
  },
  {
    icon: '🌳',
    title: 'Reforestation',
    desc: 'Through our partnership with One Tree Planted, we plant one tree for every product sold. We have planted over 10,000 trees across 8 countries since 2020.',
  },
];

const metrics = [
  { value: '100%', label: 'Carbon Offset', color: 'text-green-600' },
  { value: '70%+', label: 'Recycled Materials', color: 'text-blue-600' },
  { value: '10K', label: 'Trees Planted', color: 'text-emerald-600' },
  { value: '45T', label: 'Ocean Plastic Removed', color: 'text-cyan-600' },
  { value: '0', label: 'Plastic Packaging Used', color: 'text-purple-600' },
  { value: '50+', label: 'Audited Suppliers', color: 'text-indigo-600' },
];

const certifications = [
  { name: 'B Corp Certified', desc: 'Meeting the highest standards of social and environmental performance.', emoji: '🏅' },
  { name: 'Carbon Neutral Certified', desc: 'Verified by the Carbon Trust as a carbon-neutral business since 2021.', emoji: '🌿' },
  { name: 'Fair Trade USA', desc: 'All applicable products carry Fair Trade certification.', emoji: '✅' },
  { name: 'GOTS Organic', desc: 'Global Organic Textile Standard certified for our fabric and clothing range.', emoji: '🧵' },
];

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 via-emerald-800 to-teal-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-400/20 border border-green-400/30 text-green-300 text-sm px-4 py-1 rounded-full mb-6">
            🌱 Our Environmental Commitment
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Sustainability Is Not a<br />
            <span className="text-green-400">Feature — It&apos;s Our Foundation</span>
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Every decision we make — from sourcing and manufacturing to shipping and packaging — is guided by one question: Is this the most sustainable option available?
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="text-center bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className={`text-3xl font-extrabold mb-1 ${m.color}`}>{m.value}</div>
                <div className="text-xs text-gray-500">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Commitments</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Six pillars that define how we operate and what we stand for.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Certifications</h2>
            <p className="text-gray-500">Third-party verified standards that hold us accountable.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-green-50 rounded-2xl p-6 border border-green-100 text-center">
                <div className="text-4xl mb-3">{cert.emoji}</div>
                <h3 className="font-semibold text-green-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-green-700">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our 2025 Goals</h2>
            <p className="text-gray-500">We publish our targets publicly and report progress annually.</p>
          </div>
          <div className="space-y-4">
            {[
              { goal: 'Zero-waste packaging on 100% of orders', progress: 78, color: 'bg-green-500' },
              { goal: 'Scope 3 emissions reduced by 50% vs. 2022 baseline', progress: 42, color: 'bg-blue-500' },
              { goal: '25,000 trees planted (cumulative)', progress: 40, color: 'bg-emerald-500' },
              { goal: '100% of suppliers audited for fair labor practices', progress: 85, color: 'bg-indigo-500' },
              { goal: '90% of product catalog made from sustainable materials', progress: 70, color: 'bg-purple-500' },
            ].map((item) => (
              <div key={item.goal} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-700">{item.goal}</p>
                  <span className="text-sm font-bold text-gray-900">{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className={`${item.color} h-2 rounded-full transition-all`} style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Shop With Purpose</h2>
          <p className="text-green-200 mb-8">Every EcoShop purchase funds sustainability projects and supports ethical artisans worldwide.</p>
          <Link href="/products" className="px-8 py-3 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-50 transition-colors inline-block">
            Explore Our Products
          </Link>
        </div>
      </section>
    </div>
  );
}
