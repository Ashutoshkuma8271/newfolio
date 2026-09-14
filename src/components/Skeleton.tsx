interface SkeletonProps {
  className?: string;
  variant?: 'rect' | 'circle' | 'text';
}

export function Skeleton({ className = '', variant = 'rect' }: SkeletonProps) {
  const baseClasses = 'skeleton-shimmer';
  const variantClasses = {
    rect: 'rounded-sm',
    circle: 'rounded-full',
    text: 'rounded h-4 w-full',
  }[variant];

  return <div className={`${baseClasses} ${variantClasses} ${className}`} aria-hidden="true" />;
}

export function SkeletonCard() {
  return (
    <div className="glass-card p-6 md:p-8 space-y-4">
      <Skeleton className="w-12 h-12 rounded-none mb-4" />
      <Skeleton className="w-3/4 h-7 mb-2" />
      <Skeleton className="w-full h-4" />
      <Skeleton className="w-5/6 h-4" />
      <Skeleton className="w-1/3 h-4 mt-4" />
    </div>
  );
}

export function SkeletonMedia() {
  return (
    <div className="glass-card overflow-hidden">
      <Skeleton className="w-full aspect-video" />
      <div className="p-6 space-y-3">
        <Skeleton className="w-1/4 h-3" />
        <Skeleton className="w-3/4 h-6" />
        <Skeleton className="w-1/2 h-3" />
      </div>
    </div>
  );
}

export function SkeletonGalleryItem() {
  return (
    <div className="relative overflow-hidden h-64 md:h-80 glass-card">
      <Skeleton className="w-full h-full" />
    </div>
  );
}
