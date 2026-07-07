import React, { useEffect, useRef, useState } from 'react';
import { Sun, Building2, Home, Heart, Award } from 'lucide-react';

const stats = [
    { target: 14, suffix: 'K+', label: 'Installations', theme: 'secondary', height: '60%' },
    { target: 16, suffix: 'K+', label: 'Commercial Projects', theme: 'accent', height: '85%' },
    { target: 345, suffix: '+', label: 'Residential Projects', theme: 'tertiary', height: '45%' },
    { target: 100, suffix: '+', label: 'Happy Customers', theme: 'quaternary', height: '95%' },
    { target: 15, suffix: '+', label: 'Industry Experience', theme: 'secondary', height: '50%' },
];

const colorClasses = {
    secondary: { bg: 'bg-secondary', text: 'text-secondary' },
    accent: { bg: 'bg-accent', text: 'text-accent' },
    tertiary: { bg: 'bg-tertiary', text: 'text-tertiary' },
    quaternary: { bg: 'bg-quaternary', text: 'text-quaternary' },
};

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
            const eased = 1 - Math.pow(1 - progress, 3);
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

function StatBar({ stat, index, active }) {
    const { target, suffix, label, theme, height } = stat;
    const { value } = useCountUp(target, active, index * 120);
    const cls = colorClasses[theme];

    return (
        <div className="flex flex-col items-center justify-end h-full w-full relative group">
            
            {/* The Bar */}
            <div 
                className={`w-full max-w-[60px] sm:max-w-[100px] lg:max-w-[140px] rounded-t-sm shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-out ${cls.bg}`}
                style={{
                    height: active ? height : '0%',
                    opacity: active ? 0.95 : 0,
                    transitionDelay: `${index * 100}ms`
                }}
            />
            
            {/* Number and Label (Fixed height so all bars perfectly align at the bottom) */}
            <div 
                className={`h-[70px] sm:h-[80px] pt-3 sm:pt-4 text-center transition-all duration-700 opacity-0 ${active ? 'opacity-100' : ''} shrink-0 w-full`}
                style={{ transitionDelay: `${index * 150 + 500}ms` }}
            >
                <div className="text-base sm:text-xl md:text-3xl font-black text-slate-900 dark:text-white whitespace-nowrap tracking-tight">
                    {value}<span className={cls.text}>{suffix}</span>
                </div>
                <div className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1 sm:mt-2 max-w-[80px] sm:max-w-[100px] leading-snug mx-auto">
                    {label}
                </div>
            </div>

            {/* Subtle glow on hover */}
            <div className={`absolute inset-x-0 bottom-[70px] sm:bottom-[80px] top-auto transition-opacity duration-300 opacity-0 group-hover:opacity-30 blur-[15px] sm:blur-[20px] ${cls.bg} pointer-events-none`} style={{ height: height }} />
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
            { threshold: 0.25 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-12 sm:py-16 bg-background relative overflow-hidden border-t border-border transition-colors duration-500">
            {/* Solar Logo Watermark */}
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

                {/* Original Header Section Restored */}
                <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-3 justify-center mb-4 px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <p className="text-secondary font-bold tracking-[0.15em] uppercase text-xs font-nav">
                            Why Choose Us
                        </p>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary dark:text-white leading-[1.15] tracking-tight mb-5">
                        Redefining <span className="text-secondary drop-shadow-sm">Solar Energy</span> Integration
                    </h2>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed sm:leading-relaxed lg:leading-snug tracking-tight max-w-6xl mx-auto">
                        Konara delivers end-to-end solar solutions for buildings —
                        <span className="hidden md:inline-flex items-center align-middle mx-4 w-24 lg:w-32 h-12 lg:h-16 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg motion-safe:transition-all motion-safe:duration-500 hover:scale-110 hover:rotate-3 hover:shadow-secondary/40">
                            <img
                                src="/images/smart-integration-solar-panels-1.jpg"
                                alt="Sky Cloud"
                                className="w-full h-full object-cover"
                            />
                        </span>
                        combining advanced technology, transparent solar systems, and expert engineering<span className="hidden md:inline-flex items-center align-middle mx-4 w-24 lg:w-32 h-12 lg:h-16 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg motion-safe:transition-all motion-safe:duration-500 hover:scale-110 hover:-rotate-3 hover:shadow-secondary/40">
                            <img
                                src="/images/builder-friendly-solar-panels.jpg"
                                alt="Solar Installer"
                                className="w-full h-full object-cover"
                            />
                        </span>
                        to maximize reliability, efficiency, and long-term performance.
                    </h2>
                </div>

                {/* Graph Dashboard Container (Responsive, Light & Dark Mode) */}
                <div className="bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-2xl relative overflow-hidden flex flex-col mx-auto w-full transition-colors duration-500">
                    
                    {/* Right Content (Abstract Building Graphic Overlay) */}
                    <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-10 dark:opacity-50 pointer-events-none mix-blend-multiply dark:mix-blend-screen z-0">
                        <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: 'url(/images/custom-design-solar-panels.jpg)' }}
                        />
                        <div 
                            className="absolute inset-0 opacity-40 dark:opacity-80"
                            style={{ 
                                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.8) 40px, rgba(0,0,0,0.8) 80px)`
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 dark:from-[#111111] dark:via-[#111111]/60 to-transparent transition-colors duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent dark:from-[#111111] dark:via-transparent to-transparent transition-colors duration-500" />
                    </div>

                    <div className="relative z-20 flex flex-col justify-end w-full pt-12 sm:pt-16 px-4 sm:px-8 md:px-12 pb-8 sm:pb-12 min-h-[350px] sm:min-h-[450px]">
                        <div className="flex items-end justify-between gap-2 sm:gap-4 md:gap-8 h-[250px] sm:h-[350px] w-full">
                            
                            {/* The Bars */}
                            {stats.map((item, idx) => (
                                <StatBar
                                    key={item.label}
                                    stat={item}
                                    index={idx}
                                    active={active}
                                />
                            ))}
                        </div>
                    </div>
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