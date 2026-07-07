import React, { useRef, useState, useEffect } from 'react';
import { Layers, Lightbulb, Workflow, TrendingUp, ShieldCheck, Wrench, Plus, Minus } from 'lucide-react';

const reasons = [
    {
        title: "Seamless Integration with Modern Architecture",
        desc: "Konara's advanced transparent solar technology is engineered to merge flawlessly with the aesthetics of contemporary buildings. Unlike bulky traditional panels, our Building Integrated Photovoltaics (BIPV) becomes a natural part of your structure enhancing design rather than obstructing it. Whether used in facades, windows, skylights, or canopies, Konara's solutions combine clean energy generation with high-end architectural beauty, making them ideal for green buildings, corporate infrastructures, and modern residential spaces.",
        icon: Layers
    },
    {
        title: "Advanced Engineering & Precision-Driven Solar Design",
        desc: "At Konara, every project is crafted with rigorous engineering and innovative solar design. Our team analyzes structural dynamics, light transmission needs, thermal efficiency, and energy output to deliver durable and high-performing systems. Using premium materials and next-generation photovoltaic technology, we ensure superior efficiency, reliability, and minimum power loss. This precision-driven approach makes Konara a trusted choice for transparent solar panels and BIPV engineering across diverse industries.",
        icon: Lightbulb
    },
    {
        title: "End-to-End Transparent Solar Solutions",
        desc: "Konara provides a complete ecosystem of solar services tailored to the evolving needs of modern buildings. From initial consultation and ROI analysis to building material procurement, electrical system design, installation, system testing, and long-term maintenance, we offer a streamlined experience at every stage. Our integrated approach eliminates project delays, minimizes technical challenges, and ensures a smooth transition to sustainable, future-ready energy systems. With Konara, adopting solar-integrated architecture becomes effortless and efficient.",
        icon: Workflow
    },
    {
        title: "Smart Energy Performance with Higher ROI",
        desc: "Our transparent solar systems are strategically engineered to maximize energy output while maintaining optimal visual clarity. By utilizing high-quality photovoltaic materials and smart integration methods, Konara ensures long-term power generation and reduced electricity costs. The result is a higher return on investment, enhanced building value, and lower operational expenses. Whether you're developing a commercial complex or a premium residence, Konara's solar BIPV solutions provide a sustainable energy advantage with guaranteed long-term savings.",
        icon: TrendingUp
    },
    {
        title: "Commitment to Quality, Innovation, and Sustainability",
        desc: "Konara continuously pushes the boundaries of solar technology to deliver the finest transparent solar products in the industry. Our systems undergo stringent quality checks, durability tests, and performance assessments to ensure long-term stability even in challenging environmental conditions. As a company rooted in innovation and sustainability, we are dedicated to helping clients reduce carbon footprints, achieve green certifications, and contribute to a cleaner future through high-performance transparent solar panel solutions.",
        icon: ShieldCheck
    },
    {
        title: "Expert Support and Long-Term System Maintenance",
        desc: "Konara delivers unmatched after-sales support with regular system inspections, performance optimization, and proactive maintenance services. Our dedicated technical team ensures that your solar installation continues to generate energy at peak efficiency for years to come. From component replacements to troubleshooting and system upgrades, we provide comprehensive assistance to keep your building powered, sustainable, and future-ready always.",
        icon: Wrench
    }
];

const AccordionItem = ({ reason, isOpen, onClick }) => (
    <div className={`border-b border-slate-200 dark:border-white/10 last:border-0 overflow-hidden px-4 sm:px-6 transition-all duration-300 ${isOpen ? 'bg-white dark:bg-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl border-transparent my-2' : 'hover:bg-slate-100/50 dark:hover:bg-white/5 rounded-xl'}`}>
        <button onClick={onClick} className="w-full flex items-center justify-between py-5 text-left group">
            <div className="flex items-center gap-4">
                <reason.icon size={24} className={`shrink-0 transition-colors ${isOpen ? 'text-secondary' : 'text-slate-400 group-hover:text-primary dark:group-hover:text-white'}`} strokeWidth={1.5} />
                <h3 className={`text-lg sm:text-xl font-semibold font-nav tracking-wide transition-colors ${isOpen ? 'text-secondary' : 'text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                    {reason.title}
                </h3>
            </div>
            {isOpen ? <Minus size={20} className="text-secondary shrink-0 ml-4" /> : <Plus size={20} className="text-slate-400 group-hover:text-primary dark:group-hover:text-white shrink-0 ml-4" />}
        </button>
        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light pl-[40px] text-[15px] sm:text-base">
                    {reason.desc}
                </p>
            </div>
        </div>
    </div>
);

const WhyKonaraSection = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState(0);

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
        <section ref={sectionRef} className="py-12 sm:py-16 bg-slate-50 dark:bg-[#070e17] relative overflow-hidden transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 dark:bg-blue-500/10 rounded-full blur-[150px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    
                    {/* Left Column: Sticky Header */}
                    <div className="lg:w-5/12">
                        <div className="sticky top-32" style={reveal(0)}>
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 mb-6 shadow-sm backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                <span className="text-secondary font-bold tracking-widest uppercase text-[10px] sm:text-xs">
                                    The Konara Advantage
                                </span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary dark:text-white leading-[1.1] tracking-tight mb-6">
                                Why Konara is the <br className="hidden sm:block"/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500 drop-shadow-sm">
                                    Smart Choice?
                                </span>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl leading-relaxed font-medium mb-8">
                                Discover what sets Konara apart in the world of transparent solar technology. Our commitment to innovation and sustainability makes us the preferred partner for modern architecture.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:w-7/12">
                        <div className="flex flex-col">
                            {reasons.map((reason, idx) => (
                                <div key={idx} style={reveal(100 + (idx * 100))}>
                                    <AccordionItem 
                                        reason={reason} 
                                        isOpen={openIndex === idx} 
                                        onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyKonaraSection;
