import React, { useRef, useState, useEffect } from 'react';
import {
    Sun,
    Zap,
    PenTool,
    HardHat,
    Shield,
    Leaf,
    ChevronRight
} from 'lucide-react';

const differentiators = [
    {
        icon: Sun,
        title: 'Smart Integration',
        desc: 'Transparent solar windows and skylights that bring natural light while generating clean energy.',
        image: '/images/features/smart_integration.png'
    },
    {
        icon: Zap,
        title: 'Quick & Easy Installation',
        desc: 'Our BIPV systems are made for fast, smooth fitting in any home or building.',
        image: '/images/features/easy_installation.png'
    },
    {
        icon: PenTool,
        title: 'Custom Design Solutions',
        desc: 'Custom solar glass for façades, balconies, decks, and railings — built to suit your aesthetic needs.',
        image: '/images/features/custom_design.png'
    },
    {
        icon: HardHat,
        title: 'Builder-Friendly Technology',
        desc: 'Flexible BIPV modules suited for all project scales with professional technical support.',
        image: '/images/features/builder_friendly.png'
    },
    {
        icon: Shield,
        title: 'High Durability',
        desc: 'Long-lasting solar glass built to withstand weather, ensure safety, and deliver consistent performance.',
        image: '/images/features/high_durability.png'
    },
    {
        icon: Leaf,
        title: 'Sustainable & Stylish',
        desc: 'Energy-efficient solutions that enhance modern architecture without compromising design.',
        image: '/images/features/sustainable_stylish.png'
    }
];

const AboutUsSection = () => {
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
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const reveal = (delay = 0) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transitionProperty: 'opacity, transform',
        transitionDuration: '1000ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: visible ? `${delay}ms` : '0ms',
    });

    return (
        <section ref={sectionRef} className="py-16 sm:py-24 bg-background relative overflow-hidden border-b border-border transition-colors duration-500" id="about">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* Top Row: Mission & Glowing Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">

                    {/* Left Column: About Content */}
                    <div className="flex flex-col items-start" style={reveal(0)}>
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 mb-6 shadow-sm backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            <span className="text-secondary font-bold tracking-widest uppercase text-xs">
                                About Us
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary dark:text-white leading-[1.1] tracking-tight mb-6">
                            Powering Buildings
                            <span className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500 drop-shadow-sm">
                                With Glass.
                            </span>
                        </h2>

                        <div className="space-y-5 text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                            <p>
                                At Konara, we are redefining the future of clean energy through next-generation transparent solar technologies designed to integrate effortlessly into modern architecture. Our mission is clear and powerful: to transform every building into a generator of sustainable energy—without compromising on design, aesthetics, or functionality.
                            </p>
                            <p>
                                As pioneers in Building Integrated Photovoltaics (BIPV), we unite advanced solar innovation with architectural excellence. Our transparent solar solutions empower homeowners, builders, and contractors to create spaces that are visually striking, energy-efficient, and ready for the future.
                            </p>
                            <div className="pl-6 border-l-4 border-secondary mt-8 py-2 relative">
                                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-secondary to-amber-500 rounded-full" />
                                <p className="text-xl font-bold text-primary dark:text-white italic">
                                    "At Konara, we don't just install solar. We integrate energy into the very fabric of buildings—beautifully, intelligently, and sustainably."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Inspired Visual Composition */}
                    <div className="relative flex justify-center items-center py-10 lg:py-0 mt-10 lg:mt-0" style={reveal(200)}>
                        <div className="relative w-full max-w-lg z-10">

                            {/* Decorative Outline Rectangle (Behind) */}
                            {/* We use border-secondary to match the root color palette while keeping the style of the design */}
                            <div className="absolute top-10 -left-6 w-[70%] h-[85%] border-[3px] border-secondary/60 dark:border-secondary/40 z-0 hidden sm:block"></div>

                            {/* Main Large Image */}
                            <div className="relative aspect-[3/4] w-[80%] bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-xl z-10 sm:ml-8 mx-auto">
                                <img
                                    src="/images/custom-design-solar-panels-3d.jpg"
                                    alt="Engineers inspecting solar"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                                />
                            </div>

                            {/* Secondary Overlapping Image */}
                            <div className="absolute -bottom-10 -right-4 w-[65%] aspect-[4/3] bg-background border-[8px] border-background overflow-hidden shadow-2xl z-20 group">
                                <img
                                    src="/images/smart-integration-solar-panels-1.jpg"
                                    alt="Solar Installation"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Decorative Top Right Sun/Logo */}
                            <div className="absolute -top-16 -right-12 z-30 opacity-90 animate-float pointer-events-none hidden md:block">

                                {/* Dotted pattern */}
                                <div className="absolute -right-8 top-12 w-20 h-24 bg-[radial-gradient(#94A3B8_2px,transparent_2px)] dark:bg-[radial-gradient(#475569_2px,transparent_2px)] [background-size:12px_12px] opacity-30 -z-10"></div>
                            </div>

                            {/* Decorative Bottom Left Lightbulb */}
                            <div className="absolute -bottom-20 -left-16 z-0 opacity-60 animate-pulse-slow pointer-events-none hidden md:block">
                                <svg width="160" height="160" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Bulb */}
                                    <path d="M50 25C40 25 32 33 32 43C32 49.7 35.6 55.7 41 58.9V66C41 68.2 42.8 70 45 70H55C57.2 70 59 68.2 59 66V58.9C64.4 55.7 68 49.7 68 43C68 33 60 25 50 25Z" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-500" />
                                    <path d="M45 74H55M45 78H55M48 82H52" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-500" />
                                    <line x1="50" y1="45" x2="50" y2="60" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-500" />
                                    <path d="M45 40C45 40 48 45 55 45" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-500" />

                                    {/* Light Rays */}
                                    <line x1="50" y1="8" x2="50" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-slate-300 dark:text-slate-600" />
                                    <line x1="28" y1="20" x2="34" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-slate-300 dark:text-slate-600" />
                                    <line x1="72" y1="20" x2="66" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-slate-300 dark:text-slate-600" />
                                    <line x1="18" y1="43" x2="26" y2="43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-slate-300 dark:text-slate-600" />
                                    <line x1="82" y1="43" x2="74" y2="43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-slate-300 dark:text-slate-600" />
                                </svg>
                                {/* Circle pattern */}
                                <div className="absolute left-0 top-0 w-16 h-16 border-[1.5px] border-slate-300 dark:border-slate-700 rounded-full border-dashed opacity-50 -translate-x-4 -translate-y-4">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-700 font-bold font-mono text-xl">⚡</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Differentiators Matrix Grid - Compact layout */}
                <div className="flex flex-col items-center relative mt-6" style={reveal(300)}>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-900/50 rounded-[3rem] -z-10 pointer-events-none" />

                    <h3 className="text-3xl sm:text-4xl font-black text-primary dark:text-white mb-8 text-center pt-6">
                        What Makes Konara <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500">Different</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 w-full pb-6 px-2 sm:px-4">
                        {differentiators.map((item, idx) => (
                            <div
                                key={idx}
                                className="group flex flex-col bg-white dark:bg-slate-950 rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-500 border border-border dark:border-slate-800"
                                style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                                {/* Top Text Section */}
                                <div className="p-3 sm:p-4 pb-6 flex flex-col flex-1 relative bg-white dark:bg-slate-950 z-10">
                                    <div className="mb-4 text-secondary group-hover:scale-110 transition-transform duration-500 origin-left">
                                        <item.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase mb-1.5">
                                        0{idx + 1}
                                    </p>
                                    <h4 className="text-base sm:text-lg font-bold text-primary dark:text-white mb-2 leading-tight group-hover:text-secondary transition-colors duration-300">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-500 dark:text-slate-400 leading-snug text-xs sm:text-sm line-clamp-3">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Floating Button */}
                                <div className="relative h-0 z-20">
                                    <button className="absolute -top-4 left-4 sm:left-5 w-8 h-8 bg-secondary text-white flex items-center justify-center rounded-[3px] hover:bg-primary transition-colors duration-300 shadow-md shadow-secondary/30">
                                        <ChevronRight size={16} strokeWidth={3} />
                                    </button>
                                </div>

                                {/* Bottom Image Section */}
                                <div className="h-32 sm:h-36 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(1deg); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.4; transform: scale(0.95); }
                    50% { opacity: 0.8; transform: scale(1.05); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 5s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default AboutUsSection;
