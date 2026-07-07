import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Menu, X, Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useRef, useCallback, memo } from 'react';

// --- Constants (only keep needed links) ---
const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'BIPV', path: '/bipv' },
  { name: 'Products', path: '/products' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: '#',
    icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
  },
  {
    name: 'Twitter',
    url: '#',
    icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
  },
  {
    name: 'Instagram',
    url: '#',
    icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.369c-.243.681-.963 1.245-1.657 1.412-.476.114-.928.162-3.1-.666-2.782-1.06-4.567-3.878-4.704-4.06-.137-.18-1.119-1.488-1.119-2.838 0-1.35.708-2.016.959-2.291.25-.276.548-.345.73-.345.183 0 .365.002.525.009.168.008.394-.064.616.47.228.548.774 1.888.842 2.025.068.137.114.297.023.478-.091.18-.137.291-.274.45-.137.16-.288.356-.411.478-.137.137-.28.285-.12.559.16.274.708 1.168 1.52 1.892 1.045.931 1.926 1.22 2.2 1.357.274.137.434.114.594-.069.16-.183.685-.799.868-1.074.183-.274.365-.228.616-.137.25.091 1.597.753 1.87.89.274.137.457.206.525.32.068.114.068.661-.175 1.299z" /></svg>
  },
  {
    name: 'YouTube',
    url: '#',
    icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
  },
];

// --- Top info bar ---
const TopInfoBar = memo(function TopInfoBar() {
  const socialIcons = SOCIAL_LINKS.map((social) => (
    <a
      key={social.name}
      href={social.url}
      aria-label={social.name}
      className="opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-white"
    >
      {social.icon({ className: 'w-3.5 h-3.5' })}
    </a>
  ));

  return (
    <div className="bg-gradient-to-r from-primary via-accent to-tertiary text-white text-xs border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
        <div className="hidden sm:flex items-center gap-6">
          <span className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <MapPin size={12} aria-hidden="true" /> Pune, Maharashtra, India
          </span>
          <a
            href="mailto:info@konarabipv.com"
            className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-white"
          >
            <Mail size={12} aria-hidden="true" /> info@konarabipv.com
          </a>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <span className="opacity-70 hidden md:inline">We Are Social :</span>
          <div className="flex items-center gap-3" role="list">
            {socialIcons}
          </div>
        </div>
      </div>
    </div>
  );
});

// --- Main Header ---
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
        <TopInfoBar />
      </div>

      <div
        className={`transition-all duration-500 relative ${isScrolled
          ? 'bg-background/85 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-b lg:border border-secondary/40 lg:rounded-full lg:mt-4 lg:mx-6 xl:mx-auto max-w-7xl lg:px-4'
          : 'bg-transparent border-b border-secondary/30'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-14' : 'h-20'
            }`}>
            <nav className="hidden lg:flex items-center gap-5" aria-label="Main navigation">
              <ul className="flex items-center gap-6 list-none p-0 m-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `font-nav text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 relative py-2 focus-visible:outline-2 focus-visible:outline-secondary group ${isActive
                          ? 'text-secondary drop-shadow-sm'
                          : (isScrolled 
                              ? 'text-text hover:text-secondary' 
                              : 'text-primary dark:text-white/80 hover:text-secondary dark:hover:text-white'
                            )
                        }`
                      }
                      aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                    >
                      {({ isActive }) => (
                        <>
                          {link.name}
                          <span className={`absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-300 origin-left ${isActive ? 'w-full scale-x-100' : 'w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100'
                            }`} />
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              to="/"
              className="flex items-center lg:mx-auto"
              aria-label="Konara BiPV - Home"
            >
              <img
                src={'/logo.svg'}
                alt="Konara Logo"
                className={`object-contain transition-all hover:scale-105 duration-500 drop-shadow-sm ${isScrolled
                  ? 'h-8 lg:h-10 '
                  : 'h-10 lg:h-12 '
                  }`}
              />
            </Link>

              <div className="hidden lg:flex items-center gap-5">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${isScrolled 
                    ? 'border-secondary/30 text-secondary' 
                    : 'border-primary/20 dark:border-white/20 text-primary dark:text-white'
                  }`}>
                  <Phone size={13} aria-hidden="true" />
                </div>
                <div className="hidden xl:block">
                  <p className={`text-[8px] font-bold uppercase tracking-widest ${isScrolled 
                      ? 'text-muted' 
                      : 'text-primary/60 dark:text-white/60'
                    }`}>
                    Call Us Anytime
                  </p>
                  <a
                    href="tel:+911234567890"
                    className={`font-nav text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-secondary rounded-sm ${isScrolled 
                        ? 'text-text hover:text-secondary' 
                        : 'text-primary dark:text-white hover:text-secondary'
                      }`}
                  >
                    +91 123 456 7890
                  </a>
                </div>
              </div>

              <Link
                to="/contact"
                className="flex items-center gap-2 bg-secondary text-white font-nav font-semibold text-[11px] uppercase tracking-widest rounded-full pl-5 pr-1.5 py-1.5 hover:bg-secondary/90 transition-all hover:shadow-[0_0_20px_rgba(227,77,42,0.4)] group focus-visible:outline-2 focus-visible:outline-secondary shadow-sm"
              >
                Get Quotes
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300" aria-hidden="true">
                  <ArrowUpRight size={12} />
                </span>
              </Link>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-border bg-background hover:bg-border text-text transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-secondary shadow-sm"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                aria-pressed={theme === 'dark' ? 'true' : 'false'}
              >
                {theme === 'dark' ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}
              </button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <button
                ref={menuButtonRef}
                className={`p-2 focus-visible:outline-2 focus-visible:outline-secondary rounded transition-colors duration-300 ${isScrolled 
                    ? 'text-text' 
                    : 'text-primary dark:text-white'
                  }`}
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-drawer"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          aria-hidden={!isMenuOpen}
        >
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div
            ref={drawerRef}
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-background border-l border-border shadow-2xl transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex flex-col h-full p-4">
              <div className="flex justify-end">
                <button
                  onClick={closeMenu}
                  className="p-2 text-text hover:text-secondary focus-visible:outline-2 focus-visible:outline-secondary rounded"
                  aria-label="Close menu"
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>
              <nav className="flex-1 mt-4" aria-label="Mobile navigation">
                <ul className="flex flex-col gap-1 list-none p-0 m-0">
                  {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                      <NavLink
                        to={link.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block rounded-lg px-4 py-3 text-sm font-semibold font-nav transition-colors hover:bg-accent/10 hover:text-secondary focus-visible:outline-2 focus-visible:outline-secondary ${isActive ? 'bg-accent/10 text-secondary' : 'text-text'}`
                        }
                        aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="pt-4 border-t border-border flex flex-col gap-4">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-between w-full p-3 rounded-lg border border-border bg-background text-text transition-colors font-nav font-semibold text-sm"
                >
                  <span>Theme</span>
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 bg-accent text-primary font-nav font-bold text-sm uppercase tracking-wider rounded-full px-6 py-3 transition hover:bg-accent/80 focus-visible:outline-2 focus-visible:outline-accent shadow-sm"
                >
                  Get Quotes <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;