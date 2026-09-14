import { Award, Globe, Film, Users, Briefcase, Calendar } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const heroImg =
  'https://images.pexels.com/photos/4428045/pexels-photo-4428045.jpeg?auto=compress&cs=tinysrgb&w=1400';

const galleryImages = [
  'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6535736/pexels-photo-6535736.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/20348410/pexels-photo-20348410.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/13188831/pexels-photo-13188831.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/8485838/pexels-photo-8485838.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const journey = [
  {
    year: 'Early Career',
    title: 'Foundations in Commerce',
    description: 'Began building expertise in international trade and business development, establishing a foundation in cross-border commercial operations.',
  },
  {
    year: 'Expansion',
    title: 'GCC–India Trade Bridge',
    description: 'Appointed as GCC–India Trade Commissioner, facilitating bilateral trade relationships and market entry for businesses across both regions.',
  },
  {
    year: 'Media',
    title: 'Film Production',
    description: 'Ventured into film production, creating content that bridges cultural narratives between the Gulf and South Asia.',
  },
  {
    year: 'Leadership',
    title: 'National President',
    description: 'Elected National President, leading initiatives in women empowerment through the All India Jamiatul Quresh Women Cell.',
  },
];

const awards = [
  { title: 'Trade Excellence Award', org: 'GCC–India Business Council', year: '2024' },
  { title: 'Women Leadership Award', org: 'National Federation', year: '2023' },
  { title: 'Media Pioneer Recognition', org: 'International Film Forum', year: '2022' },
  { title: 'Cross-Border Commerce Honoree', org: 'Dubai Business Awards', year: '2021' },
  { title: 'Community Impact Award', org: 'All India Jamiatul Quresh', year: '2020' },
  { title: 'Global Trade Facilitator', org: 'India-Gulf Summit', year: '2019' },
];

const roles = [
  { icon: Globe, label: 'GCC–India Trade Commissioner' },
  { icon: Film, label: 'Film Producer' },
  { icon: Users, label: 'National President — Women Cell' },
  { icon: Briefcase, label: 'Investment Advisor' },
];

export default function About() {
  return (
    <div className="bg-ink-950">
      <PageHero
        eyebrow="About"
        title={<>The Woman Behind <span className="text-gradient-gold">the Vision</span></>}
        subtitle="A leader whose work spans cinema, commerce, and community — connecting the GCC and India with purpose and precision."
        image={heroImg}
      />

      {/* Biography */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <div>
                <p className="heading-eyebrow">Biography</p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-50 mb-6 sm:mb-8 leading-tight">
                  A life dedicated to building bridges
                </h2>
                <div className="space-y-4 sm:space-y-5 font-sans text-xs sm:text-sm md:text-base text-ink-300 leading-relaxed">
                  <p>
                    Zeenat Kureshi is a multifaceted leader whose career embodies the convergence of
                    trade, media, and social empowerment. As the GCC–India Trade Commissioner, she has
                    been instrumental in facilitating bilateral commerce, guiding market entry strategies,
                    and structuring cross-border investments that have reshaped commercial corridors
                    between the Gulf and the Indian subcontinent.
                  </p>
                  <p>
                    Her work in film production brings stories from the region to global audiences,
                    blending cultural authenticity with cinematic craft. As National President of the
                    All India Jamiatul Quresh Women Cell, she leads initiatives that empower women
                    through education, entrepreneurship, and leadership development.
                  </p>
                  <p>
                    Operating from Dubai and Mumbai, Zeenat brings a unique dual-market perspective —
                    understanding the nuances of both GCC business culture and the Indian commercial
                    landscape. Her advisory practice serves investors and enterprises seeking to
                    navigate these markets with confidence.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative">
                <div
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{ backgroundImage: `url(${heroImg})` }}
                />
                <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-xs hidden md:block">
                  <div className="flex gap-3 mb-4">
                    {roles.map((r, i) => (
                      <div key={i} className="w-10 h-10 border border-gold-400/30 flex items-center justify-center">
                        <r.icon size={18} className="text-gold-300" />
                      </div>
                    ))}
                  </div>
                  <p className="font-sans text-xs text-ink-300 leading-relaxed">
                    Four roles, one mission — connecting markets, amplifying voices, empowering communities.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership Journey */}
      <section className="py-20 sm:py-24 md:py-32 bg-ink-900">
        <div className="section-padding">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership Journey"
              title={<>A path of <span className="text-gradient-gold">purpose</span></>}
              subtitle="From commerce to cinema to community leadership — each chapter built on the last."
            />
          </Reveal>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/40 via-gold-400/20 to-transparent" />

            {journey.map((item, i) => (
              <Reveal key={item.title} delay={i * 150}>
                <div className={`relative flex flex-col md:flex-row gap-6 md:gap-8 mb-10 sm:mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-400 ring-4 ring-ink-900 z-10 mt-2" />

                  {/* Content */}
                  <div className="md:w-1/2 pl-10 sm:pl-12 md:pl-0 md:px-8">
                    <div className="glass-card p-5 sm:p-6">
                      <span className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 flex items-center gap-2 mb-2 sm:mb-3">
                        <Calendar size={12} />
                        {item.year}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-ink-50 mb-1.5 sm:mb-2">{item.title}</h3>
                      <p className="font-sans text-xs sm:text-sm text-ink-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* International Roles */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="section-padding">
          <Reveal>
            <SectionHeading
              eyebrow="International Roles"
              title={<>Global <span className="text-gradient-gold">appointments</span></>}
              subtitle="Positions held across borders, each reflecting a commitment to bilateral progress."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {roles.map((role, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="glass-card p-6 sm:p-8 text-center h-full hover:border-gold-400/30 transition-all duration-500 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 border border-gold-400/30 flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-gold-400/10 group-hover:border-gold-400/60 transition-all duration-500">
                    <role.icon size={22} className="text-gold-300" />
                  </div>
                  <p className="font-serif text-lg sm:text-xl text-ink-50 leading-snug">{role.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="py-20 sm:py-24 md:py-32 bg-ink-900">
        <div className="section-padding">
          <Reveal>
            <SectionHeading
              eyebrow="Awards & Recognitions"
              title={<>Honored for <span className="text-gradient-gold">impact</span></>}
              subtitle="Recognition from institutions across trade, media, and community leadership."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {awards.map((award, i) => (
              <Reveal key={award.title} delay={i * 80}>
                <div className="glass-card p-5 sm:p-6 group hover:border-gold-400/30 transition-all duration-500 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 border border-gold-400/30 flex items-center justify-center group-hover:bg-gold-400/10 transition-all duration-500">
                      <Award size={18} className="text-gold-300" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl text-ink-50 mb-1">{award.title}</h3>
                      <p className="font-sans text-xs sm:text-sm text-ink-300">{award.org}</p>
                      <p className="font-sans text-[11px] sm:text-xs text-gold-400 mt-1.5 sm:mt-2 tracking-wider">{award.year}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="section-padding">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title={<>Professional <span className="text-gradient-gold">portfolio</span></>}
              subtitle="A visual journey through leadership, events, and public engagements."
            />
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className={`relative overflow-hidden group cursor-pointer ${
                    i === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <div
                    className={`bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 ${
                      i === 0 ? 'h-full min-h-[280px] sm:min-h-[400px]' : 'h-48 sm:h-64 md:h-72'
                    }`}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                  <div className="absolute inset-0 bg-ink-950/20 group-hover:bg-ink-950/0 transition-all duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
