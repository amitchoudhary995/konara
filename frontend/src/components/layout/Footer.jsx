import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="relative bg-slate-50 dark:bg-zinc-950 overflow-hidden border-t border-slate-200/60 dark:border-white/5 pt-8 pb-4 transition-all duration-500">
        {/* Ambient bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none opacity-40 dark:opacity-100 motion-safe:animate-[pulse_10s_ease-in-out_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 mb-6">
                
                {/* Brand & Newsletter Section (Spans 5) */}
                <div className="lg:col-span-5 pr-0 lg:pr-12">
                    <div className="flex items-center mb-2.5">
                        {/* Dynamic logo src depending on theme mode - removed text brand 'Konara' */}
                        <img 
                          src={theme === 'dark' ? '/logo-white.svg' : '/logo.svg'} 
                          alt="Konara Logo" 
                          className="h-9 w-auto object-contain transition-transform hover:rotate-12 duration-500" 
                        />
                    </div>
                    
                    <p className="text-slate-600 dark:text-white/60 text-xs max-w-sm mb-4 leading-relaxed font-medium">
                       Leading the global transition to building-integrated photovoltaics. Solar that becomes breathtaking architecture.
                    </p>

                    <form className="relative max-w-sm group" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full pl-5 pr-28 py-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/35 focus:outline-none focus:border-secondary/60 focus:bg-white dark:focus:bg-white/10 transition-all duration-500 shadow-inner"
                        />
                        <button className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-secondary to-orange-500 hover:from-orange-500 hover:to-secondary text-white font-bold rounded-full px-5 transition-all duration-300 shadow-[0_0_10px_rgba(249,115,22,0.2)] hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Navigation Links Grid (Spans 7) */}
                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-4 pt-1">
                    {/* Column 1 */}
                    <div>
                        <h4 className="text-slate-800 dark:text-white font-bold mb-2 uppercase tracking-widest text-xs dark:drop-shadow-md">Company</h4>
                        <ul className="space-y-2">
                            {['About Us', 'Careers', 'Newsroom', 'Contact'].map(link => (
                                <li key={link}>
                                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="group flex items-center text-slate-500 dark:text-white/50 hover:text-secondary transition-colors duration-300 font-medium text-xs">
                                        <span className="w-0 group-hover:w-2.5 h-[2px] bg-secondary mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Column 2 */}
                    {/* Column 2 */}
                    <div>
                        <h4 className="text-slate-800 dark:text-white font-bold mb-2 uppercase tracking-widest text-xs dark:drop-shadow-md">Solutions</h4>
                        <ul className="space-y-2">
                            {['Solar Facades', 'Solar Glass', 'Integrated Roofs', 'Custom Projects'].map(link => (
                                <li key={link}>
                                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="group flex items-center text-slate-500 dark:text-white/50 hover:text-secondary transition-colors duration-300 font-medium text-xs">
                                        <span className="w-0 group-hover:w-2.5 h-[2px] bg-secondary mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Column 3 - Socials */}
                    <div>
                        <h4 className="text-slate-800 dark:text-white font-bold mb-2 uppercase tracking-widest text-xs dark:drop-shadow-md">Connect</h4>
                        <ul className="space-y-2">
                            {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map(link => (
                                <li key={link}>
                                    <a href="#" className="group flex items-center text-slate-500 dark:text-white/50 hover:text-secondary transition-colors duration-300 font-medium text-xs">
                                        <span className="w-0 group-hover:w-2.5 h-[2px] bg-secondary mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-nav uppercase tracking-widest">
                <p className="text-[8px] font-light text-slate-400/80 dark:text-white/20">© {new Date().getFullYear()} Konara. All rights reserved.</p>
                <div className="flex gap-6 text-[9px] font-medium text-slate-400 dark:text-white/30">
                    <Link to="/privacy" className="hover:text-secondary transition-colors duration-300">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-secondary transition-colors duration-300">Terms of Service</Link>
                </div>
            </div>
        </div>


    </footer>
  );
};

export default Footer;
