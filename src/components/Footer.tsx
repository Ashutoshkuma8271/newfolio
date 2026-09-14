import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, Send, ArrowUpRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({ email });
      if (error) {
        if (error.code === '23505') {
          setStatus('success');
          setEmail('');
        } else {
          setStatus('error');
        }
      } else {
        setStatus('success');
        setEmail('');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-ink-950 border-t border-gold-400/10 pt-16 md:pt-20 pb-8">
      <div className="section-padding">
        {/* Newsletter CTA */}
        <div className="glass-card p-6 sm:p-8 md:p-12 mb-16 md:mb-20 grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-50 mb-2 sm:mb-3">
              Stay Connected
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ink-300 leading-relaxed">
              Subscribe for insights on trade, media, and leadership initiatives delivered to your inbox.
            </p>
          </div>
          <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="premium-input pr-10"
                required
              />
              <Mail className="absolute right-0 top-3.5 text-ink-500" size={18} />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap w-full sm:w-auto" disabled={status === 'loading'}>
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              {status !== 'loading' && <Send size={14} />}
            </button>
          </form>
        </div>

        {status === 'success' && (
          <p className="text-emerald2-400 text-xs sm:text-sm mb-8 font-sans">
            Thank you for subscribing. You'll receive updates soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-wine-400 text-xs sm:text-sm mb-8 font-sans">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-gold-400/40 rounded-full flex-shrink-0">
                <span className="font-serif text-lg sm:text-xl text-gold-300 font-medium">ZK</span>
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-ink-50 tracking-wide">Zeenat Kureshi</span>
                <span className="font-sans text-[8px] sm:text-[10px] tracking-[0.2em] uppercase text-gold-400/60 mt-0.5">
                  Producer · Commissioner · President
                </span>
              </div>
            </div>
            <p className="font-sans text-xs sm:text-sm text-ink-300 leading-relaxed max-w-md">
              Bridging borders through trade, storytelling, and women's empowerment. Building bridges between the GCC and India with vision, integrity, and impact.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-4 sm:mb-5">Navigate</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { label: 'About', path: '/about' },
                { label: 'Trade & Investment', path: '/trade' },
                { label: 'Media & Press', path: '/media' },
                { label: 'Women Leadership', path: '/women-leadership' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-xs sm:text-sm text-ink-300 hover:text-gold-300 transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-4 sm:mb-5">Connect</h4>
            <ul className="space-y-2.5 sm:space-y-3 font-sans text-xs sm:text-sm text-ink-300">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold-400 flex-shrink-0" />
                <span className="truncate">info@zeenatkureshi.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold-400 flex-shrink-0" />
                <span>+971 4 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-gold-400 flex-shrink-0" />
                <span>Dubai · Mumbai</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border border-ink-700 text-ink-300 hover:border-gold-400/50 hover:text-gold-300 transition-all duration-300 rounded-none"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-line mb-6 sm:mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="font-sans text-[11px] sm:text-xs text-ink-500 tracking-wider">
            © {new Date().getFullYear()} ZeenatKureshi.com — All rights reserved.
          </p>
          <p className="font-sans text-[11px] sm:text-xs text-ink-500 tracking-wider">
            Designed with intention. Built for impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
