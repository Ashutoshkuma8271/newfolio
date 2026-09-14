import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-ink-950 min-h-[75vh] flex items-center justify-center px-4 py-32">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-16 h-16 border border-gold-400/30 flex items-center justify-center mx-auto mb-6 bg-gold-400/5">
          <Compass className="text-gold-300 w-8 h-8" />
        </div>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400 mb-3 font-medium">
          404 Error
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink-50 mb-4 font-light">
          Page Not Found
        </h1>
        <p className="font-sans text-sm sm:text-base text-ink-300 leading-relaxed mb-8">
          The destination you are looking for may have been relocated or is currently unavailable.
        </p>
        <Link to="/" className="btn-primary">
          <ArrowLeft size={16} />
          Return to Home
        </Link>
      </div>
    </div>
  );
}
