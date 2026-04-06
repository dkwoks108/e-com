export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
          <p className="text-indigo-200 text-lg max-w-xl mx-auto">
            Questions, feedback, or partnership enquiries — we would love to hear from you. Our team typically responds within one business day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                  <input id="firstName" type="text" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                  <input id="lastName" type="text" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                <input id="email" type="email" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="jane@example.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input id="phone" type="tel" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="+1 (555) 000-0000" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject <span className="text-red-500">*</span></label>
                <select id="subject" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">Select a subject</option>
                  <option>Order Inquiry</option>
                  <option>Product Question</option>
                  <option>Returns & Refunds</option>
                  <option>B2B & Wholesale</option>
                  <option>Partnership Opportunity</option>
                  <option>Media & Press</option>
                  <option>General Feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                <textarea id="message" rows={5} required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" placeholder="Tell us how we can help…" />
              </div>

              <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-sm">
                Send Message
              </button>
              <p className="text-xs text-gray-400 text-center">We will respond within 1 business day. By submitting, you agree to our Privacy Policy.</p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            {[
              { icon: '📧', title: 'Email Us', lines: ['hello@ecoshop.com', 'support@ecoshop.com'] },
              { icon: '📞', title: 'Call Us', lines: ['+1 (800) 326-7467', 'Mon–Fri 9am–6pm PST'] },
              { icon: '📍', title: 'Visit Us', lines: ['123 Green Street, Suite 4', 'Portland, OR 97201, USA'] },
              { icon: '🕐', title: 'Business Hours', lines: ['Mon–Fri: 9:00am – 6:00pm PST', 'Sat: 10:00am – 4:00pm PST', 'Sun: Closed'] },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4">
                <div className="text-2xl flex-shrink-0">{card.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line} className="text-sm text-gray-500">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-green-100 to-indigo-100 rounded-2xl h-48 flex flex-col items-center justify-center border border-gray-100">
              <span className="text-4xl mb-2">🗺️</span>
              <p className="text-sm font-medium text-gray-600">Portland, Oregon</p>
              <p className="text-xs text-gray-500">123 Green Street</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
