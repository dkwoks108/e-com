export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-indigo-200">Last updated: January 1, 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-600 leading-relaxed">
          <p>
            Please read these Terms and Conditions (&quot;Terms&quot;) carefully before using the EcoShop website at ecoshop.com (&quot;Site&quot;). By accessing or using our Site, you agree to be bound by these Terms. If you do not agree, please do not use our Site.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>By creating an account, placing an order, or otherwise using our Site, you confirm that you are at least 18 years of age (or the age of majority in your jurisdiction), have read and understood these Terms, and agree to be legally bound by them. If you are using the Site on behalf of a business, you represent that you have authority to bind that business to these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Use of the Site</h2>
            <p className="mb-2">You agree to use our Site only for lawful purposes. You must not:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Violate any applicable local, national, or international laws or regulations</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
              <li>Attempt to gain unauthorized access to any part of our Site or systems</li>
              <li>Use automated tools to scrape, crawl, or extract data without written permission</li>
              <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Products & Descriptions</h2>
            <p>We make every effort to ensure product descriptions, images, and prices are accurate. However, we do not warrant that descriptions are error-free or complete. Product colors may vary due to monitor settings. We reserve the right to correct errors and to change product information at any time without prior notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Orders & Payment</h2>
            <p className="mb-2">By placing an order, you are making an offer to purchase. We reserve the right to:</p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Accept or decline any order at our discretion</li>
              <li>Cancel orders if a product is out of stock, priced incorrectly, or if fraud is suspected</li>
              <li>Limit quantities purchased per customer or household</li>
            </ul>
            <p>Payment is processed securely through Stripe. We accept Visa, Mastercard, American Express, PayPal, and Apple Pay. Prices are shown in USD and are exclusive of applicable taxes unless stated otherwise.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Pricing & Promotions</h2>
            <p>All prices are subject to change without notice. Promotional discount codes must be applied at checkout and cannot be retroactively applied. Promotions may be subject to additional terms and cannot be combined unless explicitly stated.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Intellectual Property</h2>
            <p>All content on this Site — including but not limited to text, graphics, logos, images, product descriptions, and software — is the property of EcoShop or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use. We reserve the right to terminate accounts at our discretion, including for violation of these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Disclaimer of Warranties</h2>
            <p>The Site and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, EcoShop, its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Site or products, including but not limited to loss of profits, data, or goodwill. Our total liability to you shall not exceed the amount you paid for the product giving rise to the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Governing Law & Dispute Resolution</h2>
            <p>These Terms are governed by the laws of the State of Oregon, USA, without regard to conflict of law provisions. Any disputes arising under these Terms shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in Portland, Oregon, under the rules of the American Arbitration Association.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting an updated version on our Site with a revised &quot;last updated&quot; date. Continued use of the Site after changes constitutes acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <strong>legal@ecoshop.com</strong> or write to: EcoShop Legal Team, 123 Green Street, Suite 4, Portland, OR 97201, USA.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
