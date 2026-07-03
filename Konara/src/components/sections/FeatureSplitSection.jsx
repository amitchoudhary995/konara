import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, Zap, Cog, Play, CheckCircle2 } from 'lucide-react';

// Lightweight count-up for the "25+ Years" stamp
function useCountUp(target, active, durationMs = 1200) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!active) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setValue(target);
            return;
        }
        let raf;
        const start = performance.now();
        const tick = (now) => {
            const progress = Math.min((now - start) / durationMs, 1);
            // Smoother ease-out cubic
            setValue(Math.round((1 - Math.pow(1 - progress, 3)) * target));
            if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [active, target, durationMs]);
    return value;
}

const FeatureSplitSection = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const years = useCountUp(25, visible);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Ultra-smooth staggered reveal styling
    const reveal = (delay = 0) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionProperty: 'opacity, transform',
        transitionDuration: '1000ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: visible ? `${delay}ms` : '0ms',
    });

    // Forcing a deep dark theme for this specific section to guarantee contrast and add premium visual break
    return (
        <section ref={sectionRef} className="py-20 sm:py-24 relative overflow-hidden bg-background">

            {/* Breathing ambient glow for premium atmosphere */}
            <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-secondary/5 dark:bg-secondary/15 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3 motion-safe:animate-[breathe_9s_ease-in-out_infinite]" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/3 motion-safe:animate-[breathe_11s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                    {/* Left Column - Overlapping Images & 3D Stamp */}
                    <div className="lg:col-span-6 relative">
                        <div className="grid grid-cols-2 gap-4 lg:gap-6 items-start relative z-10">

                            {/* Left-side column */}
                            <div className="space-y-4 lg:space-y-6">
                                {/* Top-left image */}
                                <div
                                    className="rounded-[2.5rem] overflow-hidden aspect-[3/4] border border-border dark:border-white/10 shadow-2xl relative group bg-muted motion-safe:transition-all motion-safe:duration-700 hover:shadow-secondary/20"
                                    style={reveal(0)}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center motion-safe:transition-transform motion-safe:duration-[10s] group-hover:scale-110"
                                        style={{ backgroundImage: `url('about-1.jpg')` }}
                                    />
                                    {/* Glassy overlay at bottom for depth */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                </div>

                                {/* Bottom-left Experience Card */}
                                <div
                                    className="rounded-[2.5rem] p-6 sm:p-8 text-white flex flex-col justify-center aspect-[4/3] shadow-2xl relative overflow-hidden group bg-cover bg-center border border-border dark:border-white/10"
                                    style={{ backgroundImage: "url('/about.jpg')" }}
                                >
                                    {/* High contrast glassmorphic gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#050B14]/95 via-[#050B14]/75 to-secondary/60 backdrop-blur-[2px] transition-all duration-700 group-hover:to-secondary/80" />

                                    {/* Animated light flare */}
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/40 rounded-full blur-[40px] pointer-events-none group-hover:scale-150 transition-transform duration-1000 ease-out" />

                                    <div className="relative z-10">
                                        <span className="text-4xl sm:text-5xl lg:text-6xl font-black block mb-2 tracking-tight drop-shadow-md">
                                            {years}+
                                        </span>
                                        <span className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-widest block max-w-[140px] leading-relaxed">
                                            Years Of Solar Experience
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right-side column */}
                            <div className="space-y-4 lg:space-y-6 pt-12 md:pt-16 relative">

                                {/* Contact Stamp with smooth spinning */}
                                <div
                                    className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 z-30 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center motion-safe:transition-all motion-safe:duration-1000"
                                    style={reveal(200)}
                                >
                                    <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-background dark:bg-[#050B14] border border-border dark:border-white/10 shadow-xl" />
                                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full motion-safe:animate-[spin_15s_linear_infinite] select-none pointer-events-none">
                                        <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                        <text fill="currentColor" className="text-primary dark:text-white/80 font-bold text-[9px] uppercase tracking-[0.25em]">
                                            <textPath href="#circlePath" startOffset="0%">
                                                Contact Us • Contact Us • Contact Us •
                                            </textPath>
                                        </text>
                                    </svg>
                                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary text-white flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.4)] group hover:scale-110 transition-transform duration-300">
                                        <Zap size={20} fill="currentColor" />
                                    </div>
                                </div>

                                {/* Right vertical image */}
                                <div
                                    className="rounded-[2.5rem] overflow-hidden h-[400px] sm:h-[480px] border border-border dark:border-white/10 shadow-2xl relative group bg-muted transition-all duration-700 hover:shadow-secondary/20"
                                    style={reveal(300)}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110"
                                        style={{ backgroundImage: "url('/about-2.jpg')" }}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Text details */}
                    <div className="lg:col-span-6 space-y-8 lg:pl-6">
                        <div style={reveal(100)}>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 mb-5 shadow-sm backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-secondary motion-safe:animate-pulse" />
                                <span className="text-xs font-bold text-secondary uppercase tracking-widest drop-shadow-sm">
                                    Core Focus
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary dark:text-white leading-[1.15] tracking-tight mb-6">
                                Solar Integration For <span className="text-secondary drop-shadow-sm">Aesthetics </span> And <span className="text-secondary drop-shadow-sm">Sustainability</span>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-8">
                                Solastra offers complete end-to-end EPC solutions for BIPV projects. BIPV (Building-Integrated Photovoltaics) offers ways to embed solar cells in building materials. BIPV materials enhance aesthetics & solar capacities for long-term energy savings & environmental benefits.
                            </p>
                        </div>

                        {/* Premium Feature List - Compact */}
                        <div className="space-y-1.5 mt-2">
                            {[
                                "Utilizes untapped solar potential",
                                "Implementable & affordable building material solutions",
                                "Perfect for new constructions",
                                "Customizable designs & translucency for every application",
                                "Enhance revenues while being environmentally responsible"
                            ].map((feature, idx) => (
                                <div 
                                    key={idx}
                                    className="group flex items-start gap-3 p-2.5 px-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent hover:border-border dark:hover:border-white/10 transition-all duration-300"
                                    style={reveal(200 + (idx * 50))}
                                >
                                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                                        <CheckCircle2 size={12} className="text-secondary group-hover:text-white transition-colors" strokeWidth={3} />
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-snug group-hover:text-primary dark:group-hover:text-white transition-colors">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons Row */}
                        <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border/50 dark:border-white/10 mt-8" style={reveal(450)}>
                            <Link
                                to="/about"
                                className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest gap-3 group shadow-[0_8px_25px_-8px_rgba(234,88,12,0.6)] motion-safe:transition-all motion-safe:duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_-8px_rgba(234,88,12,0.8)]"
                            >
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full motion-safe:transition-transform motion-safe:duration-[1.5s] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                                <span className="relative z-10">More About Us</span>
                                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>

                            <button className="flex items-center gap-4 text-primary dark:text-white font-bold text-sm uppercase tracking-wider hover:text-secondary transition-all duration-300 group">
                                <span className="relative w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 text-secondary flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-secondary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] motion-safe:transition-all motion-safe:duration-500">
                                    <span className="absolute inset-0 rounded-full border-2 border-secondary/30 motion-safe:animate-ping opacity-0 group-hover:opacity-100" />
                                    <Play size={16} fill="currentColor" className="relative ml-0.5" />
                                </span>
                                <span className="relative overflow-hidden">
                                    Watch Our Story
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes breathe {
                    0%, 100% { transform: scale(1); opacity: 0.4; }
                    50% { transform: scale(1.2); opacity: 0.7; }
                }
            `}</style>
        </section>
    );
};

export default FeatureSplitSection;