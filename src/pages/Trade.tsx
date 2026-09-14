import { useState } from 'react';
import { Globe, TrendingUp, Building2, MapPin, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { supabase } from '@/lib/supabase';

const heroImg =
  'https://images.pexels.com/photos/1530829/pexels-photo-1530829.jpeg?auto=compress&cs=tinysrgb&w=1400';
const dealImg =
  'https://images.pexels.com/photos/6918529/pexels-photo-6918529.jpeg?auto=compress&cs=tinysrgb&w=1200';
const skylineImg =
  'https://images.pexels.com/photos/10860642/pexels-photo-10860642.jpeg?auto=compress&cs=tinysrgb&w=1200';

const initiatives = [
  {
    icon: Globe,
    title: 'GCC–India Trade Initiatives',
    description: 'Facilitating bilateral trade agreements, identifying high-potential sectors, and connecting businesses across the Gulf Cooperation Council and India.',
    points: ['Bilateral trade facilitation', 'Sector-specific trade missions', 'Regulatory navigation', 'Partner matching'],
  },
  {
    icon: Building2,
    title: 'Market Entry Support',
    description: 'End-to-end guidance for companies entering new markets — from legal structuring to local partnership identification and government liaison.',
    points: ['Legal & regulatory compliance', 'Local partner identification', 'Office & operations setup', 'Government liaison'],
  },
  {
    icon: TrendingUp,
    title: 'Strategic Advisory Services',
    description: 'Investment advisory for cross-border deals, market intelligence, and structured transaction support across the GCC–India corridor.',
    points: ['Investment structuring', 'Market intelligence reports', 'Due diligence coordination', 'Deal facilitation'],
  },
];

const ticketSizes = ['Under $1M', '$1M – $5M', '$5M – $25M', '$25M – $100M', '$100M+'];
const objectives = [
  'Market Entry',
  'Trade Partnership',
  'Investment Opportunity',
  'Joint Venture',
  'Advisory Consultation',
  'Other',
];
const regions = ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Bahrain', 'Kuwait', 'India', 'Multi-region'];

export default function Trade() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    ticket_size: '',
    objective: '',
    region: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const { error } = await supabase.from('trade_inquiries').insert(form);
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', company: '', phone: '', ticket_size: '', objective: '', region: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-ink-950">
      <PageHero
        eyebrow="Trade & Investment"
        title={<>Bridging Markets, <span className="text-gradient-gold">Building Wealth</span></>}
        subtitle="Strategic trade facilitation and investment advisory across the GCC–India corridor — where opportunity meets execution."
        image={heroImg}
      />

      {/* Overview */}
      <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-luxury-pattern">
        <div className="section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
            <Reveal direction="left">
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-5 sm:w-8 h-px bg-gold-400" />
                  <p className="heading-eyebrow !mb-0">The Opportunity</p>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-50 mb-4 sm:mb-6 leading-tight">
                  Two markets. <span className="text-gradient-gold">One bridge.</span>
                </h2>
                <p className="font-sans text-xs sm:text-sm md:text-base text-ink-300 leading-relaxed mb-4 sm:mb-6 font-light">
                  The GCC and India represent one of the world's most dynamic trade corridors —
                  a $150+ billion relationship growing by the year. Navigating it requires
                  local knowledge, institutional relationships, and strategic foresight.
                </p>
                <p className="font-sans text-xs sm:text-sm md:text-base text-ink-300 leading-relaxed font-light">
                  Through years of hands-on facilitation, Zeenat Kureshi has helped businesses
                  and investors enter markets, structure deals, and build lasting commercial
                  partnerships across both regions.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200} direction="right">
              <div
                className="aspect-[16/10] bg-cover bg-center premium-card card-sheen shadow-2xl transition-all duration-700"
                style={{ backgroundImage: `url(${dealImg})` }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 sm:py-24 md:py-32 bg-ink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-pattern opacity-30 pointer-events-none" />
        <div className="section-padding relative z-10">
          <SectionHeading
            eyebrow="Services"
            title={<>What we <span className="text-gradient-gold">facilitate</span></>}
            subtitle="Comprehensive support across the trade and investment lifecycle."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initiatives.map((item, i) => (
              <Reveal key={item.title} delay={i * 120} direction="up">
                <div className="glass-card p-6 sm:p-8 h-full hover:border-gold-400/50 transition-all duration-500 group card-sheen hover:-translate-y-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 border border-gold-400/30 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-gold-400/10 group-hover:border-gold-400/60 transition-all duration-500">
                    <item.icon size={22} className="text-gold-300 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-ink-50 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-ink-300 leading-relaxed mb-5 sm:mb-6 font-light">{item.description}</p>
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 font-sans text-xs sm:text-sm text-ink-200">
                        <CheckCircle2 size={14} className="text-gold-400 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${skylineImg})` }}
        />
        <div className="absolute inset-0 bg-ink-950/60" />
        <div className="section-padding relative">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-10 sm:mb-12">
                <p className="heading-eyebrow">Initiate a Discussion</p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-50 mb-3 sm:mb-4 leading-tight">
                  Start Your Trade or Investment Inquiry
                </h2>
                <p className="font-sans text-xs sm:text-sm md:text-base text-ink-300 leading-relaxed">
                  Share the details below and receive a tailored response within 48 hours.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              {status === 'success' ? (
                <div className="glass-card p-8 sm:p-12 text-center">
                  <CheckCircle2 size={40} className="text-gold-300 mx-auto mb-5 sm:w-12 sm:h-12" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink-50 mb-2 sm:mb-3">Inquiry Received</h3>
                  <p className="font-sans text-xs sm:text-sm text-ink-300 mb-6 sm:mb-8 max-w-md mx-auto">
                    Thank you for your interest. Your inquiry has been submitted successfully and
                    you'll receive a personalized response within 48 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline w-full sm:w-auto"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="glass-card p-6 sm:p-8 md:p-12 space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Full Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        required
                        className="premium-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        required
                        className="premium-input"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => update('company', e.target.value)}
                        className="premium-input"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="premium-input"
                        placeholder="+971 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Ticket Size</label>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {ticketSizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => update('ticket_size', size)}
                          className={`px-3 sm:px-4 py-2 sm:py-2.5 font-sans text-[11px] sm:text-xs tracking-wider uppercase border transition-all duration-300 ${
                            form.ticket_size === size
                              ? 'border-gold-400 bg-gold-400/10 text-gold-200'
                              : 'border-ink-700 text-ink-300 hover:border-gold-400/40'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Objective</label>
                      <select
                        value={form.objective}
                        onChange={(e) => update('objective', e.target.value)}
                        className="premium-select"
                      >
                        <option value="">Select objective</option>
                        {objectives.map((obj) => (
                          <option key={obj} value={obj}>{obj}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Target Region</label>
                      <select
                        value={form.region}
                        onChange={(e) => update('region', e.target.value)}
                        className="premium-select"
                      >
                        <option value="">Select region</option>
                        {regions.map((reg) => (
                          <option key={reg} value={reg}>{reg}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Additional Details</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={4}
                      className="premium-textarea"
                      placeholder="Tell us about your objectives, timeline, or specific requirements..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-wine-400 text-xs sm:text-sm font-sans">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <button type="submit" className="btn-primary w-full" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
                    {status !== 'loading' && <ArrowRight size={16} />}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Investor Lead Qualification */}
      <section className="py-16 sm:py-20 border-t border-gold-400/10">
        <div className="section-padding">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: Briefcase, title: 'Qualified Introductions', desc: 'Every inquiry is reviewed and matched to the most relevant opportunity or partner.' },
                { icon: MapPin, title: 'Regional Expertise', desc: 'Deep knowledge of GCC and Indian markets, regulations, and business culture.' },
                { icon: TrendingUp, title: 'Track Record', desc: 'Facilitated trade and investment across multiple sectors and deal sizes.' },
              ].map((item, i) => (
                <div key={i} className="text-center p-4">
                  <div className="w-12 h-12 border border-gold-400/30 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <item.icon size={20} className="text-gold-300" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-ink-50 mb-1.5 sm:mb-2">{item.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-ink-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
