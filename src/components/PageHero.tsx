import { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  className?: string;
  imagePosition?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  className = '',
  imagePosition = 'bg-center sm:bg-[right_12%_center]',
}: PageHeroProps) {
  return (
    <section className={`relative h-auto min-h-[440px] sm:min-h-[500px] md:h-[60vh] md:min-h-[540px] flex items-end overflow-hidden ${className}`}>
      {/* Background image with smooth transition */}
      <div
        className={`absolute inset-0 bg-cover ${imagePosition} scale-100 transition-all duration-1000 ease-out will-change-transform`}
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Directional left gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/70 to-transparent sm:to-transparent pointer-events-none" />
      {/* Smooth decreasing fade at the bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent pointer-events-none" />
      <div className="relative section-padding pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 w-full z-10">
        <div className="max-w-3xl animate-fade-up">
          <p className="heading-eyebrow">{eyebrow}</p>
          <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-ink-50 leading-[1.08] mb-4 sm:mb-5 max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="font-sans text-sm sm:text-base md:text-lg text-ink-100 leading-relaxed max-w-xl font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
