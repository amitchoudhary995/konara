import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Zap, Building, Calendar, Leaf, Sparkles } from 'lucide-react';

const projects = [
    {
        id: '01',
        title: 'Nova Tech Headquarters',
        location: 'Silicon Valley, CA',
        stats: '1.2 MW',
        type: 'Corporate',
        desc: 'A complete facade overhaul using custom BIPV glass, seamlessly offsetting 60% of the building’s total energy consumption. Engineered to meet modern net-zero standards without compromising corporate design language.',
        image: 'https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        specs: {
            yield: '1.4 GWh/year',
            carbon: '510 tons/year',
            installed: 'Q3 2025'
        }
    },
    {
        id: '02',
        title: 'Lumina Eco-Tower',
        location: 'Singapore',
        stats: '850 kW',
        type: 'Residential',
        desc: 'Integrated solar balustrades and skylights across 40 floors, achieving LEED Platinum certification effortlessly. The installation blends structural security glass with high-efficiency photovoltaic materials.',
        image: 'https://images.unsplash.com/photo-1622533087594-627c3aa0d68a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        specs: {
            yield: '920 MWh/year',
            carbon: '380 tons/year',
            installed: 'Q1 2025'
        }
    },
    {
        id: '03',
        title: 'Horizon Transit Hub',
        location: 'Berlin, Germany',
        stats: '2.4 MW',
        type: 'Infrastructure',
        desc: 'The largest solar glass canopy in Europe, providing weather protection while powering massive terminal operations. Designed to withstand extreme weather events and high wind loads.',
        image: 'https://media.istockphoto.com/id/1220588683/photo/aerial-view-of-many-photo-voltaic-solar-panels-mounted-of-industrial-building-roof.jpg?s=1024x1024&w=is&k=20&c=dSLc1sHHUFbLxB_0jxzovwPiHN0VtjAH6o6f5iCC9PM=',
        specs: {
            yield: '2.8 GWh/year',
            carbon: '980 tons/year',
            installed: 'Q4 2024'
        }
    },
    {
        id: '04',
        title: 'Aura Cultural Center',
        location: 'Kyoto, Japan',
        stats: '420 kW',
        type: 'Cultural',
        desc: 'Blending traditional architectural aesthetics with modern energy capture via custom tinted, intelligent solar cladding. Solves zoning constraints with bespoke colors that match heritage code.',
        image: 'https://plus.unsplash.com/premium_photo-1679917152411-353fd633e218?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        specs: {
            yield: '460 MWh/year',
            carbon: '160 tons/year',
            installed: 'Q2 2025'
        }
    },
    {
        id: '05',
        title: 'AeroPort Solar Canopies',
        location: 'Denver, CO',
        stats: '1.8 MW',
        type: 'Infrastructure',
        desc: 'Architectural integration of solar glass over passenger terminal walkways, supplying green energy for public transit systems. Features semi-transparent shading that enhances traveler comfort.',
        image: 'https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        specs: {
            yield: '2.1 GWh/year',
            carbon: '720 tons/year',
            installed: 'Q3 2025'
        }
    },
    {
        id: '06',
        title: 'Vanguard Green Hub',
        location: 'London, UK',
        stats: '980 kW',
        type: 'Public Sector',
        desc: 'Featuring solar glass facades and custom-tinted cladding, generating power while preserving local conservation standards. Demonstrates BIPV scalability in northern European urban micro-climates.',
        image: 'https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        specs: {
            yield: '1.0 GWh/year',
            carbon: '410 tons/year',
            installed: 'Q4 2025'
        }
    }
];

const ProjectsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-12 sm:py-16 bg-zinc-950 relative overflow-hidden flex items-center min-h-[600px] transition-colors duration-500">

            {/* Background Image Crossfade Layer with sharp rendering settings */}
            {projects.map((project, idx) => (
                <div
                    key={project.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${idx === activeIndex ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 -z-10'}`}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                        className="w-full h-full object-cover transform-gpu backface-hidden"
                    />
                    {/* Multi-layered dark overlay for extreme contrast and premium readability */}
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />

                    {/* Pulsing solar background glow */}
                    <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[150px] mix-blend-screen pointer-events-none motion-safe:animate-[pulse_6s_ease-in-out_infinite]" />
                </div>
            ))}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* Centered Header Sequence matching other main page blocks */}
                <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-3 shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-xs font-bold tracking-widest uppercase text-secondary font-nav drop-shadow-md">
                            Signature Projects
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.15] tracking-tight mb-3">
                        Transforming The <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500">Global Skyline</span>
                    </h2>

                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                        Explore our portfolio of iconic building-integrated photovoltaic installations. From corporate headquarters to vast transit hubs, we are redefining modern architecture with self-sustaining power generation that drives high annual yields.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

                    {/* Left side: Interactive Project List (Compact layout) */}
                    <div className="lg:col-span-6 flex flex-col gap-1 relative z-20">
                        {projects.map((project, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <div 
                                    key={project.id}
                                    onMouseEnter={() => setActiveIndex(idx)}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`group flex items-center gap-3.5 p-2 sm:p-2.5 cursor-pointer rounded-xl transition-all duration-300 relative overflow-hidden border ${isActive ? 'bg-white/10 border-white/20 shadow-[0_4px_20px_rgba(249,115,22,0.1)] backdrop-blur-md' : 'hover:bg-white/5 border-transparent hover:border-white/5'}`}
                                >
                                    {isActive && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
                                    )}
                                    
                                    <span className={`text-sm md:text-base font-black font-nav transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                                        {project.id}
                                    </span>
                                    
                                    <h3 className={`text-sm md:text-base font-black transition-all duration-300 ${isActive ? 'text-white translate-x-1' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                                        {project.title}
                                    </h3>
                                </div>
                            )
                        })}
                    </div>

                    {/* Right side: Active Project Glassmorphic Details Card (Clean specs design) */}
                    <div className="lg:col-span-5 lg:col-start-8">
                        <div className="relative rounded-3xl overflow-hidden bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500">
                            {/* Inner gradient sweep */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-40 pointer-events-none" />
                            
                            {/* Card Content (Keyed by activeIndex to re-trigger slide animation) */}
                            <div 
                                key={activeIndex} 
                                className="relative z-10 animate-[fadeInUp_0.4s_ease-out_forwards]"
                            >
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="flex items-center gap-1.5 bg-black/50 border border-white/5 px-3 py-1.5 rounded-full text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                                        <MapPin size={11} className="text-secondary" /> {projects[activeIndex].location}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-black/50 border border-white/5 px-3 py-1.5 rounded-full text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                                        <Building size={11} className="text-secondary" /> {projects[activeIndex].type}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-secondary/10 border border-secondary/30 px-3 py-1.5 rounded-full text-[10px] font-bold text-secondary uppercase tracking-wider shadow-[0_0_10px_rgba(249,115,22,0.15)]">
                                        <Zap size={11} /> {projects[activeIndex].stats}
                                    </span>
                                </div>

                                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                                    {projects[activeIndex].desc}
                                </p>

                                {/* Structured Tech Specs Grid */}
                                <div className="grid grid-cols-3 gap-2 border-t border-b border-white/5 py-3 mb-5">
                                    <div className="flex flex-col">
                                        <span className="flex items-center gap-1 text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1"><Zap size={10} className="text-secondary" /> Energy Yield</span>
                                        <span className="text-[11px] sm:text-xs font-black text-white">{projects[activeIndex].specs.yield}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="flex items-center gap-1 text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1"><Leaf size={10} className="text-secondary" /> CO2 Offset</span>
                                        <span className="text-[11px] sm:text-xs font-black text-white">{projects[activeIndex].specs.carbon}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="flex items-center gap-1 text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1"><Calendar size={10} className="text-secondary" /> Installed</span>
                                        <span className="text-[11px] sm:text-xs font-black text-white">{projects[activeIndex].specs.installed}</span>
                                    </div>
                                </div>

                                <button className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px]">
                                    <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45 shadow-[0_0_10px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)]">
                                        <ArrowUpRight size={14} />
                                    </div>
                                    <span>Explore Case Study</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default ProjectsSection;