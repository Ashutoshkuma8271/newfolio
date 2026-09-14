import { useState } from 'react';
import { Users, Target, Heart, ArrowRight, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { supabase } from '@/lib/supabase';

const heroImg =
  'https://images.pexels.com/photos/8872485/pexels-photo-8872485.jpeg?auto=compress&cs=tinysrgb&w=1400';
const eventImg =
  'https://images.pexels.com/photos/10401263/pexels-photo-10401263.jpeg?auto=compress&cs=tinysrgb&w=1200';

const mission = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower women through education, entrepreneurship, and leadership development — creating pathways to economic independence and social impact across communities.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Integrity, inclusion, and action. We believe in grassroots engagement, sustainable programs, and measurable outcomes that transform lives and communities.',
  },
  {
    icon: Users,
    title: 'Our Reach',
    description: 'With chapters across India and partnerships in the GCC, the Women Cell serves thousands of women through training, mentorship, and community programs.',
  },
];

const initiatives = [
  { title: 'Entrepreneurship Development', desc: 'Training programs, micro-finance access, and business mentorship for women entrepreneurs.' },
  { title: 'Education & Skill Building', desc: 'Vocational training, digital literacy, and professional development workshops.' },
  { title: 'Leadership Incubation', desc: 'Identifying and nurturing future leaders through structured mentorship and exposure programs.' },
  { title: 'Community Outreach', desc: 'Grassroots engagement, health awareness, and social support networks for women in need.' },
  { title: 'Trade & Commerce', desc: 'Connecting women-led businesses to markets, trade opportunities, and cross-border partnerships.' },
  { title: 'Advocacy & Policy', desc: 'Engaging with policymakers to advance women\'s economic participation and representation.' },
];

const upcomingEvents = [
  { title: 'Women Entrepreneurs Summit 2026', location: 'Mumbai, India', date: 'Feb 2026' },
  { title: 'Leadership Workshop Series', location: 'Hyderabad, India', date: 'Jan 2026' },
  { title: 'Cross-Border Trade for Women', location: 'Dubai, UAE', date: 'Dec 2025' },
];

const roleInterests = [
  'Volunteer',
  'Member',
  'Mentor',
  'Event Organizer',
  'Program Partner',
  'Other',
];

export default function WomenLeadership() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role_interest: '',
    experience: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const { error } = await supabase.from('volunteer_inquiries').insert(form);
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', role_interest: '', experience: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-ink-950">
      <PageHero
        eyebrow="Women Leadership"
        title={<>Empowering Women, <span className="text-gradient-gold">Transforming Communities</span></>}
        subtitle="The All India Jamiatul Quresh Women Cell — a national movement for women's economic, social, and leadership advancement."
        image={heroImg}
      />

      {/* Intro */}
      <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-luxury-pattern">
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal direction="down">
              <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-6 sm:w-10 h-px bg-gold-400/80" />
                <p className="heading-eyebrow !mb-0">National Movement</p>
                <div className="w-6 sm:w-10 h-px bg-gold-400/80" />
              </div>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-50 mb-4 sm:mb-6 leading-tight">
                All India Jamiatul Quresh <span className="text-gradient-gold">Women Cell</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg text-ink-300 leading-relaxed font-light">
                Under the national presidency of Zeenat Kureshi, the Women Cell leads initiatives
                that empower women through education, entrepreneurship, and leadership development.
                With a presence across India and growing partnerships in the GCC, the Cell serves
                as a catalyst for women's economic participation and community transformation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Values / Reach */}
      <section className="py-20 sm:py-24 md:py-32 bg-ink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-pattern opacity-30 pointer-events-none" />
        <div className="section-padding relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mission.map((item, i) => (
              <Reveal key={item.title} delay={i * 120} direction="up">
                <div className="glass-card p-6 sm:p-8 h-full text-center hover:border-gold-400/50 transition-all duration-500 group card-sheen hover:-translate-y-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 border border-gold-400/30 flex items-center justify-center mx-auto mb-5 sm:mb-6 group-hover:bg-gold-400/10 group-hover:border-gold-400/60 transition-all duration-500">
                    <item.icon size={22} className="text-gold-300 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-ink-50 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-ink-300 leading-relaxed font-light">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-luxury-pattern">
        <div className="section-padding relative z-10">
          <SectionHeading
            eyebrow="Initiatives"
            title={<>Programs that <span className="text-gradient-gold">create change</span></>}
            subtitle="Structured initiatives driving measurable impact for women across communities."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {initiatives.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} direction="up">
                <div className="glass-card p-6 sm:p-7 h-full hover:border-gold-400/50 transition-all duration-500 group card-sheen hover:-translate-y-1">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 size={18} className="text-gold-400 mt-0.5 flex-shrink-0" />
                    <h3 className="font-serif text-lg sm:text-xl text-ink-50">{item.title}</h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-ink-300 leading-relaxed font-light pl-7">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="py-20 sm:py-24 md:py-32 bg-ink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-pattern opacity-30 pointer-events-none" />
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <div>
                <p className="heading-eyebrow">Upcoming Events</p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-50 mb-4 sm:mb-6 leading-tight">
                  Join us at upcoming gatherings
                </h2>
                <p className="font-sans text-xs sm:text-sm md:text-base text-ink-300 leading-relaxed mb-6 sm:mb-8">
                  Workshops, summits, and community events designed to connect, inspire, and empower.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {upcomingEvents.map((event, i) => (
                    <div key={i} className="glass-card p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:border-gold-400/30 transition-all duration-500">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 border border-gold-400/30 flex items-center justify-center flex-shrink-0">
                        <Calendar size={18} className="text-gold-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-base sm:text-lg text-ink-50 truncate">{event.title}</h3>
                        <p className="font-sans text-[11px] sm:text-xs text-ink-400 flex items-center gap-1.5 mt-0.5">
                          <MapPin size={11} />
                          {event.location}
                        </p>
                      </div>
                      <span className="font-sans text-[11px] sm:text-xs text-gold-300 tracking-wider whitespace-nowrap">{event.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${eventImg})` }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Volunteer / Member Form */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-10 sm:mb-12">
                <p className="heading-eyebrow">Get Involved</p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-50 mb-3 sm:mb-4 leading-tight">
                  Volunteer or Become a Member
                </h2>
                <p className="font-sans text-xs sm:text-sm md:text-base text-ink-300 leading-relaxed">
                  Join the movement. Share your interest and we'll connect you with the right opportunity.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              {status === 'success' ? (
                <div className="glass-card p-8 sm:p-12 text-center">
                  <CheckCircle2 size={40} className="text-gold-300 mx-auto mb-5 sm:w-12 sm:h-12" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink-50 mb-2 sm:mb-3">Thank You</h3>
                  <p className="font-sans text-xs sm:text-sm text-ink-300 mb-6 sm:mb-8 max-w-md mx-auto">
                    Your interest has been received. Our team will reach out to you shortly with
                    next steps and opportunities to get involved.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-outline w-full sm:w-auto">
                    Submit Another Response
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
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="premium-input"
                        placeholder="+91 ..."
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Area of Interest</label>
                      <select
                        value={form.role_interest}
                        onChange={(e) => update('role_interest', e.target.value)}
                        className="premium-select"
                      >
                        <option value="">Select role</option>
                        {roleInterests.map((role) => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Relevant Experience</label>
                    <textarea
                      value={form.experience}
                      onChange={(e) => update('experience', e.target.value)}
                      rows={3}
                      className="premium-textarea"
                      placeholder="Briefly describe your background, skills, or areas of expertise..."
                    />
                  </div>

                  <div>
                    <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={3}
                      className="premium-textarea"
                      placeholder="Why do you want to join? What would you like to contribute?"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-wine-400 text-xs sm:text-sm font-sans">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <button type="submit" className="btn-primary w-full" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                    {status !== 'loading' && <ArrowRight size={16} />}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
