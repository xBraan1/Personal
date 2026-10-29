import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 lg:px-8">
      <div className="text-center max-w-lg">
        <p className="text-8xl md:text-9xl font-serif font-semibold text-[#111]">404</p>
        <h1 className="mt-6 text-2xl md:text-3xl font-serif font-semibold text-white">
          Page not found.
        </h1>
        <p className="mt-4 text-[#a0a0a0] leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          This might be a broken link or a mistyped URL.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#333] text-white text-sm font-medium hover:border-[#555] hover:bg-[#0a0a0a] transition-colors"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
