export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Shipping Policy</h1>
          <p className="text-indigo-200">Last updated: January 1, 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 prose prose-gray max-w-none">

          <p className="text-gray-600 lead">
            At EcoShop, we are committed to delivering your sustainable products quickly, reliably, and with the smallest possible carbon footprint. Please read our shipping policy carefully before placing your order.
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Processing Times</h2>
            <p className="text-gray-600">All orders are processed within <strong>1–2 business days</strong> after payment confirmation. Orders placed on weekends or public holidays will be processed on the next business day. You will receive an email confirmation with tracking information once your order has shipped.</p>
            <p className="text-gray-600 mt-2">During high-volume periods (e.g., holiday seasons, major sales), processing times may extend to 2–3 business days. We will notify you if there are any significant delays.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Shipping Methods & Rates</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Method</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Estimated Delivery</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-600">Standard Shipping</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-600">5–7 business days</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-600">$5.99 (Free over $50)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-600">Expedited Shipping</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-600">2–3 business days</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-600">$12.99</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-600">Overnight Shipping</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-600">Next business day</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-600">$24.99</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-green-700 font-medium">Free Carbon-Offset Shipping</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-600">5–7 business days</td>
                    <td className="border border-gray-200 px-4 py-2 text-green-700 font-medium">FREE on orders $50+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Domestic Shipping (United States)</h2>
            <p className="text-gray-600">We ship to all 50 U.S. states, including Alaska, Hawaii, and U.S. territories (Puerto Rico, Guam, U.S. Virgin Islands). Deliveries to Alaska, Hawaii, and U.S. territories may require an additional 2–5 business days and may incur additional shipping charges.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. International Shipping</h2>
            <p className="text-gray-600">We currently ship to over 30 countries worldwide. International shipping rates and delivery times vary by destination:</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li><strong>Canada & Mexico:</strong> 7–14 business days, starting at $14.99</li>
              <li><strong>Europe:</strong> 10–21 business days, starting at $19.99</li>
              <li><strong>Australia & New Zealand:</strong> 14–21 business days, starting at $24.99</li>
              <li><strong>Rest of World:</strong> 14–30 business days, starting at $29.99</li>
            </ul>
            <p className="text-gray-600 mt-3"><strong>Important:</strong> International customers are responsible for any customs duties, import taxes, or fees imposed by their country. EcoShop is not liable for delays caused by customs processing.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Order Tracking</h2>
            <p className="text-gray-600">Once your order ships, you will receive an email with a tracking number and a link to monitor your shipment in real time. Tracking information may take up to 24 hours to update after the initial scan.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Shipping Delays</h2>
            <p className="text-gray-600">While we strive to meet all estimated delivery windows, delays can occasionally occur due to:</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Carrier delays (weather events, peak holiday season)</li>
              <li>Incorrect or incomplete shipping address</li>
              <li>Customs clearance for international orders</li>
              <li>Force majeure events beyond our control</li>
            </ul>
            <p className="text-gray-600 mt-3">If your order is significantly delayed, please contact our support team at <strong>support@ecoshop.com</strong> and we will investigate promptly.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Lost or Damaged Packages</h2>
            <p className="text-gray-600">If your package is lost in transit or arrives damaged, please contact us within <strong>7 days</strong> of the expected delivery date. We will work with the carrier to investigate and, where appropriate, reship your order or issue a full refund at no additional cost to you.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Eco-Friendly Packaging</h2>
            <p className="text-gray-600">All EcoShop orders are shipped in 100% recyclable or compostable packaging. We use minimal packaging materials and avoid single-use plastics. Our shipping partners are selected for their commitment to reducing emissions, and all standard domestic shipments are automatically carbon-offset.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact Us</h2>
            <p className="text-gray-600">For shipping enquiries, please email <strong>support@ecoshop.com</strong> or call <strong>+1 (800) 326-7467</strong>, Monday through Friday, 9am–6pm PST.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
