import Link from 'next/link';

const cartItems = [
  { id: 1, name: 'Reusable Stainless Water Bottle', price: 29.99, quantity: 2, emoji: '💧', category: 'Home & Living' },
  { id: 2, name: 'Bamboo Toothbrush 4-Pack', price: 14.99, quantity: 1, emoji: '🪥', category: 'Personal Care' },
  { id: 3, name: 'Beeswax Food Wraps (3-pack)', price: 22.50, quantity: 1, emoji: '🍯', category: 'Food & Kitchen' },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-500 mt-1">{cartItems.length} items in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-indigo-50 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {item.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">{item.category}</span>
                        <h3 className="font-semibold text-gray-900 mt-1 text-sm sm:text-base">{item.name}</h3>
                      </div>
                      <button className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0" aria-label="Remove item">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <button className="w-7 h-7 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center text-sm font-medium">−</button>
                        <span className="w-8 text-center text-sm font-semibold text-gray-900">{item.quantity}</span>
                        <button className="w-7 h-7 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center text-sm font-medium">+</button>
                      </div>
                      {/* Price */}
                      <div className="text-right">
                        <div className="text-sm text-gray-500">${item.price.toFixed(2)} each</div>
                        <div className="font-bold text-indigo-700">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="pt-2">
              <Link href="/products" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-20">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal ({cartItems.reduce((s, i) => s + i.quantity, 0)} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-medium">FREE</span>
                  ) : (
                    <span>${shipping.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Estimated Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-indigo-700 text-lg">${total.toFixed(2)}</span>
                </div>
              </div>

              {shipping > 0 && (
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 mb-4 text-xs text-amber-700">
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping 🚚
                </div>
              )}

              {shipping === 0 && (
                <div className="bg-green-50 border border-green-100 rounded-lg p-3 mb-4 text-xs text-green-700">
                  🎉 You qualify for free carbon-offset shipping!
                </div>
              )}

              {/* Promo Code */}
              <div className="mb-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors font-medium">
                    Apply
                  </button>
                </div>
              </div>

              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-sm">
                Proceed to Checkout →
              </button>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-400">
                <span>🔒 Secure checkout</span>
                <span>•</span>
                <span>SSL Encrypted</span>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400">Accepted payments:</p>
                <div className="flex justify-center gap-2 mt-2 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">Visa</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Mastercard</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">PayPal</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Apple Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
