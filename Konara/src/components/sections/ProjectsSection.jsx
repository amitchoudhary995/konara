import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Zap, Building, Calendar, Leaf, Sparkles } from 'lucide-react';

const projects = [
    {
        id: '01',
        title: 'The Circuit Board',
        location: 'Saint-Étienne, France',
        stats: 'Architectural BIPV',
        type: 'Design Center',
        desc: 'Known globally as "The Circuit Board," this building uses a stunning blend of triangular BIPV patterns to create a futuristic skin.',
        image: '/images/specialized-bipv-solar-consultation.jpg',
        specs: {
            yield: 'Optimal',
            carbon: 'High Offset',
            installed: 'Completed'
        }
    },
    {
        id: '02',
        title: 'Hikari Building',
        location: 'Lyon, France',
        stats: 'Positive Energy',
        type: 'Mixed-Use',
        desc: 'Hikari—meaning "light" in Japanese—is France\'s first Positive Energy Building, and a global symbol of sustainable architecture.',
        image: '/images/roi-and-feasibility-analysis.jpg',
        specs: {
            yield: 'Net Positive',
            carbon: 'Zero Emission',
            installed: 'Completed'
        }
    },
    {
        id: '03',
        title: 'Copenhagen Int. School',
        location: 'Copenhagen, Denmark',
        stats: '12,000+ Panels',
        type: 'Education',
        desc: 'One of the largest BIPV installations in Europe, featuring thousands of color-treated opaque solar panels across the entire building envelope.',
        image: '/images/electrical-system-procurement-1.jpg',
        specs: {
            yield: 'Massive Scale',
            carbon: 'Iconic Green',
            installed: 'Completed'
        }
    },
    {
        id: '04',
        title: 'CtrlS Datacenter',
        location: 'Mumbai, India',
        stats: '~0.8 MW',
        type: 'Datacenter',
        desc: 'A groundbreaking project in India\'s renewable landscape, generating ~0.8 MW from PV panels installed on all 4 sides of the facility.',
        image: '/images/custom-design-solar-panels-3d.jpg',
        specs: {
            yield: '0.8 MW',
            carbon: 'LEED Platinum',
            installed: 'Completed'
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
                        Project Ideas – <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500">Iconic Global Projects Using BIPV</span>
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
                                    className={`group flex items-center gap-3.5 p-2 sm:p-2.5 cursor-pointer rounded-xl transition-all duration-300 relative overflow-hidden border ${isActive ? 'bg-white/10 border-white/20 shadow-[0_4px_20px_rgba(227,77,42,0.1)] backdrop-blur-md' : 'hover:bg-white/5 border-transparent hover:border-white/5'}`}
                                >
                                    {isActive && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary shadow-[0_0_15px_rgba(227,77,42,0.8)]" />
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
                        <div className="relative rounded-3xl overflow-hidden bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 min-h-[360px] flex flex-col justify-between">
                            {/* Inner gradient sweep */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-40 pointer-events-none" />
                            
                            {/* Card Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="flex items-center gap-1.5 bg-black/50 border border-white/5 px-3 py-1.5 rounded-full text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                                        <MapPin size={11} className="text-secondary" /> {projects[activeIndex].location}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-black/50 border border-white/5 px-3 py-1.5 rounded-full text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                                        <Building size={11} className="text-secondary" /> {projects[activeIndex].type}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-secondary/10 border border-secondary/30 px-3 py-1.5 rounded-full text-[10px] font-bold text-secondary uppercase tracking-wider shadow-[0_0_10px_rgba(227,77,42,0.15)]">
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
                                    <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45 shadow-[0_0_10px_rgba(227,77,42,0.3)] group-hover:shadow-[0_0_15px_rgba(227,77,42,0.6)]">
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
            `}</style>
        </section>
    );
};

export default ProjectsSection;