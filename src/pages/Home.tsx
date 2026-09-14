import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Film, Users, TrendingUp, Quote } from 'lucide-react';
import Reveal from '@/components/Reveal';

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
  return (
    <div className="bg-ink-950">
      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 sm:pt-28 md:pt-24 md:pb-20">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroPortrait})` }}
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 hero-radial" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40 sm:hidden" />

        {/* Floating gold orb */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gold-400/10 blur-3xl animate-pulse-slow" />

        {/* Content */}
        <div className="relative section-padding w-full z-10">
          <div className="max-w-4xl">
            <div className="animate-fade-down">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-gold-400" />
                <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold-300 font-medium">
                  Welcome
                </span>
              </div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.04] text-ink-50 mb-4 sm:mb-6 animate-fade-up">
              Zeenat Kureshi
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              {['Film Producer', 'GCC–India Trade Commissioner', 'National President'].map((role, i) => (
                <span key={role} className="font-sans text-xs sm:text-sm md:text-base text-gold-200 tracking-wide flex items-center gap-2 sm:gap-3">
                  {i > 0 && <span className="text-gold-400/40">|</span>}
                  {role}
                </span>
              ))}
            </div>

            <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg text-ink-200 leading-relaxed max-w-2xl mb-8 sm:mb-10 md:mb-12 animate-fade-up" style={{ animationDelay: '400ms' }}>
              A visionary leader bridging the Gulf and the subcontinent — producing stories that resonate,
              facilitating trade that transforms economies, and championing women who shape the future.
              With a presence across Dubai and Mumbai, the work spans cinema, commerce, and community.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <Link to="/contact" className="btn-primary text-center">
                Collaborate
                <ArrowRight size={15} />
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

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in hidden sm:flex" style={{ animationDelay: '1s' }}>
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ink-400">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Featured Media Logos */}
      <section className="py-12 sm:py-16 border-y border-gold-400/10 bg-ink-900">
        <div className="section-padding">
          <p className="text-center font-sans text-[11px] sm:text-xs tracking-[0.3em] uppercase text-ink-400 mb-8 sm:mb-10">
            Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-5 sm:gap-y-6">
            {mediaLogos.map((logo) => (
              <span
                key={logo}
                className="font-serif text-lg sm:text-xl md:text-2xl text-ink-400 hover:text-gold-300 transition-colors duration-500 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Verticals */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="section-padding">
          <Reveal>
            <div className="text-center mb-14 sm:mb-20 max-w-3xl mx-auto">
              <p className="heading-eyebrow">Areas of Impact</p>
              <h2 className="heading-serif mb-4 sm:mb-5">
                Four Verticals. <span className="text-gradient-gold">One Vision.</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm md:text-base text-ink-300 leading-relaxed">
                Each domain is a pillar of a broader mission — connecting markets, amplifying voices,
                and building lasting institutions across the GCC and India.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {verticals.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <Link
                  to={v.link}
                  className="group relative h-80 sm:h-96 overflow-hidden block"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${v.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent transition-opacity duration-500 group-hover:from-ink-950" />

                  <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 border border-gold-400/30 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gold-400/10 group-hover:border-gold-400/60 transition-all duration-500">
                      <v.icon size={20} className="text-gold-300 sm:w-[22px] sm:h-[22px]" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-50 mb-2">{v.title}</h3>
                    <p className="font-sans text-xs sm:text-sm text-ink-200 leading-relaxed max-w-md mb-3 sm:mb-4">
                      {v.description}
                    </p>
                    <div className="flex items-center gap-2 text-gold-300 font-sans text-xs tracking-[0.2em] uppercase">
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

      {/* Quote / Statement */}
      <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-ink-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold-400/20 to-transparent" />
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
                <span className="font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-gold-300 font-medium">Zeenat Kureshi</span>
                <div className="w-6 sm:w-8 h-px bg-gold-400" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 sm:py-20 border-y border-gold-400/10">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '15+', label: 'Years of Leadership' },
              { value: '2', label: 'Continents Bridged' },
              { value: '50+', label: 'Trade Facilitations' },
              { value: '10K+', label: 'Women Empowered' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="text-center p-2">
                  <p className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient-gold mb-1.5 sm:mb-2">{stat.value}</p>
                  <p className="font-sans text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase text-ink-400">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${tradeImg})` }}
        />
        <div className="absolute inset-0 bg-ink-950/80" />
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
                <Link to="/contact" className="btn-primary text-center">
                  Start a Conversation
                  <ArrowRight size={15} />
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
