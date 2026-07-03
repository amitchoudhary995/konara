import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import {
    Sun,
    LayoutGrid,
    Building,
    Zap,
    Leaf,
    FileText,
    ChevronLeft,
    ChevronRight,
    Shield,
    BarChart,
    Sparkles,
} from 'lucide-react';

const features = [
    { icon: Sun, title: 'Peak Efficiency', desc: 'Industry leading power output per square meter.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80' },
    { icon: LayoutGrid, title: 'True Modularity', desc: 'Custom sizing available for complex facade geometries.', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80' },
    { icon: Building, title: 'Flawless Aesthetics', desc: 'Seamless integration without visible busbars or grids.', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&auto=format&fit=crop&q=80' },
    { icon: Zap, title: 'Smart Energy', desc: 'Advanced micro-inverter compatibility for maximum yield.', image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&auto=format&fit=crop&q=80' },
    { icon: Leaf, title: 'Extreme Durability', desc: 'Built to outlast traditional building materials effortlessly.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&auto=format&fit=crop&q=80' },
    { icon: FileText, title: 'Global Compliance', desc: 'Meets rigorous global building and safety codes.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80' },
    { icon: Shield, title: 'Weatherproof Core', desc: 'Engineered to withstand extreme wind and hail conditions.', image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&auto=format&fit=crop&q=80' },
    { icon: BarChart, title: 'Live Analytics', desc: 'Real-time performance monitoring via integrated sensors.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80' },
];

const DOT_COUNT = 5;

const FeatureCarouselSection = () => {
    const scrollContainerRef = useRef(null);
    const sectionRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const [activeDot, setActiveDot] = useState(0);
    const [visible, setVisible] = useState(false);

    const updateScrollState = useCallback(() => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        const progress = max > 0 ? el.scrollLeft / max : 0;
        setAtStart(el.scrollLeft <= 4);
        setAtEnd(el.scrollLeft >= max - 4);
        setActiveDot(Math.round(progress * (DOT_COUNT - 1)));
    }, []);

    // Intersection observer for section entrance reveals
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
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (!el) return;
        updateScrollState();
        el.addEventListener('scroll', updateScrollState, { passive: true });
        window.addEventListener('resize', updateScrollState);
        return () => {
            el.removeEventListener('scroll', updateScrollState);
            window.removeEventListener('resize', updateScrollState);
        };
    }, [updateScrollState]);

    const scroll = (direction) => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const card = el.querySelector('[data-card]');
        const step = card ? card.offsetWidth + 24 : el.offsetWidth;
        el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
    };

    const goToDot = (i) => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        el.scrollTo({ left: (i / (DOT_COUNT - 1)) * max, behavior: 'smooth' });
    };

    // Viewport slide reveal helper
    const reveal = (delay = 0) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transitionProperty: 'opacity, transform',
        transitionDuration: '1000ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: visible ? `${delay}ms` : '0ms',
    });

    return (
        <section ref={sectionRef} className="py-10 sm:py-12 bg-background relative overflow-hidden border-b border-border transition-colors duration-500">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* Centered Header Sequence matching Advantage and Metrics Section */}
                <div className="text-center max-w-3xl mx-auto mb-8 flex flex-col items-center" style={reveal(0)}>
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 mb-3 shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs">
                            Technology Features
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary dark:text-white leading-[1.15] tracking-tight mb-3">
                        Active Building <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500 drop-shadow-sm">
                            Photovoltaics.
                        </span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-5">
                        Transform standard building envelopes into self-sustaining power stations. Our active systems combine high power yield with custom design.
                    </p>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            disabled={atStart}
                            className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-[#e2e8f0] dark:border-white/10 flex items-center justify-center text-primary dark:text-white transition-all duration-300 shadow-sm enabled:hover:bg-secondary enabled:hover:text-white enabled:hover:border-secondary enabled:hover:shadow-[0_8px_20px_rgba(249,115,22,0.25)] disabled:opacity-40 disabled:cursor-not-allowed"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={atEnd}
                            className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-[#e2e8f0] dark:border-white/10 flex items-center justify-center text-primary dark:text-white transition-all duration-300 shadow-sm enabled:hover:bg-secondary enabled:hover:text-white enabled:hover:border-secondary enabled:hover:shadow-[0_8px_20px_rgba(249,115,22,0.25)] disabled:opacity-40 disabled:cursor-not-allowed"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Floating Carousel Cards */}
                <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0" style={reveal(200)}>
                    <div
                        ref={scrollContainerRef}
                        role="group"
                        aria-label="Feature highlights"
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-6 pb-6 pt-2"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                    >
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                data-card
                                className="group relative bg-slate-50/50 dark:bg-slate-900/60 border border-[#e2e8f0] dark:border-white/10 hover:border-secondary/60 dark:hover:border-blue-500/60 rounded-3xl p-6 sm:p-7 text-center shadow-lg hover:shadow-[0_20px_40px_rgba(249,115,22,0.18)] dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.22)] transition-all duration-500 cursor-default min-w-[85vw] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] xl:min-w-[calc(25%-18px)] flex-shrink-0 snap-start overflow-hidden bg-white dark:bg-slate-900/40"
                            >
                                {/* Ambient Hover Glow: Orange radial in Light Mode, Blue radial in Dark Mode */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.25),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.35),transparent_70%)] transition-opacity duration-700 pointer-events-none" />

                                <div className="relative inline-block mb-4 mt-1">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-secondary/20 p-1 mx-auto bg-white dark:bg-slate-950 transition-all duration-700 group-hover:scale-[1.22] group-hover:border-secondary dark:group-hover:border-blue-500 shadow-inner overflow-hidden group-hover:shadow-[0_0_30px_rgba(249,115,22,0.55)] dark:group-hover:shadow-[0_0_30px_rgba(37,99,235,0.75)]">
                                        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-xl bg-white dark:bg-slate-950 border border-[#e2e8f0] dark:border-white/10 text-secondary dark:text-blue-400 flex items-center justify-center shadow-md transition-all duration-500 group-hover:bg-secondary dark:group-hover:bg-blue-500 group-hover:text-white group-hover:border-secondary dark:group-hover:border-blue-500 group-hover:scale-110 z-10 rotate-3 group-hover:rotate-0">
                                        <feature.icon size={15} strokeWidth={2.5} />
                                    </div>
                                </div>

                                <h4 className="text-base sm:text-lg font-black text-primary dark:text-white mb-1.5 group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {feature.title}
                                </h4>

                                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-[240px] mx-auto mb-4 relative z-10">
                                    {feature.desc}
                                </p>

                                {/* Animated charge dots */}
                                <div className="flex items-center justify-center gap-1.5 pb-1 relative z-10" aria-hidden="true">
                                    {Array.from({ length: 4 }).map((_, dotIdx) => (
                                        <span
                                            key={dotIdx}
                                            className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 transition-all duration-500 group-hover:bg-secondary dark:group-hover:bg-blue-500 group-hover:scale-125"
                                            style={{ transitionDelay: `${dotIdx * 100}ms` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center justify-center gap-2 mt-2" role="tablist" aria-label="Carousel position" style={reveal(300)}>
                    {Array.from({ length: DOT_COUNT }).map((_, i) => (
                        <button
                            key={i}
                            role="tab"
                            aria-selected={activeDot === i}
                            aria-label={`Go to position ${i + 1}`}
                            onClick={() => goToDot(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${activeDot === i ? 'w-8 bg-secondary' : 'w-1.5 bg-slate-200 dark:bg-slate-800 hover:bg-secondary/40'}`}
                        />
                    ))}
                </div>
            </div>

            <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
        </section>
    );
};

export default FeatureCarouselSection;