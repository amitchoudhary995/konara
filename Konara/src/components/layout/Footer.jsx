import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, Mail } from 'lucide-react';
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
const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className="relative bg-slate-50 dark:bg-zinc-950 overflow-hidden pt-12 sm:pt-16 pb-8 transition-all duration-500">

            {/* Rainbow top strip */}
            <div
                className="absolute top-0 inset-x-0 h-3"
                style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #1e3a8a, #f97316, #eab308, #84cc16, #22c55e, #06b6d4, #3b82f6)' }}
            />

            {/* Ambient bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none opacity-40 dark:opacity-100 motion-safe:animate-[pulse_10s_ease-in-out_infinite]" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-10">

                    {/* Brand & Newsletter Section (Spans 5) */}
                    <div className="lg:col-span-5 pr-0 lg:pr-12">
                        <div className="flex items-center mb-4">
                            <img
                                src={theme === 'dark' ? '/logo-white.svg' : '/logo.svg'}
                                alt="Konara Logo"
                                className="h-10 w-auto object-contain transition-transform hover:rotate-12 duration-500"
                            />
                        </div>

                        <p className="text-slate-600 dark:text-white/70 text-sm sm:text-base max-w-sm mb-6 leading-relaxed font-medium">
                            Leading the global transition to building-integrated photovoltaics. Solar that becomes breathtaking architecture.
                        </p>

                        <form className="relative max-w-sm group" onSubmit={(e) => e.preventDefault()}>
                            <div className="absolute inset-0 bg-secondary/0 rounded-full transition-colors duration-500 group-focus-within:bg-secondary/10 blur-md -z-10" />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full pl-5 pr-28 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/40 focus:outline-none focus:border-secondary/60 focus:bg-white dark:focus:bg-white/10 transition-all duration-500 shadow-inner group-focus-within:ring-2 group-focus-within:ring-secondary/20"
                            />
                            <button className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-secondary to-orange-500 hover:from-orange-500 hover:to-secondary text-white font-bold rounded-full px-5 sm:px-6 transition-all duration-300 shadow-[0_0_10px_rgba(227,77,42,0.2)] hover:shadow-[0_0_15px_rgba(227,77,42,0.5)] flex items-center gap-1.5 uppercase tracking-wider text-xs group/btn">
                                <span className="hidden sm:inline">Subscribe</span>
                                <Mail size={14} className="sm:hidden group-hover/btn:scale-110 transition-transform" />
                            </button>
                        </form>
                    </div>

                    {/* Navigation Links Grid (Spans 7) */}
                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 pt-1">
                        {/* Column 1 */}
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-black mb-4 uppercase tracking-widest text-sm dark:drop-shadow-md">Company</h4>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'About Us', path: '/about' },
                                    { name: 'Contact', path: '/contact' }
                                ].map(link => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="group flex items-center text-slate-600 dark:text-white/60 hover:text-secondary dark:hover:text-white transition-colors duration-300 font-medium text-sm">
                                            <ArrowRight size={14} className="text-secondary opacity-0 -ml-4 mr-0 group-hover:opacity-100 group-hover:mr-2 group-hover:ml-0 transition-all duration-300" />
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-black mb-4 uppercase tracking-widest text-sm dark:drop-shadow-md">Explore</h4>
                            <ul className="space-y-3">
                                {[
                                    { name: 'BIPV Technology', path: '/bipv' },
                                    { name: 'Our Products', path: '/products' },
                                    { name: 'Global Projects', path: '/projects' }
                                ].map(link => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="group flex items-center text-slate-600 dark:text-white/60 hover:text-secondary dark:hover:text-white transition-colors duration-300 font-medium text-sm">
                                            <ArrowRight size={14} className="text-secondary opacity-0 -ml-4 mr-0 group-hover:opacity-100 group-hover:mr-2 group-hover:ml-0 transition-all duration-300" />
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 - Socials */}
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-black mb-4 uppercase tracking-widest text-sm dark:drop-shadow-md">Connect</h4>
                            <div className="flex items-center gap-3">
                                {SOCIAL_LINKS.map(social => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            aria-label={social.name}
                                            className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-white/70 flex items-center justify-center transition-all duration-300 hover:border-secondary hover:bg-secondary/10 hover:text-secondary hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                        >
                                            <Icon className="w-4 h-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-nav uppercase tracking-widest">
                    <p className="text-xs font-medium text-slate-500 dark:text-white/40">© {new Date().getFullYear()} Konara. All rights reserved.</p>
                    <div className="flex gap-6 text-[11px] font-bold text-slate-500 dark:text-white/50">
                        <Link to="/privacy" className="hover:text-secondary dark:hover:text-white transition-colors duration-300">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-secondary dark:hover:text-white transition-colors duration-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
