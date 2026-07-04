import { Helmet } from 'react-helmet-async';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Sun, Building2, Battery, Leaf, Maximize, Zap,
    Home, Building, HardHat, Compass, Wrench, Activity,
    CheckCircle2, ArrowRight
} from 'lucide-react';

const Bipv = () => {
    const bgRef = useRef(null);

    useEffect(() => {
        let frameId;
        const handleScroll = () => {
            frameId = requestAnimationFrame(() => {
                if (bgRef.current) {
                    const offset = window.scrollY;
                    bgRef.current.style.transform = `translateY(${offset * 0.4}px)`;
                }
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div className="bg-slate-50 dark:bg-[#070e17] min-h-screen flex flex-col font-sans overflow-hidden">
            <Helmet>
                <title>The Future of Solar Panel Architecture | Solastra BIPV</title>
                <meta name="description" content="Discover how Solastra's Building Integrated Photovoltaics (BIPVs) turn ordinary structures into powerful, clean energy creators." />
            </Helmet>

            {/* Parallax Hero Section */}
            <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
                <div
                    ref={bgRef}
                    className="absolute left-0 right-0 w-full"
                    style={{
                        height: '130%',
                        top: '-15%',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1730807908064-c087959dd52c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        willChange: 'transform'
                    }}
                />

                {/* Dark/Light Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/50 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-900/30" />

                {/* Content */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4 drop-shadow-md">
                        BIPV Solutions
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-slate-700 dark:text-white/90 text-sm md:text-base font-bold">
                        <Link to="/" className="hover:text-primary dark:hover:text-secondary transition-colors">Home</Link>
                        <span className="text-slate-400 dark:text-white/50">/</span>
                        <span>BIPV Solutions</span>
                    </div>
                </div>
            </section>

            {/* Intro Section - The Vision */}
            <section className="py-16 sm:py-24 bg-background relative overflow-hidden border-b border-border transition-colors duration-500">
                {/* Ambient Background Glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column: Content */}
                        <div className="flex flex-col items-start">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 mb-6 shadow-sm backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs">Transforming Energy</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary dark:text-white leading-[1.1] tracking-tight mb-6">
                                At Solastra, we are transforming how structures <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500 drop-shadow-sm">interact with energy</span> through BIPV.
                            </h2>

                            <div className="space-y-5 text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                                <p>
                                    Our transparent solar panels seamlessly combine into the physical structure of homes, services, and commercial spaces, turning ordinary shells into powerful, clean energy creators.
                                </p>
                                <p>
                                    BIPVs are not just solar products; they are <strong className="text-primary dark:text-white font-bold">architectural solutions, energy means, and sustainability enhancers</strong>, all in one.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Visual Composition */}
                        <div className="relative flex justify-center items-center py-10 lg:py-0 mt-10 lg:mt-0">
                            <div className="relative w-full max-w-lg z-10">
                                {/* Decorative Outline Rectangle (Behind) */}
                                <div className="absolute top-10 -left-6 w-[70%] h-[85%] border-[3px] border-secondary/60 dark:border-secondary/40 z-0 hidden sm:block"></div>

                                {/* Main Large Image */}
                                <div className="relative aspect-[3/4] w-[80%] bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-xl z-10 sm:ml-8 mx-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1724994727393-1040b798a228?q=80&w=863&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Modern BIPV Architecture"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Are BIPVs? */}
            <section className="py-10 md:py-12 px-4 sm:px-8 max-w-[1400px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl md:text-5xl font-black text-primary dark:text-white mb-6">
                            What Are BIPVs?
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg mb-8">
                            Building Integrated Photovoltaics are solar technologies directly integrated into structure factors like windows, façades, skylights, rooftops, rails, and shading systems.
                        </p>
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-[#0a111a] border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                            <Building2 className="text-secondary mb-6 w-12 h-12" />
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Aesthetic Integration</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Rather than adding traditional panels on top, BIPVs replace conventional accessories with energy-producing solar glass, maintaining structural aesthetics.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#0a111a] border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-lg md:translate-y-8 hover:translate-y-6 transition-transform duration-300">
                            <Sun className="text-secondary mb-6 w-12 h-12" />
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Advanced Transparency</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Uses advanced transparent photovoltaic materials that allow natural light to pass through while converting sunlight directly into clean power.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose BIPVs? */}
            <section className="py-16 md:py-20 px-4 sm:px-8 bg-white dark:bg-slate-900 mt-8 relative overflow-hidden border-y border-slate-200 dark:border-white/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10 mix-blend-overlay"></div>
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-6">Why Choose BIPVs?</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">Discover the incredible advantages of transitioning to Building Integrated Photovoltaics.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Untapped Energy", desc: "Generate electricity from otherwise passive materials & untapped solar irradiation." },
                            { title: "Increased Capacity", desc: "Can significantly increase overall kW capacity compared to traditional rooftop solar." },
                            { title: "Vertical Power", desc: "Vertical solar installations on façades can generate sizable and consistent energy." },
                            { title: "Hybrid Solutions", desc: "Mixing regular panels & BIPV is highly affordable for high-rise commercial sectors." },
                            { title: "Green ROI", desc: "Saves roof space, increases aesthetics, achieves green ratings, and generates revenue." }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50/80 dark:bg-black/40 backdrop-blur-md border border-slate-200 dark:border-white/10 p-6 rounded-3xl hover:bg-white dark:hover:bg-secondary/20 hover:border-secondary/30 dark:hover:border-secondary/50 hover:shadow-xl dark:hover:shadow-none transition-all duration-300 group">
                                <div className="text-secondary font-black text-4xl opacity-30 dark:opacity-50 mb-4 group-hover:opacity-100 transition-opacity">
                                    0{i + 1}
                                </div>
                                <h3 className="text-primary dark:text-white font-bold text-lg mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-16 md:py-20 px-4 sm:px-8 max-w-[1400px] mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-6">Solastra Applications</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-4">
                        Seamless integration across all architectural surfaces.
                    </p>
                    <div className="inline-block px-6 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-bold text-sm tracking-widest uppercase">
                        Every product is customizable (Size, Color, Power, Transparency)
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-3xl p-8 group">
                        <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <Maximize size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Transparent Solar Windows</h3>
                        <p className="text-slate-600 dark:text-slate-400">Generate power while maintaining clarity and daylight inside your spaces.</p>
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-3xl p-8 group">
                        <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <Building size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Solar Facades</h3>
                        <p className="text-slate-600 dark:text-slate-400">Turn your structure's surface into a vertical solar farm with stunning aesthetic appeal.</p>
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-3xl p-8 group">
                        <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <Sun size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Skylights & Canopies</h3>
                        <p className="text-slate-600 dark:text-slate-400">Create elegant overhead structures that elegantly filter light while producing energy.</p>
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-3xl p-8 group lg:col-span-2">
                        <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <Battery size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Balcony & Railing Solar Glass</h3>
                        <p className="text-slate-600 dark:text-slate-400">Ideal for residential and commercial high-rise structures to maximize vertical sun exposure.</p>
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-3xl p-8 group">
                        <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Shading Devices & Louvers</h3>
                        <p className="text-slate-600 dark:text-slate-400">Functional solar elements that effectively regulate light and heat.</p>
                    </div>
                </div>
            </section>

            {/* Benefits By User Type */}
            <section className="py-16 md:py-20 px-4 sm:px-8 border-t border-slate-200 dark:border-white/10">
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white text-center mb-16">Designed For You</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                        {/* Ambient Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[120%] bg-secondary/5 dark:bg-secondary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

                        {/* Homeowners */}
                        <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-3 transition-all duration-500 hover:shadow-secondary/20 hover:border-secondary/50">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-colors duration-500 pointer-events-none" />

                            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-secondary/30 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                <Home className="text-white w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-primary dark:text-white mb-8">For Homeowners</h3>
                            <ul className="space-y-5 relative z-10">
                                {['Lower energy bills', 'Modern architectural aesthetics', 'Increased property value', 'Eco-friendly living'].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-4 group/item">
                                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover/item:bg-secondary/20 transition-colors">
                                            <CheckCircle2 className="text-secondary w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-semibold">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Architects */}
                        <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-3 transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-500/50">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-500 pointer-events-none" />

                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                <Compass className="text-white w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-primary dark:text-white mb-8">For Architects</h3>
                            <ul className="space-y-5 relative z-10">
                                {['Flexible & customizable design', 'Smooth integration with plans', 'High-performance solar tech', 'Support for LEED, GBC, GRIHA'].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-4 group/item">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover/item:bg-blue-500/20 transition-colors">
                                            <CheckCircle2 className="text-blue-500 w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-semibold">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Commercial */}
                        <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-3 transition-all duration-500 hover:shadow-amber-500/20 hover:border-amber-500/50">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 dark:bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-500/30 transition-colors duration-500 pointer-events-none" />

                            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                <Building2 className="text-white w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-primary dark:text-white mb-8">For Commercial</h3>
                            <ul className="space-y-5 relative z-10">
                                {['Energy optimization at scale', 'Advanced building performance', 'Attractive ROI metrics', 'Minimum maintenance required'].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-4 group/item">
                                        <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 group-hover/item:bg-amber-500/20 transition-colors">
                                            <CheckCircle2 className="text-amber-500 w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-semibold">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* End to End Support */}
            <section className="py-16 md:py-20 px-4 sm:px-8 bg-slate-100 dark:bg-gradient-to-br dark:from-primary dark:to-slate-900 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-primary dark:text-white mb-6">End-to-End BIPV Support</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-16">
                        We offer complete end-to-end support. Our team ensures that each BIPV solution is optimized for maximum effectiveness, aesthetics, and long-term performance.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Design & Customization", icon: Compass },
                            { title: "Engineering Analysis", icon: HardHat },
                            { title: "On-Site Installation", icon: Wrench },
                            { title: "Monitoring & Service", icon: Activity }
                        ].map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="w-24 h-24 mx-auto bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/10 dark:group-hover:bg-secondary/20 group-hover:border-secondary/30 dark:group-hover:border-secondary/50 group-hover:shadow-secondary/20 transition-all duration-300 relative z-10">
                                    <step.icon className="text-slate-400 dark:text-white group-hover:text-secondary transition-colors w-10 h-10" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white font-black flex items-center justify-center text-sm border-[3px] border-slate-100 dark:border-primary">
                                        {i + 1}
                                    </div>
                                </div>
                                <h3 className="text-primary dark:text-white font-bold text-xl">{step.title}</h3>

                                {/* Connector Line */}
                                {i < 3 && (
                                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-slate-300 dark:bg-white/10 -z-10">
                                        <div className="h-full bg-secondary w-0 group-hover:w-full transition-all duration-500 ease-out" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <Link to="/contact" className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 hover:bg-orange-500 transition-all shadow-lg hover:shadow-secondary/30">
                            Start Your Project <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bipv;
