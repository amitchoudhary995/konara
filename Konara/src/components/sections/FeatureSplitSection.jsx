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

    return (
        <section ref={sectionRef} className="py-12 sm:py-16 relative overflow-hidden bg-background border-t border-border/50">

            {/* Ambient glows */}
            <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 motion-safe:animate-[breathe_9s_ease-in-out_infinite]" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/5 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3 motion-safe:animate-[breathe_11s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Column - Overlapping Images & 3D Stamp */}
                    <div className="lg:col-span-6 relative">
                        <div className="grid grid-cols-2 gap-4 sm:gap-6 items-start relative z-10">

                            {/* Left-side column */}
                            <div className="space-y-4 sm:space-y-6">
                                {/* Top-left image */}
                                <div
                                    className="rounded-[2rem] overflow-hidden aspect-[3/4] border border-slate-200 dark:border-white/10 shadow-lg relative group bg-muted transform-gpu transition-all duration-700 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2 cursor-pointer"
                                    style={reveal(0)}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110"
                                        style={{ backgroundImage: `url('/images/specialized-bipv-solar-consultation-1.jpg')` }}
                                    />
                                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-500 mix-blend-overlay" />
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                                </div>

                                {/* Bottom-left Experience Card */}
                                <div
                                    className="rounded-[2rem] p-5 sm:p-6 text-white flex flex-col justify-center aspect-[4/3] shadow-lg relative overflow-hidden group bg-cover bg-center border border-slate-200 dark:border-white/10 transform-gpu transition-all duration-700 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2 cursor-pointer"
                                    style={{ backgroundImage: "url('/images/custom-design-solar-panels-1.jpg')" }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#050B14]/95 via-[#050B14]/75 to-secondary/60 backdrop-blur-[2px] transition-all duration-700 group-hover:to-secondary/80 group-hover:backdrop-blur-sm" />
                                    
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/40 rounded-full blur-[30px] pointer-events-none group-hover:scale-150 transition-transform duration-1000 ease-out" />

                                    <div className="relative z-10 text-center">
                                        <span className="text-4xl sm:text-5xl lg:text-6xl font-black block mb-1 tracking-tight drop-shadow-md text-white group-hover:scale-105 transition-transform duration-500">
                                            {years}+
                                        </span>
                                        <span className="text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-widest block mx-auto leading-relaxed max-w-[120px]">
                                            Years Of Solar Experience
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right-side column */}
                            <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12 relative">
                                {/* Right vertical image */}
                                <div
                                    className="rounded-[2rem] overflow-hidden h-[300px] sm:h-[400px] border border-slate-200 dark:border-white/10 shadow-lg relative group bg-muted transform-gpu transition-all duration-700 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2 cursor-pointer"
                                    style={reveal(300)}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110"
                                        style={{ backgroundImage: "url('/images/specialized-bipv-solar-consultation-2.jpg')" }}
                                    />
                                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-500 mix-blend-overlay" />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - SEO Semantic Content */}
                    <article className="lg:col-span-6 space-y-6 lg:pl-4">
                        <header style={reveal(100)}>
                            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 mb-4 shadow-sm backdrop-blur-md">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary motion-safe:animate-pulse" />
                                <span className="text-[11px] font-bold text-secondary uppercase tracking-widest drop-shadow-sm">
                                    Core Focus
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary dark:text-white leading-[1.15] tracking-tight mb-5">
                                Solar Integration For <span className="text-secondary drop-shadow-sm">Aesthetics</span> & <span className="text-secondary drop-shadow-sm">Sustainability</span>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-6">
                                <strong>Konara</strong> offers complete end-to-end <strong>EPC solutions</strong> for <strong>Building-Integrated Photovoltaics (BIPV)</strong> projects. BIPV technologies allow you to seamlessly embed <strong>solar cells</strong> directly into building materials. These advanced solar facades enhance architectural aesthetics while maximizing <strong>solar energy capacity</strong> for long-term <strong>energy savings</strong> and environmental benefits.
                            </p>
                        </header>

                        {/* Premium Feature Grid - Compact & Graphic */}
                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
                            {[
                                "Utilizes untapped solar potential",
                                "Implementable BIPV material solutions",
                                "Perfect for new green constructions",
                                "Customizable aesthetic solar facades",
                                "Boost revenues & energy efficiency"
                            ].map((feature, idx) => (
                                <div 
                                    key={idx}
                                    className="group flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm border border-slate-100 dark:border-white/5 hover:border-secondary/30 dark:hover:border-secondary/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-default"
                                    style={reveal(200 + (idx * 50))}
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] transition-all duration-300">
                                        <CheckCircle2 size={16} className="text-secondary group-hover:text-white transition-colors" strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bold leading-tight group-hover:text-primary dark:group-hover:text-white transition-colors">
                                        {feature}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons Row */}
                        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/50 dark:border-white/10 mt-6" style={reveal(450)}>
                            <Link
                                to="/about"
                                className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-secondary hover:bg-secondary/90 text-white px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest gap-2 group shadow-[0_8px_20px_-8px_rgba(234,88,12,0.6)] motion-safe:transition-all motion-safe:duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_-8px_rgba(234,88,12,0.8)]"
                            >
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full motion-safe:transition-transform motion-safe:duration-[1.5s] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                                <span className="relative z-10">More About Us</span>
                                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>

                            <button className="flex items-center gap-3 text-slate-800 dark:text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:text-secondary transition-all duration-300 group">
                                <span className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-100 dark:bg-white/5 text-secondary flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-secondary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] motion-safe:transition-all motion-safe:duration-500">
                                    <span className="absolute inset-0 rounded-full border-2 border-secondary/30 motion-safe:animate-ping opacity-0 group-hover:opacity-100" />
                                    <Play size={14} fill="currentColor" className="relative ml-0.5" />
                                </span>
                                <span className="relative overflow-hidden">
                                    Watch Our Story
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                                </span>
                            </button>
                        </div>
                    </article>

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