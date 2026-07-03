import { useEffect, useRef, useState } from 'react';
import { Layers, PenTool, Zap, Headset, ArrowUpRight, Sun } from 'lucide-react';

const advantages = [
    {
        title: 'Architectural Synergy',
        desc: "We don't just add panels; we replace conventional building materials with intelligent, power-generating surfaces that integrate flawlessly.",
        icon: Layers,
        bgImage: 'https://plus.unsplash.com/premium_photo-1682145621890-61a61ab83b4f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Unbound Aesthetics',
        desc: 'Unprecedented design freedom. Available in bespoke sizes, dynamic opacities, and a full spectrum of architectural colors.',
        icon: PenTool,
        bgImage: 'https://plus.unsplash.com/premium_photo-1664476579374-3332d1268cab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Peak Yield Technology',
        desc: 'Engineered with next-generation monocrystalline cells, delivering industry-leading energy density per square meter.',
        icon: Zap,
        bgImage: 'https://plus.unsplash.com/premium_photo-1663091598847-9d162258b63f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Turnkey Integration',
        desc: 'A seamless journey from visionary engineering and manufacturing to flawless installation and final grid connection.',
        icon: Headset,
        bgImage: 'https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

const AdvantageSection = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

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

    const reveal = (delay = 0) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transitionProperty: 'opacity, transform',
        transitionDuration: '800ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: visible ? `${delay}ms` : '0ms',
    });

    return (
        <section ref={sectionRef} className="py-12 sm:py-16 bg-background relative overflow-hidden transition-colors duration-500 border-b border-border">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/4 motion-safe:animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 translate-y-1/4" />

            {/* Mandated Company Logo Watermark in Background (Centering details handled smoothly by keyframes) */}
            <div className="absolute top-1/2 left-1/2 pointer-events-none select-none z-0 transform-gpu motion-safe:animate-[breathe_16s_ease-in-out_infinite]">
                <img 
                    src="/logo.png" 
                    alt="Konara Logo Watermark" 
                    className="w-[450px] opacity-[0.06] dark:opacity-[0.09]" 
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-8 md:mb-10 max-w-3xl mx-auto" style={reveal(0)}>
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 mb-4 shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs font-nav">
                            The Konara Edge
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary dark:text-white leading-[1.1] tracking-tight mb-4">
                        Beyond Traditional <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500">
                            Solar Solutions.
                        </span>
                    </h2>

                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                        We merge cutting-edge photovoltaic technology with premium architectural materials, delivering structures that are as breathtaking as they are sustainable.
                    </p>
                </div>

                {/* 4-Column Premium Grid (Structured Top-Image Approach) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {advantages.map((item, idx) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                style={reveal(100 + idx * 80)}
                                className="group flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(227,77,42,0.12)] dark:hover:shadow-[0_20px_45px_rgba(37,99,235,0.15)] hover:border-secondary/40 dark:hover:border-blue-500/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 focus-within:shadow-2xl focus-within:-translate-y-2 focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-4 flex-1"
                                tabIndex={0}
                            >
                                {/* Top Image aspect layout */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                                    <img
                                        src={item.bgImage}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-[5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                                    />
                                    {/* Icon Badge overlay */}
                                    <div className="absolute top-4 left-4 z-10">
                                        {/* Icon glowing aura */}
                                        <div className="absolute inset-0 rounded-2xl bg-secondary/30 dark:bg-blue-500/30 blur-md opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
                                        <div className="w-10 h-10 rounded-2xl bg-white/95 dark:bg-slate-950/95 border border-white/20 dark:border-white/10 text-secondary dark:text-blue-400 flex items-center justify-center shadow-md transition-all duration-500 group-hover:bg-secondary dark:group-hover:bg-blue-500 group-hover:text-white group-hover:border-secondary dark:group-hover:border-blue-500 group-hover:scale-110 group-hover:rotate-3 relative z-10">
                                            <Icon size={16} strokeWidth={2.5} />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-slate-900/90 to-transparent opacity-20" />
                                </div>

                                {/* Content Details Box */}
                                <div className="p-5 flex flex-col flex-1 justify-between bg-white dark:bg-slate-900/40 relative overflow-hidden">
                                    {/* Ambient hover gradient glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(227,77,42,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_60%)] transition-opacity duration-700 pointer-events-none" />
                                    
                                    <div className="relative z-10">
                                        <h4 className="font-black text-lg text-primary dark:text-white mb-2 tracking-tight group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors duration-300">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-white/5 relative z-10">
                                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Konara Advantage</span>
                                        <div className="w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-secondary dark:group-hover:bg-blue-500 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                            <ArrowUpRight size={12} className="transition-transform duration-500 group-hover:rotate-45" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
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

export default AdvantageSection;