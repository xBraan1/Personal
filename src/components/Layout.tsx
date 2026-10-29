import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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
]

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="signature text-3xl text-white hover:text-neutral-300 transition-colors">
              xBraan1
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-light transition-colors ${
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-neutral-800">
              <div className="flex flex-col gap-4">
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-light transition-colors ${
                      location.pathname === link.path
                        ? 'text-white'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="signature text-2xl mb-4">xBraan1</p>
              <p className="text-sm text-neutral-400">
                AI Trainer & LLM Evaluation Specialist
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <Link to="/about" className="text-sm text-neutral-400 hover:text-white transition-colors">About</Link>
                <Link to="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">Services</Link>
                <Link to="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Legal</h3>
              <div className="flex flex-col gap-2">
                <Link to="/privacy" className="text-sm text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-sm text-neutral-400 hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
            © {new Date().getFullYear()} Brian Kibet. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
