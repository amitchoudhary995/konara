import React, { useEffect, useRef, useState } from 'react';
import { Sun, Building2, Home, Heart, Award } from 'lucide-react';

const stats = [
    { icon: Sun, target: 14, suffix: 'K+', label: 'Installations' },
    { icon: Building2, target: 16, suffix: 'K+', label: 'Commercial Projects' },
    { icon: Home, target: 345, suffix: '+', label: 'Residential Projects' },
    { icon: Heart, target: 100, suffix: '+', label: 'Happy Customers' },
    { icon: Award, target: 15, suffix: '+', label: 'Industry Experience' },
];

// Counts a single stat up from 0 to its target once the section is visible.
// Falls back to the final value instantly if the user prefers reduced motion.
function useCountUp(target, active, delayMs) {
    const [value, setValue] = useState(0);
    const [justLanded, setJustLanded] = useState(false);

    useEffect(() => {
        if (!active) return;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            setValue(target);
            return;
        }

        let raf;
        const duration = 1400;
        const start = performance.now() + delayMs;

        const tick = (now) => {
            const elapsed = now - start;
            if (elapsed < 0) {
                raf = requestAnimationFrame(tick);
                return;
            }
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
            setValue(Math.round(eased * target));
            if (progress < 1) {
                raf = requestAnimationFrame(tick);
            } else {
                setJustLanded(true);
                setTimeout(() => setJustLanded(false), 600);
            }
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [active, target, delayMs]);

    return { value, justLanded };
}

function StatCard({ stat, index, active, isLast }) {
    const { icon: Icon, target, suffix, label } = stat;
    const { value, justLanded } = useCountUp(target, active, index * 120);

    return (
        <div
            className={`flex flex-col items-center justify-center p-6 rounded-2xl motion-safe:transition-all motion-safe:duration-500 hover:-translate-y-2 hover:bg-secondary/5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] group relative ${!isLast ? 'lg:after:content-[""] lg:after:absolute lg:after:right-[-12px] lg:after:top-1/4 lg:after:h-1/2 lg:after:w-[1px] lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:via-border/60 lg:after:to-transparent' : ''
                }`}
            style={{
                transitionDelay: active ? `${index * 90}ms` : '0ms',
                opacity: active ? 1 : 0,
                transform: active ? 'translateY(0)' : 'translateY(20px)',
            }}
        >
            <div className="relative mb-5">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 shadow-sm border border-secondary/20 flex items-center justify-center text-secondary motion-safe:transition-all motion-safe:duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white group-hover:shadow-secondary/30 group-hover:shadow-lg group-hover:rotate-3">
                    <Icon size={22} strokeWidth={2.25} />
                </div>
                {justLanded && (
                    <span className="absolute inset-0 rounded-2xl border-2 border-secondary motion-safe:animate-ping pointer-events-none opacity-50" />
                )}
            </div>

            <h3 className="text-4xl sm:text-5xl font-black text-primary dark:text-white mb-2 font-display tracking-tight tabular-nums group-hover:text-secondary transition-colors duration-300 bg-clip-text">
                {value}
                <span className="text-secondary">{suffix}</span>
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground dark:text-slate-400 uppercase tracking-[0.15em] text-center mt-1 group-hover:text-primary dark:group-hover:text-white transition-colors duration-300">
                {label}
            </p>
        </div>
    );
}

const MetricsSection = () => {
    const sectionRef = useRef(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActive(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-12 sm:py-16 bg-background relative overflow-hidden border-t border-border transition-colors duration-500">
            {/* Solar Logo Watermark (Restored to use branding logo.png) */}
            <div className="absolute top-1/2 left-1/2 pointer-events-none select-none z-0 transform-gpu motion-safe:animate-[breathe_16s_ease-in-out_infinite]">
                <img 
                    src="/logo.png" 
                    alt="Konara Logo Watermark" 
                    className="w-[450px] sm:w-[650px] opacity-[0.05] dark:opacity-[0.08]" 
                />
            </div>

            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0" />
            
            {/* Topographical contour background pattern for premium clean energy feel */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none dark:opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 100 C 20 80, 40 80, 60 100 M0 80 C 30 50, 70 60, 100 80 M0 60 C 20 40, 40 20, 100 60 M0 40 C 40 10, 60 10, 100 40 M0 20 C 30 5, 70 5, 100 20' stroke='%23000' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")` }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-5xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-3 justify-center mb-4 px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <p className="text-secondary font-bold tracking-[0.15em] uppercase text-xs font-nav">
                            Why Choose Us
                        </p>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary dark:text-white leading-[1.15] tracking-tight">
                        Smart Energy Solutions, High‑Quality
                        <span className="hidden md:inline-flex items-center align-middle mx-3 w-20 lg:w-28 h-10 lg:h-14 rounded-full overflow-hidden border-2 border-background shadow-xl ring-2 ring-border/50 motion-safe:transition-transform motion-safe:duration-500 hover:scale-110 hover:rotate-2 hover:ring-secondary/50">
                            <img
                                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=200&auto=format&fit=crop"
                                alt="Sky Cloud"
                                className="w-full h-full object-cover"
                            />
                        </span>
                        Solar Goods, And Skilled Service—Helping You
                        <span className="hidden md:inline-flex items-center align-middle mx-3 w-20 lg:w-28 h-10 lg:h-14 rounded-full overflow-hidden border-2 border-background shadow-xl ring-2 ring-border/50 motion-safe:transition-transform motion-safe:duration-500 hover:scale-110 hover:-rotate-2 hover:ring-secondary/50">
                            <img
                                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=200&auto=format&fit=crop"
                                alt="Solar Installer"
                                className="w-full h-full object-cover"
                            />
                        </span>
                        Create A Sustainable Future
                    </h2>
                </div>

                {/* Stats Row — Frosted Glass Container dashboard card */}
                <div className="bg-background/40 dark:bg-slate-900/10 backdrop-blur-xl rounded-[2rem] border border-border/60 dark:border-white/10 p-3 sm:p-6 grid grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-4 sm:gap-x-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
                    {/* Subtle inner highlight */}
                    <div className="absolute inset-0 rounded-[2rem] border border-white/20 dark:border-white/5 pointer-events-none" />
                    
                    {stats.map((item, idx) => (
                        <StatCard
                            key={item.label}
                            stat={item}
                            index={idx}
                            active={active}
                            isLast={idx === stats.length - 1}
                        />
                    ))}
                </div>

            </div>

            <style>{`
                @keyframes breathe {
                    0%, 100% { transform: translate(-50%, -50%) scale(1.04); }
                    50% { transform: translate(-50%, -50%) scale(1.10); }
                }
            `}</style>
        </section>
    );
};

export default MetricsSection;