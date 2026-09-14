import { Play, Newspaper, Calendar, MapPin, Download, ExternalLink } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const heroImg =
  'https://images.pexels.com/photos/7513459/pexels-photo-7513459.jpeg?auto=compress&cs=tinysrgb&w=1400';

const eventImages = [
  'https://images.pexels.com/photos/8872485/pexels-photo-8872485.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/29708283/pexels-photo-29708283.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/10401263/pexels-photo-10401263.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/8872471/pexels-photo-8872471.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/9650298/pexels-photo-9650298.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/8872478/pexels-photo-8872478.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const interviews = [
  { title: 'Trade, Media & Empowerment: A Conversation', source: 'YouTube · 45 min', embed: 'dQw4w9WgXcQ' },
  { title: 'GCC–India Corridor: The Future of Bilateral Trade', source: 'YouTube · 32 min', embed: 'dQw4w9WgXcQ' },
  { title: 'Women in Leadership — Global Perspectives', source: 'YouTube · 28 min', embed: 'dQw4w9WgXcQ' },
];

const pressCoverage = [
  { outlet: 'Khaleej Times', headline: 'Zeenat Kureshi on bridging the GCC–India trade gap', date: 'March 2025' },
  { outlet: 'Gulf News', headline: 'Film producer turned trade commissioner making waves', date: 'January 2025' },
  { outlet: 'Forbes India', headline: 'The dual-market leader redefining cross-border commerce', date: 'November 2024' },
  { outlet: 'NDTV', headline: 'Empowering women through trade and media', date: 'September 2024' },
  { outlet: 'Times of India', headline: 'From cinema to commerce: Zeenat Kureshi\'s journey', date: 'July 2024' },
  { outlet: 'Arabian Business', headline: 'Trade commissioner on the future of GCC–India relations', date: 'May 2024' },
];

const speakingEngagements = [
  { event: 'GCC–India Economic Forum', location: 'Dubai, UAE', date: 'Oct 2025' },
  { event: 'Women in Leadership Summit', location: 'Mumbai, India', date: 'Sep 2025' },
  { event: 'Global Trade Facilitation Conference', location: 'Abu Dhabi, UAE', date: 'Jun 2025' },
  { event: 'Cross-Border Investment Forum', location: 'Doha, Qatar', date: 'Mar 2025' },
];

export default function Media() {
  return (
    <div className="bg-ink-950">
      <PageHero
        eyebrow="Media & Press"
        title={<>Stories That <span className="text-gradient-gold">Resonate</span></>}
        subtitle="Press coverage, interviews, and public engagements — amplifying the work across screens and stages."
        image={heroImg}
      />

      {/* Press Coverage */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="section-padding">
          <Reveal>
            <SectionHeading
              eyebrow="Press Coverage"
              title={<>In the <span className="text-gradient-gold">headlines</span></>}
              subtitle="Selected features and coverage from leading publications."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {pressCoverage.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <a
                  href="#"
                  className="glass-card p-5 sm:p-6 block h-full hover:border-gold-400/30 transition-all duration-500 group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                    <Newspaper size={18} className="text-gold-300" />
                    <span className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400">{item.outlet}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-ink-50 mb-3 leading-snug group-hover:text-gold-200 transition-colors duration-300">
                    {item.headline}
                  </h3>
                  <div className="flex items-center justify-between pt-2 border-t border-gold-400/10">
                    <span className="font-sans text-[11px] sm:text-xs text-ink-400">{item.date}</span>
                    <ExternalLink size={14} className="text-ink-500 group-hover:text-gold-300 transition-colors" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Interviews */}
      <section className="py-20 sm:py-24 md:py-32 bg-ink-900">
        <div className="section-padding">
          <Reveal>
            <SectionHeading
              eyebrow="Interviews"
              title={<>Watch the <span className="text-gradient-gold">conversations</span></>}
              subtitle="Featured interviews and talks on trade, media, and leadership."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interviews.map((video, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden bg-ink-950">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gold-400/50 flex items-center justify-center group-hover:bg-gold-400/20 group-hover:border-gold-400 transition-all duration-500">
                        <Play size={22} className="text-gold-300 ml-1 sm:w-6 sm:h-6" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <span className="font-sans text-xs text-gold-300 tracking-wider">{video.source}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-ink-50 mt-3 sm:mt-4 leading-snug group-hover:text-gold-200 transition-colors duration-300">
                    {video.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="section-padding">
          <Reveal>
            <SectionHeading
              eyebrow="Event Gallery"
              title={<>Moments from the <span className="text-gradient-gold">stage</span></>}
              subtitle="Speaking engagements, conferences, and public appearances."
            />
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {eventImages.map((img, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative overflow-hidden group cursor-pointer h-48 sm:h-64 md:h-80">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                  <div className="absolute inset-0 bg-ink-950/30 group-hover:bg-ink-950/10 transition-all duration-500" />
                  <div className="absolute inset-0 border border-transparent group-hover:border-gold-400/30 transition-all duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-20 sm:py-24 md:py-32 bg-ink-900">
        <div className="section-padding">
          <Reveal>
            <SectionHeading
              eyebrow="Speaking Engagements"
              title={<>On the <span className="text-gradient-gold">agenda</span></>}
              subtitle="Upcoming and recent speaking appearances at global forums."
            />
          </Reveal>

          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {speakingEngagements.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="glass-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 hover:border-gold-400/30 transition-all duration-500 group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border border-gold-400/30 flex items-center justify-center group-hover:bg-gold-400/10 transition-all duration-500 flex-shrink-0">
                      <Calendar size={18} className="text-gold-300" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl text-ink-50">{item.event}</h3>
                      <p className="font-sans text-xs sm:text-sm text-ink-400 flex items-center gap-1.5">
                        <MapPin size={12} />
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-gold-300 tracking-wider sm:text-right">{item.date}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Download */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="section-padding">
          <Reveal>
            <div className="glass-card p-8 sm:p-10 md:p-16 text-center max-w-3xl mx-auto">
              <Download size={36} className="text-gold-300 mx-auto mb-4 sm:mb-6 sm:w-10 sm:h-10" />
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-50 mb-3 sm:mb-4">
                Download the Media Kit
              </h2>
              <p className="font-sans text-xs sm:text-sm text-ink-300 leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto">
                Access high-resolution photographs, biography, press releases, and brand assets
                for editorial and media use.
              </p>
              <a href="#" className="btn-primary w-full sm:w-auto">
                Download Media Kit
                <Download size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
