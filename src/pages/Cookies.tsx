import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function Cookies() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie-preferences');
    if (stored) {
      try {
        setPreferences(JSON.parse(stored));
      } catch {
        // ignore invalid stored preferences
      }
    }
  }, []);

  const handleSave = () => {
    const toSave = { ...preferences, essential: true }; // Essential cookies cannot be disabled
    localStorage.setItem('cookie-preferences', JSON.stringify(toSave));
    setPreferences(toSave);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAcceptAll = () => {
    const all = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('cookie-preferences', JSON.stringify(all));
    setPreferences(all);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-[#a0a0a0] mb-4">Legal</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Cookie Preferences</h1>
        <p className="text-sm text-[#666] mb-12">Manage how this website uses cookies.</p>

        {/* Cookie Categories */}
        <div className="space-y-6 mb-12">
          {/* Essential */}
          <div className="p-6 border border-[#222] bg-[#080808]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-medium text-white">Essential Cookies</h3>
                <p className="mt-2 text-sm text-[#a0a0a0] leading-relaxed">
                  Required for the website to function properly. These cannot be disabled as they 
                  enable core features like navigation, security, and form handling.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#666] flex-shrink-0">
                <Check size={14} className="text-white" />
                Always active
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="p-6 border border-[#222] bg-[#080808]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-medium text-white">Analytics Cookies</h3>
                <p className="mt-2 text-sm text-[#a0a0a0] leading-relaxed">
                  Help us understand how visitors use this website by collecting anonymous usage data. 
                  This information helps improve the site's performance and user experience.
                </p>
              </div>
              <button
                onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${
                  preferences.analytics ? 'bg-white' : 'bg-[#333]'
                }`}
                role="switch"
                aria-checked={preferences.analytics}
                aria-label="Toggle analytics cookies"
              >
                <span
                  className={`absolute top-1 w-4 h-4 rounded-full transition-transform ${
                    preferences.analytics ? 'translate-x-6 bg-black' : 'translate-x-1 bg-[#666]'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Marketing */}
          <div className="p-6 border border-[#222] bg-[#080808]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-medium text-white">Marketing Cookies</h3>
                <p className="mt-2 text-sm text-[#a0a0a0] leading-relaxed">
                  Used to deliver relevant content and track campaign performance. Currently, 
                  this website does not use marketing cookies. This preference is reserved for future use.
                </p>
              </div>
              <button
                onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${
                  preferences.marketing ? 'bg-white' : 'bg-[#333]'
                }`}
                role="switch"
                aria-checked={preferences.marketing}
                aria-label="Toggle marketing cookies"
              >
                <span
                  className={`absolute top-1 w-4 h-4 rounded-full transition-transform ${
                    preferences.marketing ? 'translate-x-6 bg-black' : 'translate-x-1 bg-[#666]'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Save Preferences
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-6 py-3 border border-[#333] text-white text-sm font-medium hover:border-[#555] hover:bg-[#0a0a0a] transition-colors"
          >
            Accept All
          </button>
          {saved && (
            <span className="text-sm text-white animate-fade-in">
              ✓ Preferences saved
            </span>
          )}
        </div>

        {/* Info */}
        <div className="mt-16 p-6 border border-[#222] bg-[#050505]">
          <h3 className="text-sm font-medium text-white mb-3">About Cookies</h3>
          <p className="text-sm text-[#a0a0a0] leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They help 
            the site remember your preferences and understand how you use it. You can change your 
            cookie preferences at any time on this page. For more information about how we handle 
            your data, please read our{' '}
            <a href="/privacy" className="text-white underline underline-offset-2">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
