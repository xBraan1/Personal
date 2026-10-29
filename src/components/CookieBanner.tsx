import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie-preferences');
    if (!stored) {
      // Small delay to avoid layout shift
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-preferences', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: false,
    }));
    setShow(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-preferences', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
    }));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-[#111] border border-[#222] p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-[#a0a0a0] leading-relaxed">
            This website uses essential cookies for functionality. You can also allow analytics cookies 
            to help improve the site. See our{' '}
            <Link to="/cookies" className="text-white underline underline-offset-2">Cookie Preferences</Link>{' '}
            for details.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={acceptEssential}
            className="px-4 py-2 text-xs font-medium text-[#a0a0a0] border border-[#333] hover:border-[#555] hover:text-white transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-xs font-medium text-black bg-white hover:bg-gray-200 transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={() => setShow(false)}
            className="p-1 text-[#666] hover:text-white transition-colors"
            aria-label="Dismiss cookie banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
