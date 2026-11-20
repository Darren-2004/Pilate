import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuraLogo from './AuraLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const baseHeaderClass = `site-header sticky top-0 z-50 transition-all duration-300 ${
    isHome
      ? (isScrolled ? 'bg-[#461F17]/95 backdrop-blur-md shadow-lg text-white' : 'bg-transparent text-white')
      : 'bg-[#5C2C20] text-[#FAF6F2] shadow-md'
  }`;
  const scrolledClass = isScrolled ? (isHome ? 'is-home scrolled' : 'not-home scrolled') : '';

  return (
    <header className={`${baseHeaderClass} ${scrolledClass}`}>
      <div className="section-wrap flex items-center justify-between h-14 sm:h-16 md:h-18">
        {/* Brand / Logo Left */}
        <Link to="/" className="flex items-center shrink-0">
          <AuraLogo light={isHome || isScrolled} size="md" />
        </Link>

        {/* Desktop 3 Navigation Tabs in the center */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em]">
          <Link
            to="/"
            className={`transition duration-200 py-1 border-b-2 ${
              location.pathname === '/'
                ? 'border-[#D9C3B4] text-white font-bold'
                : isHome
                ? 'border-transparent text-white/85 hover:text-white hover:border-white/40'
                : 'border-transparent text-[#FAF6F2]/80 hover:text-white hover:border-white/40'
            }`}
          >
            Accueil
          </Link>
          <Link
            to="/services"
            className={`transition duration-200 py-1 border-b-2 ${
              location.pathname === '/services'
                ? 'border-[#D9C3B4] text-white font-bold'
                : isHome
                ? 'border-transparent text-white/85 hover:text-white hover:border-white/40'
                : 'border-transparent text-[#FAF6F2]/80 hover:text-white hover:border-white/40'
            }`}
          >
            Tarifs &amp; Planning
          </Link>
          <Link
            to="/contact"
            className={`transition duration-200 py-1 border-b-2 ${
              location.pathname === '/contact'
                ? 'border-[#D9C3B4] text-white font-bold'
                : isHome
                ? 'border-transparent text-white/85 hover:text-white hover:border-white/40'
                : 'border-transparent text-[#FAF6F2]/80 hover:text-white hover:border-white/40'
            }`}
          >
            À propos &amp; Contact
          </Link>
        </nav>

        {/* Desktop Action Right */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/237692319459?text=Bonjour%20Aura%20Moon%2C%20je%20souhaite%20r%C3%A9server%20une%20s%C3%A9ance."
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-[0.18em] uppercase rounded-full px-5 py-2 transition duration-300 font-semibold bg-[#5C2C20] text-white hover:bg-[#794939] shadow-md hover:shadow-lg border border-white/20"
          >
            Réserver
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg text-white focus:outline-none"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu as an OVERLAY (Does NOT push page items down) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 top-14 sm:top-16 bg-black/55 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Absolute Menu Drawer */}
          <div className="absolute top-full left-0 right-0 bg-[#FAF6F2] text-[#2D1B17] shadow-2xl px-6 py-6 flex flex-col gap-3 text-xs uppercase tracking-[0.2em] z-50 md:hidden animate-slide-up border-t border-[#2D1B17]/10">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2.5 px-3 rounded-lg flex items-center justify-between ${
                location.pathname === '/' ? 'bg-[#5C2C20]/10 text-[#5C2C20] font-bold' : 'text-[#2D1B17] hover:bg-black/5'
              }`}
            >
              <span>Accueil</span>
              <span>→</span>
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2.5 px-3 rounded-lg flex items-center justify-between ${
                location.pathname === '/services' ? 'bg-[#5C2C20]/10 text-[#5C2C20] font-bold' : 'text-[#2D1B17] hover:bg-black/5'
              }`}
            >
              <span>Tarifs &amp; Planning</span>
              <span>→</span>
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2.5 px-3 rounded-lg flex items-center justify-between ${
                location.pathname === '/contact' ? 'bg-[#5C2C20]/10 text-[#5C2C20] font-bold' : 'text-[#2D1B17] hover:bg-black/5'
              }`}
            >
              <span>À propos &amp; Contact</span>
              <span>→</span>
            </Link>

            <a
              href="https://wa.me/237692319459?text=Bonjour%20Aura%20Moon%2C%20je%20souhaite%20r%C3%A9server%20une%20s%C3%A9ance."
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-center bg-[#5C2C20] hover:bg-[#794939] text-white py-3 rounded-full font-semibold shadow-md tracking-wider transition"
            >
              Réserver via WhatsApp
            </a>
          </div>
        </>
      )}
    </header>
  );
}
