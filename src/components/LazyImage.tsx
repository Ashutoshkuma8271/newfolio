import { useState } from 'react';
import { Skeleton } from './Skeleton';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
}

export default function LazyImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio,
  ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-ink-900/60 ${containerClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Skeleton Shimmer Placeholder shown until image is loaded */}
      {!loaded && !error && (
        <Skeleton className="absolute inset-0 w-full h-full z-10" />
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          loaded ? 'opacity-100 scale-100 filter-none' : 'opacity-0 scale-105 blur-sm'
        } ${className}`}
        {...props}
      />

      {/* Fallback if image fails to load */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink-900 text-ink-400 font-sans text-xs">
          Image unavailable
        </div>
      )}
    </div>
  );
}
