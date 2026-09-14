import { ReactNode } from 'react';
import Reveal from '@/components/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`mb-14 sm:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'}`}>
      <Reveal direction="down">
        <div className={`flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <div className="w-5 sm:w-8 h-px bg-gold-400/80" />
          <p className="heading-eyebrow !mb-0">{eyebrow}</p>
          {align === 'center' && <div className="w-5 sm:w-8 h-px bg-gold-400/80" />}
        </div>
      </Reveal>
      <Reveal direction="up" delay={100}>
        <h2 className="heading-serif mb-4 sm:mb-5">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal direction="up" delay={200}>
          <p className="font-sans text-sm sm:text-base text-ink-300 leading-relaxed font-light">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
