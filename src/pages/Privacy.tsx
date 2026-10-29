export default function Privacy() {
  return (
    <div className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-[#a0a0a0] mb-4">Legal</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#666] mb-12">Last updated: January 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-lg font-medium text-white mb-3">Overview</h2>
            <p className="text-sm text-[#a0a0a0] leading-relaxed">
              This Privacy Policy describes how xBraan1 ("we," "us," or "our") collects, uses, and protects 
              information when you visit xbraan1.com (the "Website"). We are committed to protecting your 
              privacy and handling your information with care and transparency.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Information We Collect</h2>
            <p className="text-sm text-[#a0a0a0] leading-relaxed mb-3">
              We collect minimal information necessary to operate this website and communicate with visitors:
            </p>
            <ul className="space-y-2 text-sm text-[#a0a0a0]">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 bg-[#444] rounded-full flex-shrink-0" />
                <span><strong className="text-white">Contact information:</strong> When you use our contact form, we collect your name, email address, and message content.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 bg-[#444] rounded-full flex-shrink-0" />
                <span><strong className="text-white">Technical data:</strong> Standard web server logs may capture your IP address, browser type, and pages visited.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 bg-[#444] rounded-full flex-shrink-0" />
                <span><strong className="text-white">Cookies:</strong> We use essential cookies for site functionality and optional analytics cookies (with your consent).</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">How We Use Information</h2>
            <p className="text-sm text-[#a0a0a0] leading-relaxed">
              We use collected information solely to: respond to your inquiries, improve website functionality, 
              and understand how visitors use our site. We do not sell, trade, or share your personal information 
              with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Data Retention</h2>
            <p className="text-sm text-[#a0a0a0] leading-relaxed">
              Contact form submissions are retained for as long as necessary to respond to your inquiry. 
              Technical logs are retained for a maximum of 90 days. You may request deletion of your 
              personal data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Your Rights</h2>
            <p className="text-sm text-[#a0a0a0] leading-relaxed">
              You have the right to access, correct, or delete your personal information. You may also 
              withdraw consent for analytics cookies at any time through our Cookie Preferences page. 
              To exercise these rights, contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Third-Party Services</h2>
            <p className="text-sm text-[#a0a0a0] leading-relaxed">
              This website is hosted on Cloudflare, which may process data in accordance with their privacy policy. 
              We use Google Fonts for typography, which may collect your IP address. No other third-party 
              services are integrated without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Contact</h2>
            <p className="text-sm text-[#a0a0a0] leading-relaxed">
              For privacy-related questions or requests, please contact us at contact@xbraan1.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
