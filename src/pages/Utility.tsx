import { Link } from 'react-router-dom';
import { SEO } from '../components/Layout';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <SEO title="Page Not Found — Brian Kibet" description="The page you're looking for doesn't exist." />
      <div className="text-center max-w-lg">
        <p className="text-[120px] lg:text-[160px] font-bold text-white/5 leading-none">404</p>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
          Page not found.
        </h1>
        <p className="mt-4 text-neutral-400 leading-relaxed font-light">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors"
          >
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-light tracking-wide hover:border-white/50 hover:bg-white/5 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export function ThankYou() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <SEO title="Thank You — Brian Kibet" description="Thank you for reaching out." />
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 mx-auto mb-8 border border-white/20 flex items-center justify-center">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Message received.
        </h1>
        <p className="mt-4 text-neutral-400 leading-relaxed font-light">
          Thank you for reaching out. I'll review your message and respond within 48 hours.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
