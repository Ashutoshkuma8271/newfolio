import { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  className?: string;
}

export default function PageHero({ eyebrow, title, subtitle, image, className = '' }: PageHeroProps) {
  return (
    <section className={`relative h-auto min-h-[460px] sm:min-h-[520px] md:h-[62vh] md:min-h-[560px] flex items-end overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative section-padding pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 w-full z-10">
        <div className="max-w-3xl animate-fade-up">
          <p className="heading-eyebrow">{eyebrow}</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-ink-50 leading-[1.08] mb-4 sm:mb-5 max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg text-ink-200 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
