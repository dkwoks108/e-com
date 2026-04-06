export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-indigo-200">Last updated: January 1, 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-600 leading-relaxed">
          <p>
            EcoShop (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ecoshop.com or make a purchase. Please read it carefully.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="mb-2"><strong>Information you provide directly:</strong></p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Name, email address, mailing address, phone number</li>
              <li>Billing and payment information (processed securely via Stripe)</li>
              <li>Account credentials (username and encrypted password)</li>
              <li>Communications you send us (support emails, contact forms)</li>
              <li>Newsletter and marketing preferences</li>
            </ul>
            <p className="mb-2"><strong>Information collected automatically:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>IP address, browser type, operating system</li>
              <li>Pages visited, time spent on pages, referring URLs</li>
              <li>Device identifiers and cookie data</li>
              <li>Purchase history and browsing behavior on our site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Process and fulfill your orders, including sending confirmation and tracking emails</li>
              <li>Provide customer support and respond to your enquiries</li>
              <li>Send transactional emails and important account notifications</li>
              <li>Send promotional emails and newsletters (with your consent)</li>
              <li>Personalize your shopping experience and recommend products</li>
              <li>Analyze site usage to improve our website and product offerings</li>
              <li>Prevent fraud, detect security incidents, and comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Sharing Your Information</h2>
            <p className="mb-3">We do not sell or rent your personal information to third parties. We may share your data with:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Service Providers:</strong> Payment processors (Stripe), shipping carriers (UPS, FedEx, USPS), email service providers (Mailchimp), and analytics platforms (Google Analytics) — bound by confidentiality agreements.</li>
              <li><strong>Legal Authorities:</strong> When required by law, court order, or to protect our rights and the safety of others.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new entity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies & Tracking Technologies</h2>
            <p className="mb-2">We use cookies and similar technologies to enhance your experience. Types of cookies we use:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Essential Cookies:</strong> Required for basic site functionality (shopping cart, login sessions).</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent).</li>
            </ul>
            <p className="mt-3">You can manage cookie preferences through your browser settings. Disabling certain cookies may affect site functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h2>
            <p>We implement industry-standard security measures including SSL/TLS encryption, secure payment processing via PCI-DSS compliant providers, regular security audits, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Order records are retained for 7 years for tax and accounting purposes. You may request deletion of your account and associated data at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p className="mb-2">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;).</li>
              <li><strong>Portability:</strong> Request your data in a machine-readable format.</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
              <li><strong>Restrict Processing:</strong> Request that we limit how we use your data.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, email <strong>privacy@ecoshop.com</strong>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children&apos;s Privacy</h2>
            <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us with personal data, we will delete it immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes by email or by posting a prominent notice on our website at least 30 days before the changes take effect.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
            <p>For privacy-related questions or to exercise your rights, contact our Data Privacy Officer at <strong>privacy@ecoshop.com</strong> or write to: EcoShop Privacy Team, 123 Green Street, Suite 4, Portland, OR 97201, USA.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
