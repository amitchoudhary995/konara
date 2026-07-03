import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
    ArrowRight,
    Sparkles,
    Building2,
    Home,
    ShieldCheck,
    AppWindow,
    X,
    Award,
    Zap,
    Scale,
    Timer,
    CheckCircle2,
} from 'lucide-react';

const CATEGORIES = {
    facade: { label: 'Facade', icon: Building2 },
    roof: { label: 'Roof', icon: Home },
    window: { label: 'Window', icon: AppWindow },
    balustrade: { label: 'Balustrade', icon: ShieldCheck },
};

const applications = [
    {
        id: 'curtain-wall',
        title: 'Solar Curtain Wall',
        desc: 'Transform building exteriors into massive power generators without altering architectural aesthetics.',
        image: 'https://plus.unsplash.com/premium_photo-1663091707200-7e00b70052b6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'facade',
        yield: 92,
        specs: {
            output: '185 W/m²',
            transmittance: 'Opaque (0%)',
            durability: 'High-Impact Safety Glass',
            warranty: '25 Years Power Output',
            compliance: 'IEC 61215, ISO 9001',
        }
    },
    {
        id: 'skylights',
        title: 'Photovoltaic Skylights',
        desc: 'Filter harsh natural light while capturing overhead solar energy to power interior spaces.',
        image: 'https://plus.unsplash.com/premium_photo-1663040280358-a7dd48ebd191?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'roof',
        yield: 78,
        specs: {
            output: '120 W/m²',
            transmittance: 'Semi-Transparent (30%)',
            durability: 'Double Glazed Tempered',
            warranty: '20 Years Product Warranty',
            compliance: 'EN 12600 Safety Standard',
        }
    },
    {
        id: 'glass-facades',
        title: 'Solar Glass Facades',
        desc: 'Seamlessly replace traditional cladding with energy-producing, structural architectural glass.',
        image: 'https://plus.unsplash.com/premium_photo-1682148214992-728f78067d60?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'facade',
        yield: 85,
        specs: {
            output: '170 W/m²',
            transmittance: 'Low-E Transparent (15%)',
            durability: 'Heat-Strengthened Laminated',
            warranty: '25 Years Performance',
            compliance: 'ASTM E2190 Insulating Glass',
        }
    },
    {
        id: 'balustrades',
        title: 'BIPV Balustrades',
        desc: 'Turn balconies and structural terraces into active energy contributors with safety-rated glass.',
        image: 'https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'balustrade',
        yield: 65,
        specs: {
            output: '110 W/m²',
            transmittance: 'Color tinted (10%)',
            durability: 'Safety Laminated Railing Grade',
            warranty: '15 Years Product Warranty',
            compliance: 'EN 12600 Impact Rating',
        }
    },
    {
        id: 'roofs',
        title: 'Integrated Roofs',
        desc: 'Replace standard tiles with sleek, weatherproof solar glass shingles that power the structure.',
        image: 'https://plus.unsplash.com/premium_photo-1664299621284-6aaffe67a20c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'roof',
        yield: 95,
        specs: {
            output: '210 W/m²',
            transmittance: 'Opaque Textured',
            durability: 'Class 4 Hail Impact Rated',
            warranty: '30 Years Linear Output',
            compliance: 'UL 1703 Fire Certified',
        }
    },
    {
        id: 'windows',
        title: 'Photovoltaic Windows',
        desc: 'Maintain clear outdoor views and optimal thermal insulation while passively generating electricity.',
        image: 'https://plus.unsplash.com/premium_photo-1678743133482-2285d3f7bc0f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'window',
        yield: 70,
        specs: {
            output: '95 W/m²',
            transmittance: 'Clear Vision (45%)',
            durability: 'Sound Insulation Low-E Double Panel',
            warranty: '20 Years Structural Integrity',
            compliance: 'ASHRAE 90.1 Compliant',
        }
    },
];

const topYield = Math.max(...applications.map((a) => a.yield));

function YieldBadge({ value }) {
    return (
        <div className="flex items-center gap-1 bg-secondary/10 dark:bg-secondary/20 text-secondary px-2.5 py-1 rounded-full text-xs font-bold border border-secondary/20 shadow-sm">
            <Zap size={13} className="fill-secondary" />
            <span className="tabular-nums">{value}%</span>
            <span className="text-[10px] text-muted-foreground font-semibold">Yield</span>
        </div>
    );
}

const ImageGridSection = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedId, setSelectedId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [renderDrawer, setRenderDrawer] = useState(false);
    const [visible, setVisible] = useState(false);
    
    const sectionRef = useRef(null);
    const drawerRef = useRef(null);

    const filtered = useMemo(
        () =>
            activeFilter === 'all'
                ? applications
                : applications.filter((a) => a.category === activeFilter),
        [activeFilter]
    );

    const selected = useMemo(
        () => applications.find((a) => a.id === selectedId) || null,
        [selectedId]
    );

    // Staggered intersection reveal
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

    // Drawer entry/exit animation sequence
    useEffect(() => {
        if (selectedId) {
            setRenderDrawer(true);
            // Small tick to ensure element is in DOM before starting animation
            const timer = setTimeout(() => setIsOpen(true), 20);
            return () => clearTimeout(timer);
        } else {
            setIsOpen(false);
            const timer = setTimeout(() => setRenderDrawer(false), 400); // Match cubic-bezier slide duration
            return () => clearTimeout(timer);
        }
    }, [selectedId]);

    useEffect(() => {
        if (!selected) return;
        const onKey = (e) => {
            if (e.key === 'Escape') setSelectedId(null);
        };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [selected]);

    // Helper for cards staggered entry transition
    const cardReveal = (index) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transitionProperty: 'opacity, transform',
        transitionDuration: '800ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: visible ? `${index * 80}ms` : '0ms',
    });

    return (
        <section ref={sectionRef} className="py-12 sm:py-16 bg-background relative overflow-hidden transition-colors duration-500 border-y border-border">
            {/* Ambient Background Lights */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 dark:bg-secondary/15 rounded-full blur-[150px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 mb-3 shadow-sm backdrop-blur-md">
                            <Sparkles size={12} className="text-secondary motion-safe:animate-pulse" />
                            <span className="text-secondary font-bold tracking-widest uppercase text-xs">
                                Application Portfolio
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary dark:text-white leading-[1.15] tracking-tight">
                            Glass That Generates <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500">Electricity</span>
                        </h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-md lg:pb-1 font-medium">
                        Every surface below integrates state-of-the-art BIPV technology. Filter by build category, then click to slide-over full specifications.
                    </p>
                </div>

                {/* Segmented Tab Filter Bar (Premium stripe-style sliding control) */}
                <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 backdrop-blur-md mb-6 w-full sm:w-auto relative">
                    <button
                        type="button"
                        onClick={() => setActiveFilter('all')}
                        className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeFilter === 'all'
                            ? 'bg-white dark:bg-slate-900 text-primary dark:text-white shadow-md border border-[#e2e8f0] dark:border-white/10'
                            : 'text-slate-600 dark:text-slate-300 hover:text-secondary'
                            }`}
                    >
                        All Applications
                    </button>
                    {Object.entries(CATEGORIES).map(([key, cat]) => {
                        const Icon = cat.icon;
                        const isActive = activeFilter === key;
                        return (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setActiveFilter(key)}
                                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${isActive
                                    ? 'bg-white dark:bg-slate-900 text-primary dark:text-white shadow-md border border-[#e2e8f0] dark:border-white/10'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-secondary'
                                    }`}
                            >
                                <Icon size={13} className={isActive ? 'text-secondary' : 'text-slate-400 dark:text-slate-500'} />
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* Grid - Cards layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((app, index) => {
                        const Icon = CATEGORIES[app.category].icon;
                        const isTop = app.yield === topYield;
                        return (
                            <div
                                key={app.id}
                                style={cardReveal(index)}
                                className="group flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-slate-900/60 border border-[#e2e8f0] dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:border-secondary/40 transition-all duration-500 hover:-translate-y-2 flex-1"
                            >
                                {/* Image Box */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-105"
                                    />
                                    {/* Category tag */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border border-white/20 dark:border-white/10 text-[10px] font-bold uppercase tracking-wider text-primary dark:text-white shadow-md">
                                            <Icon size={11} className="text-secondary" />
                                            {CATEGORIES[app.category].label}
                                        </span>
                                    </div>
                                    
                                    {isTop && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-white text-[10px] font-black uppercase tracking-wider shadow-md shadow-secondary/35">
                                                <Award size={11} />
                                                Top Rated
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Box */}
                                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white dark:bg-slate-900/40">
                                    <div>
                                        <div className="flex justify-between items-start gap-4 mb-3">
                                            <h3 className="text-xl sm:text-2xl font-black text-primary dark:text-white tracking-tight leading-snug group-hover:text-secondary transition-colors duration-300">
                                                {app.title}
                                            </h3>
                                            <YieldBadge value={app.yield} />
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                            {app.desc}
                                        </p>
                                    </div>

                                    {/* Footer Specs highlight */}
                                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-white/5">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold mb-0.5">Peak Output</span>
                                            <span className="text-sm font-black text-primary dark:text-white leading-none">
                                                {app.specs.output}
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedId(app.id)}
                                            className="inline-flex items-center gap-1.5 text-secondary text-sm font-bold transition-all duration-300 hover:gap-2.5"
                                        >
                                            Specs Sheet
                                            <ArrowRight size={15} className="mt-0.5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filtered.length === 0 && (
                    <p className="text-center text-slate-500 py-20 text-lg font-medium">
                        No applications in this category yet.
                    </p>
                )}
            </div>

            {/* Slide-over Drawer (Premium Drawer with smooth exit slide-out animations) */}
            {renderDrawer && selected && (
                <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
                    {/* Backdrop */}
                    <div 
                        className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                        onClick={() => setSelectedId(null)}
                    />
                    
                    <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
                        {/* Drawer content */}
                        <div
                            className={`w-screen max-w-md sm:max-w-lg bg-white dark:bg-[#070e17] shadow-2xl border-l border-slate-200 dark:border-white/10 flex flex-col justify-between relative transform transition-transform duration-300 ease-out z-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                        >
                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white flex items-center justify-center border border-white/20 hover:scale-105 transition-all duration-300 z-20"
                            >
                                <X size={18} />
                            </button>

                            {/* Header image cover */}
                            <div className="relative h-60 sm:h-72 overflow-hidden shrink-0 bg-slate-900">
                                <img
                                    src={selected.image}
                                    alt={selected.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#070e17] via-slate-950/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-white text-[10px] font-bold uppercase tracking-wider shadow-md mb-2.5">
                                        {React.createElement(CATEGORIES[selected.category].icon, { size: 12, className: "text-white" })}
                                        {CATEGORIES[selected.category].label}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight drop-shadow-sm leading-tight">
                                        {selected.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Specifications body list */}
                            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-6">
                                <div className="space-y-2">
                                    <h4 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">Product Description</h4>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                                        {selected.desc}
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">BIPV Tech Specifications</h4>
                                    
                                    <div className="grid grid-cols-1 gap-2.5">
                                        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                            <div className="flex items-center gap-3">
                                                <Zap className="text-secondary shrink-0" size={18} />
                                                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Yield Performance</span>
                                            </div>
                                            <span className="text-sm font-black text-primary dark:text-white">{selected.yield}% Rated</span>
                                        </div>

                                        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                            <div className="flex items-center gap-3">
                                                <Scale className="text-secondary shrink-0" size={18} />
                                                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Peak Energy Output</span>
                                            </div>
                                            <span className="text-sm font-black text-primary dark:text-white">{selected.specs.output}</span>
                                        </div>

                                        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                            <div className="flex items-center gap-3">
                                                <AppWindow className="text-secondary shrink-0" size={18} />
                                                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Light Transmittance</span>
                                            </div>
                                            <span className="text-sm font-black text-primary dark:text-white">{selected.specs.transmittance}</span>
                                        </div>

                                        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                            <div className="flex items-center gap-3">
                                                <ShieldCheck className="text-secondary shrink-0" size={18} />
                                                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Durability Standard</span>
                                            </div>
                                            <span className="text-sm font-black text-primary dark:text-white text-right max-w-[200px] leading-tight">{selected.specs.durability}</span>
                                        </div>

                                        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                            <div className="flex items-center gap-3">
                                                <Timer className="text-secondary shrink-0" size={18} />
                                                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Product Warranty</span>
                                            </div>
                                            <span className="text-sm font-black text-primary dark:text-white">{selected.specs.warranty}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action footer */}
                            <div className="p-5 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-900/30 flex items-center justify-between gap-4 shrink-0">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-secondary shrink-0" size={18} />
                                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{selected.specs.compliance}</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSelectedId(null)}
                                    className="bg-primary hover:bg-primary/95 text-white dark:bg-secondary dark:hover:bg-secondary/95 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-md transition-all duration-300"
                                >
                                    Dismiss Specs
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ImageGridSection;