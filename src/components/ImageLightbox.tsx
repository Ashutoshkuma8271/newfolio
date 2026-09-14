import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, currentIndex, images.length, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-ink-950/95 backdrop-blur-2xl animate-fade-in select-none"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 w-11 h-11 flex items-center justify-center border border-gold-400/40 text-gold-300 hover:bg-gold-400/20 hover:text-white transition-all duration-300"
        aria-label="Close lightbox"
      >
        <X size={22} />
      </button>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + images.length) % images.length);
          }}
          className="absolute left-4 md:left-8 z-20 w-12 h-12 flex items-center justify-center border border-gold-400/30 bg-ink-950/60 text-gold-300 hover:bg-gold-400/20 hover:border-gold-400 transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Active Image */}
      <div
        className="relative max-w-5xl max-h-[85vh] overflow-hidden flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Portfolio ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-sm border border-gold-400/20 shadow-2xl animate-scale-in"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-pill px-4 py-1.5 text-xs font-sans tracking-widest text-gold-300 uppercase">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % images.length);
          }}
          className="absolute right-4 md:right-8 z-20 w-12 h-12 flex items-center justify-center border border-gold-400/30 bg-ink-950/60 text-gold-300 hover:bg-gold-400/20 hover:border-gold-400 transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}
