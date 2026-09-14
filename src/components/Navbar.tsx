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
            ? 'bg-ink-950/95 backdrop-blur-xl border-b border-gold-400/15 py-2 sm:py-2.5 md:py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-ink-950/70 backdrop-blur-md py-2.5 sm:py-3.5 md:py-4'
        }`}
      >
        <nav className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center leading-none focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-400/50 rounded-sm py-1"
            aria-label="Zeenat Kureshi Home"
          >
            <img
              src="/logo-horizontal-dark.png"
              alt="Zeenat Kureshi — Film Producer · Trade Commissioner · National President"
              className="h-9 xs:h-10 sm:h-11 md:h-12 lg:h-13.5 xl:h-14 w-auto max-w-[220px] xs:max-w-[260px] sm:max-w-[320px] md:max-w-none object-contain select-none transition-all duration-300 group-hover:opacity-95 group-hover:scale-[1.02]"
              style={{ maxHeight: '56px', width: 'auto' }}
            />
          </Link>

          <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-xs tracking-[0.2em] uppercase transition-colors duration-300 relative group py-1.5 font-medium ${
                  location.pathname === link.path
                    ? 'text-gold-300'
                    : 'text-ink-200 hover:text-gold-300'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-gold transition-all duration-500 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden text-ink-50 hover:text-gold-300 transition-colors p-2 -mr-1.5 flex items-center justify-center focus:outline-none"
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
        <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-7 px-6 text-center">
          <Link to="/" onClick={() => setOpen(false)} className="mb-2">
            <img
              src="/logo-monogram-dark.png"
              alt="Zeenat Kureshi"
              className="w-14 h-14 object-contain opacity-90 hover:opacity-100 transition-opacity"
              style={{ width: '56px', height: '56px' }}
            />
          </Link>
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
