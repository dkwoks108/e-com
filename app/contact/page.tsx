import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Gabaya Legacy",
  description:
    "Get in touch with Gabaya Legacy. We're here to help with your orders, queries, and feedback.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F5F0E8] to-[#EDE5D8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-2">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4">
            We&apos;d Love to Hear from You
          </h1>
          <p className="text-[#5C5C5C] max-w-xl mx-auto leading-relaxed">
            Have a question about our products, an order, or just want to share
            your love for conscious luxury? We&apos;re here for you — 24/7.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#2C2C2C] mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Priya"
                    className="w-full px-4 py-3 rounded-xl border border-[#D4C8B4] bg-white text-sm text-[#2C2C2C] outline-none focus:ring-2 focus:ring-[#7B9E87] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#2C2C2C] mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-[#D4C8B4] bg-white text-sm text-[#2C2C2C] outline-none focus:ring-2 focus:ring-[#7B9E87] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#2C2C2C] mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="priya@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#D4C8B4] bg-white text-sm text-[#2C2C2C] outline-none focus:ring-2 focus:ring-[#7B9E87] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#2C2C2C] mb-2"
                >
                  Phone Number (Optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-[#D4C8B4] bg-white text-sm text-[#2C2C2C] outline-none focus:ring-2 focus:ring-[#7B9E87] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#2C2C2C] mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-[#D4C8B4] bg-white text-sm text-[#2C2C2C] outline-none focus:ring-2 focus:ring-[#7B9E87] focus:border-transparent transition-all"
                >
                  <option value="">Select a topic</option>
                  <option value="order">Order Enquiry</option>
                  <option value="product">Product Question</option>
                  <option value="return">Returns & Exchanges</option>
                  <option value="wholesale">Wholesale / Bulk Orders</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#2C2C2C] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl border border-[#D4C8B4] bg-white text-sm text-[#2C2C2C] outline-none focus:ring-2 focus:ring-[#7B9E87] focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2C2C2C] text-white py-4 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-[#7B9E87] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#2C2C2C] mb-6">
                Contact Information
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: (
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                    label: "Email",
                    value: "gabaya.legacy@gmail.com",
                    href: "mailto:gabaya.legacy@gmail.com",
                  },
                  {
                    icon: (
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    ),
                    label: "Phone",
                    value: "+91 7014657490",
                    href: "tel:7014657490",
                  },
                  {
                    icon: (
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ),
                    label: "Address",
                    value: "Jaipur, Rajasthan, India",
                    href: null,
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                    label: "Instagram",
                    value: "@gabaya.legacy",
                    href: "https://instagram.com/gabaya.legacy",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center shrink-0 text-[#7B9E87]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm text-[#2C2C2C] hover:text-[#7B9E87] transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#2C2C2C] font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="bg-[#F5F0E8] rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#2C2C2C] mb-4">
                Our Policies
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "🚚",
                    title: "Free Shipping",
                    desc: "Free shipping on all orders above ₹2,000",
                  },
                  {
                    icon: "🔁",
                    title: "30-Day Returns",
                    desc: "Easy returns within 30 days of delivery",
                  },
                  {
                    icon: "🔐",
                    title: "Secure Payments",
                    desc: "SSL encrypted & secure checkout",
                  },
                  {
                    icon: "📞",
                    title: "24/7 Support",
                    desc: "Round-the-clock customer support",
                  },
                ].map((policy) => (
                  <div key={policy.title} className="flex items-start gap-3">
                    <span className="text-xl shrink-0">{policy.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-[#2C2C2C]">
                        {policy.title}
                      </p>
                      <p className="text-xs text-[#5C5C5C]">{policy.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E0D5]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#2C2C2C] mb-4">
                Response Times
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-[#5C5C5C]">
                  <span>Email</span>
                  <span className="font-medium text-[#2C2C2C]">
                    Within 24 hours
                  </span>
                </div>
                <div className="flex justify-between text-[#5C5C5C]">
                  <span>Phone / WhatsApp</span>
                  <span className="font-medium text-[#2C2C2C]">
                    9 AM – 9 PM IST
                  </span>
                </div>
                <div className="flex justify-between text-[#5C5C5C]">
                  <span>Instagram DM</span>
                  <span className="font-medium text-[#2C2C2C]">
                    Within 12 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
