import { Breadcrumbs, SEO } from '../components/Layout';

export function Privacy() {
  return (
    <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <SEO title="Privacy Policy — Brian Kibet" description="Privacy policy for xBraan1 portfolio website." />
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        <h1 className="font-bold text-3xl lg:text-4xl text-white tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-neutral-500 text-sm mb-12">Last updated: January 2025</p>

        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-lg font-medium text-white mb-3">Overview</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              This Privacy Policy describes how xBraan1 ("we," "us," or "our") collects, uses, and protects 
              information when you visit this website. We are committed to protecting your privacy and handling 
              your information with care and transparency.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Information We Collect</h2>
            <p className="text-sm text-neutral-400 leading-relaxed mb-3">
              We collect minimal information necessary to operate this website and communicate with visitors:
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                <span><strong className="text-white">Contact information:</strong> When you use our contact form, we collect your name, email address, and message content.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                <span><strong className="text-white">Technical information:</strong> Standard web server logs may capture your IP address, browser type, and pages visited.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0" />
                <span><strong className="text-white">Cookies:</strong> We use essential cookies for site functionality and optional analytics cookies (with your consent).</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">How We Use Information</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We use collected information solely to: respond to your inquiries, improve website functionality, 
              and understand how visitors use our site. We do not sell, trade, or share your personal information 
              with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Data Retention</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Contact form submissions are retained for as long as necessary to respond to your inquiry. 
              Technical logs are retained for a maximum of 90 days. You may request deletion of your 
              personal data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Your Rights</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              You have the right to access, correct, or delete your personal information. You may also 
              withdraw consent for analytics cookies at any time through our Cookie Preferences page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Third-Party Services</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              This website is hosted on Cloudflare, which may process data in accordance with their privacy policy. 
              We use Google Fonts for typography. No other third-party services are integrated without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Contact</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              For privacy-related questions or requests, please use the contact form on this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export function Terms() {
  return (
    <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <SEO title="Terms of Service — Brian Kibet" description="Terms of service for xBraan1 portfolio website." />
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
        <h1 className="font-bold text-3xl lg:text-4xl text-white tracking-tight mb-4">Terms of Service</h1>
        <p className="text-neutral-500 text-sm mb-12">Last updated: January 2025</p>

        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-lg font-medium text-white mb-3">Acceptance of Terms</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by 
              these Terms of Service. If you do not agree with any part of these terms, you should not 
              use this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Use of Website</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              This website is provided for informational purposes and as a means to contact xBraan1 
              for professional services. You agree to use the website only for lawful purposes and in 
              a way that does not infringe the rights of others.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Intellectual Property</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              All content on this website is the property of xBraan1 and is protected by applicable 
              intellectual property laws. You may not reproduce, distribute, or create derivative works 
              without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Professional Services</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Any professional services engagement is governed by a separate agreement between xBraan1 
              and the client. Information on this website does not constitute a binding offer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Disclaimer</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              This website and its content are provided "as is" without warranties of any kind. 
              xBraan1 does not warrant that the website will be uninterrupted, error-free, or free 
              of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Contact</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              For questions about these Terms of Service, please use the contact form on this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export function Cookies() {
  return (
    <div className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <SEO title="Cookie Preferences — Brian Kibet" description="Cookie preferences for xBraan1 portfolio website." />
        <Breadcrumbs items={[{ label: 'Cookie Preferences' }]} />
        <h1 className="font-bold text-3xl lg:text-4xl text-white tracking-tight mb-4">Cookie Preferences</h1>
        <p className="text-neutral-500 text-sm mb-12">Manage how this website uses cookies.</p>

        <div className="space-y-6 mb-12">
          <div className="p-6 border border-white/5 bg-neutral-950">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-medium text-white">Essential Cookies</h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  Required for the website to function properly. These cannot be disabled.
                </p>
              </div>
              <span className="text-xs text-neutral-500 flex-shrink-0">Always active</span>
            </div>
          </div>

          <div className="p-6 border border-white/5 bg-neutral-950">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-medium text-white">Analytics Cookies</h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  Help us understand how visitors use this website by collecting anonymous usage data.
                </p>
              </div>
              <span className="text-xs text-neutral-500 flex-shrink-0">Optional</span>
            </div>
          </div>
        </div>

        <div className="p-6 border border-white/5 bg-neutral-950">
          <h3 className="text-sm font-medium text-white mb-3">About Cookies</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They help 
            the site remember your preferences and understand how you use it. For more information, 
            please read our <a href="/privacy" className="text-white underline underline-offset-2">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
