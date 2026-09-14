import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'}`}>
      <p className="heading-eyebrow">{eyebrow}</p>
      <h2 className="heading-serif mb-5">{title}</h2>
      {subtitle && (
        <p className="font-sans text-base text-ink-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
