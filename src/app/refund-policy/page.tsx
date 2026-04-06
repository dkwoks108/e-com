export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Refund & Return Policy</h1>
          <p className="text-indigo-200">Last updated: January 1, 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <p className="text-gray-600 leading-relaxed">
            Your satisfaction is our top priority. If you are not completely happy with your EcoShop purchase, we make returns and refunds as simple and stress-free as possible.
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Return Window</h2>
            <p className="text-gray-600">We accept returns within <strong>30 calendar days</strong> from the date of delivery. After 30 days, we are unable to offer a refund or exchange.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Eligibility Requirements</h2>
            <p className="text-gray-600 mb-2">To be eligible for a return, your item must meet all of the following conditions:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Item is unused and in its original condition</li>
              <li>Item is in its original packaging with all tags attached</li>
              <li>Item was purchased directly from ecoshop.com</li>
              <li>Proof of purchase (order number or receipt) is provided</li>
            </ul>
            <p className="text-gray-600 mt-3"><strong>Non-returnable items include:</strong> perishable goods, personal care items that have been opened or used, downloadable digital products, and gift cards.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How to Initiate a Return</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Email <strong>returns@ecoshop.com</strong> with your order number and reason for return.</li>
              <li>Our team will respond within 1–2 business days with a Return Merchandise Authorization (RMA) number and return shipping label.</li>
              <li>Pack your item securely in its original packaging and affix the prepaid label.</li>
              <li>Drop the package off at any authorized carrier location within 7 days of receiving your RMA.</li>
            </ol>
            <p className="text-gray-600 mt-3">Return shipping is <strong>free</strong> for defective or incorrect items. For change-of-mind returns, a flat $5.99 return shipping fee will be deducted from your refund.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Refund Timeline</h2>
            <p className="text-gray-600">Once we receive and inspect your return, we will notify you by email of the approval or rejection of your refund.</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Approved refunds are processed within <strong>3–5 business days</strong></li>
              <li>Refunds are issued to the original payment method</li>
              <li>Credit card refunds may take an additional 5–10 business days to appear on your statement</li>
              <li>PayPal refunds typically appear within 24–48 hours</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Exchanges</h2>
            <p className="text-gray-600">We replace items that are defective, damaged, or incorrect at no charge. If you need to exchange for the same item or a different size/color, email <strong>returns@ecoshop.com</strong> with your order number and we will arrange an exchange. Exchanges are subject to product availability.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Damaged or Defective Items</h2>
            <p className="text-gray-600">If you receive a damaged or defective item, please contact us within <strong>48 hours</strong> of delivery with photos of the damage. We will immediately arrange a replacement shipment or issue a full refund including original shipping costs.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Sale & Clearance Items</h2>
            <p className="text-gray-600">Items marked as &quot;Final Sale&quot; or &quot;Clearance&quot; are not eligible for returns or refunds unless they arrive defective or damaged. Regular sale items (discounted but not marked Final Sale) follow our standard return policy.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Gift Returns</h2>
            <p className="text-gray-600">Gift recipients can return items for store credit. Please provide the order number or gift receipt. Store credit will be emailed as a unique promo code and never expires.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact Us</h2>
            <p className="text-gray-600">For return and refund questions, contact our team at <strong>returns@ecoshop.com</strong> or call <strong>+1 (800) 326-7467</strong>, Monday–Friday 9am–6pm PST.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
