import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-10 sm:py-14 bg-background relative overflow-hidden transition-colors duration-500">
            {/* Subtle background glow */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <div className="group/cta bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 rounded-[2.5rem] border border-orange-400/20 dark:border-blue-500/25 p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl transition-all duration-500">
                    
                    {/* Breathing & Rotating Logo Watermark in CTA corner */}
                    <div className="absolute -right-10 -bottom-10 opacity-[0.06] dark:opacity-[0.09] pointer-events-none select-none transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:scale-105 group-hover/cta:rotate-3 transform-gpu motion-safe:animate-[ctaBreathe_18s_ease-in-out_infinite]">
                        <img src="/logo.png" alt="Konara Edge Logo" className="w-[280px]" />
                    </div>
                    
                    {/* Glowing circular gradients inside panel */}
                    <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-white/20 dark:bg-blue-500/10 rounded-full blur-[90px] pointer-events-none opacity-60 group-hover/cta:opacity-100 transition-opacity duration-700" />
                    <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-yellow-400/25 dark:bg-secondary/10 rounded-full blur-[70px] pointer-events-none opacity-60 group-hover/cta:opacity-100 transition-opacity duration-700" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                        
                        {/* Left Column: Context & Details (Spans 7) */}
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 mb-4 shadow-sm backdrop-blur-md">
                                <ShieldCheck size={13} className="text-yellow-300 dark:text-secondary" />
                                <span className="text-[9px] font-bold uppercase tracking-widest text-white/90">
                                    Certified BIPV Technology
                                </span>
                            </div>
                            
                            <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] font-black text-white mb-4 tracking-tight">
                                Your Architecture, <br />
                                <span className="text-yellow-300 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-secondary dark:to-amber-500">
                                    Empowered.
                                </span>
                            </h3>
                            
                            <p className="text-orange-50 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                                Convert every square meter of your facade into high-efficiency energy production with our seamless BIPV solutions. Don't just build structures—build assets.
                            </p>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-orange-50/90 dark:text-slate-400 text-xs font-semibold">
                                <span className="flex items-center gap-1.5 transition-colors duration-300 hover:text-white dark:hover:text-blue-300 cursor-default">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-blue-500 animate-pulse" />
                                    25-Year Performance Warranty
                                </span>
                                <span className="flex items-center gap-1.5 transition-colors duration-300 hover:text-white dark:hover:text-blue-300 cursor-default">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-blue-500 animate-pulse" />
                                    Seamless Aesthetic Integration
                                </span>
                            </div>
                        </div>

                        {/* Right Column: Actions Stack (Spans 5) */}
                        <div className="lg:col-span-5 flex flex-col gap-3.5 lg:pl-6 w-full">
                            <Link
                                to="/contact"
                                className="group flex items-center justify-between rounded-2xl bg-white text-orange-600 hover:bg-slate-50 dark:bg-secondary dark:text-white dark:hover:bg-secondary/90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase tracking-widest font-nav shadow-lg hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_15px_30px_rgba(227,77,42,0.45)] w-full text-center px-6 py-4.5 text-xs font-bold hover:-translate-y-0.5"
                            >
                                <span className="mx-auto flex items-center gap-2">
                                    Get a custom proposal
                                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </Link>

                            <Link
                                to="/contact"
                                className="flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 px-6 py-4.5 text-xs font-bold text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase tracking-widest font-nav w-full text-center hover:-translate-y-0.5"
                            >
                                Talk to our engineers
                            </Link>
                            
                            <p className="text-[9px] text-orange-100/60 dark:text-slate-500 text-center uppercase tracking-widest font-black">
                                Typically responds within 24 hours
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <style>{`
                @keyframes ctaBreathe {
                    0%, 100% { transform: scale(1) rotate(0deg); }
                    50% { transform: scale(1.05) rotate(2deg); }
                }
            `}</style>
        </section>
    );
};

export default CTASection;