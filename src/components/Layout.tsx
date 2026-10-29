import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import CookieBanner from './CookieBanner';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/expertise', label: 'Expertise' },
  { path: '/services', label: 'Services' },
  { path: '/experience', label: 'Experience' },
  { path: '/work', label: 'Work' },
  { path: '/skills', label: 'Skills' },
  { path: '/insights', label: 'Insights' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-[#222]' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" aria-label="xBraan1 Home">
              <span className="font-serif text-xl lg:text-2xl font-semibold tracking-tight text-white group-hover:text-gray-300 transition-colors">
                xBraan1
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-[#a0a0a0] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#a0a0a0] hover:text-white transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-[#222] py-4 animate-fade-in">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 text-sm rounded transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-white bg-[#111]'
                        : 'text-[#a0a0a0] hover:text-white hover:bg-[#0a0a0a]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#222] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="font-serif text-2xl font-semibold text-white">
                xBraan1
              </Link>
              <p className="mt-4 text-sm text-[#a0a0a0] leading-relaxed">
                AI Trainer & LLM Evaluation Specialist. Precision-crafted solutions for the future of artificial intelligence.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-medium text-white mb-4">Navigation</h3>
              <ul className="space-y-2">
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-[#a0a0a0] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More */}
            <div>
              <h3 className="text-sm font-medium text-white mb-4">More</h3>
              <ul className="space-y-2">
                {navLinks.slice(5).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-[#a0a0a0] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-medium text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-sm text-[#a0a0a0] hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-[#a0a0a0] hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-sm text-[#a0a0a0] hover:text-white transition-colors">
                    Cookie Preferences
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#222] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#666]">
              © {new Date().getFullYear()} xBraan1. All rights reserved.
            </p>
            <p className="text-xs text-[#666]">
              Crafted with precision.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-[#111] border border-[#333] rounded-full text-white hover:bg-[#1a1a1a] hover:border-[#444] transition-all duration-300 animate-fade-in z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}
