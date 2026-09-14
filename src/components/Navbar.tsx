import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Trade & Investment', path: '/trade' },
  { label: 'Media & Press', path: '/media' },
  { label: 'Women Leadership', path: '/women-leadership' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-ink-950/95 backdrop-blur-xl border-b border-gold-400/10 py-3'
            : 'bg-ink-950/70 backdrop-blur-md py-3.5 md:py-5'
        }`}
      >
        <nav className="section-padding flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2.5 sm:gap-3 leading-none">
            <span className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border border-gold-400/40 rounded-full transition-all duration-500 group-hover:border-gold-400/70 group-hover:bg-gold-400/5 flex-shrink-0">
              <span className="font-serif text-sm sm:text-base md:text-lg text-gold-300 font-medium">ZK</span>
            </span>
            <span className="flex flex-col">
              <span className="font-serif text-base sm:text-lg md:text-xl text-ink-50 tracking-wide transition-colors duration-300 group-hover:text-gold-200">
                Zeenat Kureshi
              </span>
              <span className="font-sans text-[7px] sm:text-[9px] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-gold-400/70 mt-0.5">
                Producer · Commissioner · President
              </span>
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-5 2xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-xs tracking-[0.18em] uppercase transition-colors duration-300 relative group py-1 ${
                  location.pathname === link.path
                    ? 'text-gold-300'
                    : 'text-ink-200 hover:text-gold-300'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-gold-400 transition-all duration-500 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden text-ink-50 hover:text-gold-300 transition-colors p-2.5 -mr-2 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink-950/98 backdrop-blur-2xl transition-all duration-500 xl:hidden ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-7 sm:gap-8 px-6 text-center">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`font-serif text-2xl sm:text-3xl transition-all duration-500 ${
                location.pathname === link.path ? 'text-gold-300' : 'text-ink-100 hover:text-gold-200'
              }`}
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
