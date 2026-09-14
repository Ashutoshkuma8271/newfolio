import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, CheckCircle2, Linkedin, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { supabase } from '@/lib/supabase';

const heroImg =
  'https://images.pexels.com/photos/36363691/pexels-photo-36363691.jpeg?auto=compress&cs=tinysrgb&w=1400';

const subjects = [
  'Collaboration',
  'Media Inquiry',
  'Investment Discussion',
  'Speaking Engagement',
  'Trade Partnership',
  'General Inquiry',
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@zeenatkureshi.com', href: 'mailto:info@zeenatkureshi.com' },
  { icon: Phone, label: 'Phone', value: '+971 4 000 0000', href: 'tel:+97140000000' },
  { icon: MapPin, label: 'Locations', value: 'Dubai · Mumbai', href: null },
];

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const { error } = await supabase.from('contact_inquiries').insert(form);
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-ink-950">
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient-gold">Connect</span></>}
        subtitle="Whether it's a collaboration, media inquiry, or investment discussion — every conversation starts here."
        image={heroImg}
      />

      {/* Contact Info Cards */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="section-padding">
          <Reveal>
            <SectionHeading
              eyebrow="Reach Out"
              title={<>Multiple ways to <span className="text-gradient-gold">connect</span></>}
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
            {contactInfo.map((info, i) => (
              <Reveal key={info.label} delay={i * 100}>
                <a
                  href={info.href ?? undefined}
                  className={`glass-card p-6 sm:p-8 text-center h-full transition-all duration-500 group ${
                    info.href ? 'hover:border-gold-400/30 cursor-pointer' : ''
                  } block`}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 border border-gold-400/30 flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-gold-400/10 group-hover:border-gold-400/60 transition-all duration-500">
                    <info.icon size={22} className="text-gold-300 sm:w-6 sm:h-6" />
                  </div>
                  <p className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-1.5 sm:mb-2">{info.label}</p>
                  <p className="font-serif text-lg sm:text-xl text-ink-50 break-all sm:break-normal">{info.value}</p>
                </a>
              </Reveal>
            ))}
          </div>

          {/* WhatsApp + Socials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <Reveal>
              <a
                href="https://wa.me/97140000000"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 sm:p-8 flex items-center gap-4 sm:gap-5 hover:border-gold-400/30 transition-all duration-500 group h-full"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 border border-gold-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400/10 group-hover:border-gold-400/60 transition-all duration-500">
                  <MessageCircle size={22} className="text-gold-300 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl sm:text-2xl text-ink-50 mb-1">WhatsApp Business</h3>
                  <p className="font-sans text-xs sm:text-sm text-ink-300">Chat directly for quick responses and inquiries</p>
                </div>
                <ArrowRight size={18} className="text-gold-300 ml-auto group-hover:translate-x-1 transition-transform duration-500 flex-shrink-0" />
              </a>
            </Reveal>

            <Reveal delay={100}>
              <div className="glass-card p-6 sm:p-8 h-full">
                <h3 className="font-serif text-xl sm:text-2xl text-ink-50 mb-2 sm:mb-4">Follow Along</h3>
                <p className="font-sans text-xs sm:text-sm text-ink-300 mb-4 sm:mb-5">Stay updated on social media</p>
                <div className="flex gap-2.5 sm:gap-3">
                  {socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-11 sm:h-11 border border-ink-700 flex items-center justify-center text-ink-300 hover:border-gold-400/50 hover:text-gold-300 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 sm:py-24 md:py-32 bg-ink-900">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-10 sm:mb-12">
                <p className="heading-eyebrow">Send a Message</p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-50 mb-3 sm:mb-4 leading-tight">
                  Start the conversation
                </h2>
                <p className="font-sans text-xs sm:text-sm md:text-base text-ink-300 leading-relaxed">
                  Fill out the form below and you'll receive a response within 48 hours.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              {status === 'success' ? (
                <div className="glass-card p-8 sm:p-12 text-center">
                  <CheckCircle2 size={40} className="text-gold-300 mx-auto mb-5 sm:w-12 sm:h-12" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink-50 mb-2 sm:mb-3">Message Sent</h3>
                  <p className="font-sans text-xs sm:text-sm text-ink-300 mb-6 sm:mb-8 max-w-md mx-auto">
                    Thank you for reaching out. Your message has been received and you'll
                    hear back within 48 hours.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-outline w-full sm:w-auto">
                    Send Another Message
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
                        placeholder="+971 ..."
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Subject *</label>
                      <select
                        value={form.subject}
                        onChange={(e) => update('subject', e.target.value)}
                        required
                        className="premium-select"
                      >
                        <option value="">Select subject</option>
                        {subjects.map((subj) => (
                          <option key={subj} value={subj}>{subj}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-400 mb-2 block">Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      required
                      rows={5}
                      className="premium-textarea"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-wine-400 text-xs sm:text-sm font-sans">
                      Something went wrong. Please try again or reach us via WhatsApp.
                    </p>
                  )}

                  <button type="submit" className="btn-primary w-full" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                    {status !== 'loading' && <Send size={16} />}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 sm:py-20">
        <div className="section-padding">
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <MapPin size={20} className="text-gold-300" />
                  <h3 className="font-serif text-xl sm:text-2xl text-ink-50">Dubai, UAE</h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-ink-300 leading-relaxed">
                  Business Bay<br />
                  Dubai, United Arab Emirates<br />
                  <span className="text-gold-400 mt-2 block">By appointment only</span>
                </p>
              </div>
              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <MapPin size={20} className="text-gold-300" />
                  <h3 className="font-serif text-xl sm:text-2xl text-ink-50">Mumbai, India</h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-ink-300 leading-relaxed">
                  Bandra West<br />
                  Mumbai, Maharashtra, India<br />
                  <span className="text-gold-400 mt-2 block">By appointment only</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
