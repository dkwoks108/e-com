const pricingTiers = [
  {
    name: 'Starter',
    price: '$500',
    period: 'minimum order value',
    color: 'border-gray-200',
    headerColor: 'bg-gray-50',
    features: [
      'Wholesale pricing (30% off retail)',
      'Access to 50+ products',
      'Standard EcoShop branding',
      'Net 30 payment terms',
      'Dedicated account manager',
      'Order portal access',
    ],
    cta: 'Apply Now',
    ctaStyle: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
  },
  {
    name: 'Growth',
    price: '$2,500',
    period: 'minimum order value',
    color: 'border-indigo-500',
    headerColor: 'bg-indigo-700',
    popular: true,
    features: [
      'Wholesale pricing (40% off retail)',
      'Access to full catalog (200+ products)',
      'Custom label printing',
      'Net 60 payment terms',
      'Priority account manager',
      'Quarterly business review',
      'Marketing kit & assets',
      'Early access to new products',
    ],
    cta: 'Most Popular',
    ctaStyle: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored to your needs',
    color: 'border-gray-200',
    headerColor: 'bg-gray-900',
    features: [
      'Maximum wholesale discount (up to 55%)',
      'Full private label & white label',
      'Custom formulation available',
      'Flexible payment terms',
      'Dedicated B2B success team',
      'Custom packaging design',
      'Drop-shipping fulfillment',
      'API integration',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  },
];

const benefits = [
  { icon: '💰', title: 'Wholesale Pricing', desc: 'Save 30–55% off retail prices depending on your tier and volume.' },
  { icon: '🏷️', title: 'Private Label', desc: 'Sell under your own brand. We handle manufacturing, labeling, and fulfillment.' },
  { icon: '📦', title: 'Custom Packaging', desc: 'Your logo, your colors, your story — on every package we ship for you.' },
  { icon: '🌱', title: 'Certified Eco Products', desc: 'Offer your customers genuinely sustainable products with verified certifications.' },
  { icon: '🚚', title: 'Drop Shipping', desc: 'Sell without holding inventory. We ship directly to your customers.' },
  { icon: '📊', title: 'B2B Dashboard', desc: 'Real-time order tracking, inventory levels, and sales analytics in one portal.' },
];

const faqs = [
  { q: 'What is the minimum order quantity?', a: 'For wholesale orders, the minimum order value is $500. For private label, minimum orders start at 100 units per SKU.' },
  { q: 'How long does private label production take?', a: 'Standard private label orders take 4–6 weeks from artwork approval to shipment. Rush production (2–3 weeks) is available for certain products.' },
  { q: 'Can I request samples before ordering?', a: 'Yes. We offer a sample kit (up to 5 products) for $25, which is credited toward your first order. Contact us to arrange your sample kit.' },
  { q: 'Do you offer drop shipping?', a: 'Yes, drop shipping is available for Growth and Enterprise tier partners. We ship directly to your end customers with your branding on the packaging.' },
  { q: 'Are there annual volume commitments?', a: 'No mandatory annual commitments for Starter or Growth tiers. Enterprise partners may agree to volume targets in exchange for enhanced pricing.' },
  { q: 'Can I sell EcoShop products on Amazon or other marketplaces?', a: 'Wholesale partners may sell on authorized marketplaces. Private label partners may sell their branded products anywhere. Please review our Reseller Agreement for full details.' },
];

export default function B2BPrivateLabelPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-indigo-400/20 border border-indigo-400/30 text-indigo-300 text-sm px-4 py-1 rounded-full mb-6">
            B2B & Private Label Program
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Grow Your Business with<br />
            <span className="text-indigo-400">Sustainable Products</span>
          </h1>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto mb-8">
            Whether you are a retailer, spa, hotel, or brand looking to go green, EcoShop offers wholesale, private label, and custom packaging solutions that scale with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#inquiry-form" className="px-8 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg transition-colors shadow-lg">
              Start Your Application
            </a>
            <a href="#pricing" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors">
              View Pricing Tiers
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <div className="bg-indigo-50 border-y border-indigo-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { number: '500+', label: 'B2B Partners' },
              { number: '15', label: 'Countries Served' },
              { number: '$2M+', label: 'Wholesale GMV' },
              { number: '4.9★', label: 'Partner Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-bold text-indigo-700">{stat.number}</div>
                <div className="text-xs text-indigo-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Partner with EcoShop?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Everything you need to build or expand a sustainable product line — under one roof.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our B2B Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🛒', title: 'Wholesale', desc: 'Buy EcoShop branded products at trade prices and sell them through your channels — retail, online, or hospitality.', features: ['30–55% off retail', 'Net 30/60 terms', '200+ SKUs available'] },
              { icon: '🏷️', title: 'Private Label', desc: 'We manufacture products to your specification and ship them under your brand. Full turnkey solution available.', features: ['Your branding on everything', 'Custom formulations', 'MOQ from 100 units'] },
              { icon: '📦', title: 'Custom Packaging', desc: 'Differentiate your brand with custom packaging. Sustainable materials only — because your brand values matter.', features: ['Recycled & compostable materials', '100% plastic-free options', 'Design support included'] },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Partnership Tiers</h2>
            <p className="text-gray-500">Flexible options for businesses of every size.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className={`rounded-2xl border-2 ${tier.color} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
                <div className={`${tier.headerColor} p-6 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                  {tier.popular && <div className="text-xs font-semibold text-indigo-200 mb-1 uppercase tracking-wider">Most Popular</div>}
                  <h3 className={`text-xl font-bold mb-1 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
                  <div className={`text-3xl font-extrabold ${tier.popular ? 'text-white' : 'text-gray-900'}`}>{tier.price}</div>
                  <div className={`text-xs mt-1 ${tier.popular ? 'text-indigo-200' : 'text-gray-500'}`}>{tier.period}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#inquiry-form" className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm text-center block transition-colors ${tier.ctaStyle}`}>
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Your Application</h2>
            <p className="text-gray-500 text-sm mb-6">Fill in the form below and our B2B team will be in touch within 1 business day.</p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input type="text" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input type="text" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                <input type="text" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Email *</label>
                <input type="email" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Type *</label>
                <select required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">Select type</option>
                  <option>Wholesale / Reseller</option>
                  <option>Private Label</option>
                  <option>Custom Packaging</option>
                  <option>Drop Shipping</option>
                  <option>Multiple Services</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Monthly Volume *</label>
                <select required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">Select range</option>
                  <option>$500 – $2,500</option>
                  <option>$2,500 – $10,000</option>
                  <option>$10,000 – $50,000</option>
                  <option>$50,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your business</label>
                <textarea rows={4} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" placeholder="What do you sell? Where do you operate? What are you looking for from this partnership?" />
              </div>
              <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
