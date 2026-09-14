import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Film, Users, TrendingUp, Quote, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { useParallax } from '@/hooks/useParallax';

const heroPortrait =
  'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1400';
const tradeImg =
  'https://images.pexels.com/photos/1530829/pexels-photo-1530829.jpeg?auto=compress&cs=tinysrgb&w=1200';
const mediaImg =
  'https://images.pexels.com/photos/7513459/pexels-photo-7513459.jpeg?auto=compress&cs=tinysrgb&w=1200';
const womenImg =
  'https://images.pexels.com/photos/8872485/pexels-photo-8872485.jpeg?auto=compress&cs=tinysrgb&w=1200';
const investmentImg =
  'https://images.pexels.com/photos/6918529/pexels-photo-6918529.jpeg?auto=compress&cs=tinysrgb&w=1200';

const verticals = [
  {
    icon: Globe,
    title: 'Trade',
    description: 'GCC–India trade corridors, market entry strategy, and bilateral commerce facilitation.',
    image: tradeImg,
    link: '/trade',
  },
  {
    icon: Film,
    title: 'Media',
    description: 'Film production, press engagement, and storytelling that moves audiences across continents.',
    image: mediaImg,
    link: '/media',
  },
  {
    icon: Users,
    title: 'Women Leadership',
    description: 'Empowering women through the All India Jamiatul Quresh Women Cell and national initiatives.',
    image: womenImg,
    link: '/women-leadership',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description: 'Strategic advisory for cross-border investments, deal structuring, and market intelligence.',
    image: investmentImg,
    link: '/trade',
  },
];

const mediaLogos = ['Forbes', 'Khaleej Times', 'Gulf News', 'NDTV', 'Times of India', 'Arabian Business'];

export default function Home() {
  const heroParallax = useParallax<HTMLElement>({ speed: 0.2, direction: 'down' });
  const quoteParallax = useParallax<HTMLElement>({ speed: 0.15, direction: 'down' });
  const ctaParallax = useParallax<HTMLElement>({ speed: 0.18, direction: 'down' });

  return (
    <div className="bg-ink-950 bg-luxury-grid">
      {/* Cinematic Hero with Parallax */}
      <section
        ref={heroParallax.ref}
        className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden pt-24 pb-16 sm:pt-28 md:pt-24 md:pb-20"
      >
        {/* Background image - precisely positioned with smooth hardware-accelerated parallax motion */}
        <div
          className="absolute inset-0 bg-cover bg-[center_top_15%] sm:bg-[right_8%_top_22%] md:bg-[right_10%_top_25%] lg:bg-[right_8%_top_28%] xl:bg-[right_6%_top_30%] will-change-transform scale-105"
          style={{
            backgroundImage: `url(${heroPortrait})`,
            transform: `translate3d(0, ${Math.min(45, Math.max(-45, heroParallax.offset * 0.12))}px, 0) scale(1.05)`,
          }}
        />
        {/* Cinematic overlays - transparent on the right to reveal the subject, dark on the left for text readability */}
        <div className="absolute inset-0 hero-radial opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/75 to-transparent sm:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30 sm:hidden pointer-events-none" />

        {/* Ambient floating gold orbs with distinct motion speeds */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gold-400/15 blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/12 w-64 h-64 rounded-full bg-gold-300/10 blur-3xl animate-float-reverse pointer-events-none" />

        {/* Content */}
        <div className="relative section-padding w-full z-10">
          <div className="max-w-4xl">
            <div className="animate-fade-down">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-gold-400" />
                <span className="font-display text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold-300 font-semibold flex items-center gap-2">
                  <Sparkles size={13} className="text-gold-400 animate-pulse" />
                  Official Portal
                </span>
              </div>
            </div>

            <h1 className="font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.04] text-ink-50 mb-4 sm:mb-6 animate-fade-up">
              Zeenat Kureshi
            </h1>

            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-4 gap-y-2 mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              {['Film Producer', 'GCC–India Trade Commissioner', 'National President'].map((role, i) => (
                <span key={role} className="font-display text-xs sm:text-sm md:text-base text-gold-200 tracking-wide flex items-center gap-2 sm:gap-3 font-medium">
                  {i > 0 && <span className="text-gold-400/50">|</span>}
                  {role}
                </span>
              ))}
            </div>

            <p className="font-sans text-sm sm:text-base md:text-lg text-ink-100 leading-relaxed max-w-2xl mb-8 sm:mb-10 md:mb-12 animate-fade-up font-light" style={{ animationDelay: '400ms' }}>
              A visionary leader bridging the Gulf and the subcontinent — producing stories that resonate,
              facilitating trade that transforms economies, and championing women who shape the future.
              With a presence across Dubai and Mumbai, the work spans cinema, commerce, and community.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <Link to="/contact" className="btn-primary text-center group">
                Collaborate
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/media" className="btn-outline text-center">
                Media Inquiry
              </Link>
              <Link to="/trade" className="btn-outline text-center">
                Investment Discussion
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator with smooth glow */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in hidden sm:flex" style={{ animationDelay: '1s' }}>
          <span className="font-display text-[10px] tracking-[0.3em] uppercase text-ink-400 font-semibold">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Featured Media Logos with subtle luxury background */}
      <section className="py-12 sm:py-16 border-y border-gold-400/10 bg-ink-900/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-pattern opacity-40 pointer-events-none" />
        <div className="section-padding relative">
          <Reveal direction="down">
            <p className="text-center font-display text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gold-400/80 mb-8 sm:mb-10 font-medium">
              Featured In Major Publications
            </p>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-5 sm:gap-y-6">
              {mediaLogos.map((logo) => (
                <span
                  key={logo}
                  className="font-serif text-lg sm:text-xl md:text-2xl text-ink-300 hover:text-gold-300 transition-all duration-500 hover:scale-105 cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key Verticals with Premium Cards */}
      <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-luxury-pattern">
        {/* Ambient light glow behind cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="section-padding relative z-10">
          <div className="text-center mb-14 sm:mb-20 max-w-3xl mx-auto">
            <Reveal direction="down">
              <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-6 sm:w-10 h-px bg-gold-400/80" />
                <p className="heading-eyebrow !mb-0">Areas of Impact</p>
                <div className="w-6 sm:w-10 h-px bg-gold-400/80" />
              </div>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="heading-serif mb-4 sm:mb-5">
                Four Verticals. <span className="text-gradient-gold">One Vision.</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p className="font-sans text-xs sm:text-sm md:text-base text-ink-300 leading-relaxed font-light">
                Each domain is a pillar of a broader mission — connecting markets, amplifying voices,
                and building lasting institutions across the GCC and India.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {verticals.map((v, i) => (
              <Reveal key={v.title} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
                <Link
                  to={v.link}
                  className="group relative h-80 sm:h-96 block premium-card card-sheen"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110 will-change-transform"
                    style={{ backgroundImage: `url(${v.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/65 to-transparent transition-opacity duration-500 group-hover:from-ink-950/90" />

                  <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end z-10">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 border border-gold-400/30 flex items-center justify-center mb-3 sm:mb-4 bg-ink-950/60 backdrop-blur-sm group-hover:bg-gold-400/20 group-hover:border-gold-400/70 group-hover:scale-105 transition-all duration-500">
                      <v.icon size={20} className="text-gold-300 sm:w-[22px] sm:h-[22px]" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-50 mb-2 transition-colors duration-300 group-hover:text-gold-200">{v.title}</h3>
                    <p className="font-sans text-xs sm:text-sm text-ink-200 leading-relaxed max-w-md mb-3 sm:mb-4 font-light">
                      {v.description}
                    </p>
                    <div className="flex items-center gap-2 text-gold-300 font-display text-xs tracking-[0.2em] uppercase font-medium">
                      Explore
                      <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Statement with Parallax */}
      <section ref={quoteParallax.ref} className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-ink-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold-400/20 to-transparent" />
        
        {/* Parallax decorative light flare */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-[120px] pointer-events-none transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(-50%, calc(-50% + ${quoteParallax.offset * 0.1}px), 0)`,
          }}
        />

        <div className="section-padding relative">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <Quote size={40} className="text-gold-400/30 mx-auto mb-6 sm:mb-8 sm:w-12 sm:h-12" />
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-ink-50 leading-[1.3] italic">
                "Trade builds economies, media shapes narratives, and empowered women transform societies.
                My work lives at the intersection of all three."
              </p>
              <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3">
                <div className="w-6 sm:w-8 h-px bg-gold-400" />
                <span className="font-display text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-300 font-semibold">Zeenat Kureshi</span>
                <div className="w-6 sm:w-8 h-px bg-gold-400" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 sm:py-20 border-y border-gold-400/10 bg-ink-950/60 backdrop-blur-sm">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '15+', label: 'Years of Leadership' },
              { value: '2', label: 'Continents Bridged' },
              { value: '50+', label: 'Trade Facilitations' },
              { value: '10K+', label: 'Women Empowered' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="text-center p-2 group">
                  <p className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient-gold mb-1.5 sm:mb-2 group-hover:scale-105 transition-transform duration-500">{stat.value}</p>
                  <p className="font-display text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase text-ink-400 font-medium">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Parallax */}
      <section ref={ctaParallax.ref} className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 transition-transform duration-700 ease-out will-change-transform scale-110"
          style={{
            backgroundImage: `url(${tradeImg})`,
            transform: `translate3d(0, ${Math.min(40, Math.max(-40, ctaParallax.offset * 0.12))}px, 0) scale(1.08)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/80 to-ink-950" />
        <div className="section-padding relative">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ink-50 mb-4 sm:mb-6 leading-tight">
                Let's Build Something <span className="text-gradient-gold">Extraordinary</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm md:text-base text-ink-300 leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto">
                Whether you're exploring a trade corridor, seeking media collaboration, or looking to
                invest across borders — the conversation starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-center group">
                  Start a Conversation
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link to="/about" className="btn-outline text-center">
                  Learn More
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
