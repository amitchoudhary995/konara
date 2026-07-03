import React from 'react';
import { ArrowUpRight, Play, Star, ShieldCheck } from 'lucide-react';

const WhatWeDoSection = () => {
    return (
        <section className="py-16 md:py-24 bg-background border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Left Column */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                            <span className="text-sm font-bold text-secondary uppercase tracking-wide">
                                What We Do
                            </span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white leading-[1.15] mb-6">
                            Complete solar services built for performance
                        </h2>
                        
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl">
                            Our team provides end-to-end solar solutions including site assessment, custom system design, professional installation, and ongoing maintenance.
                        </p>
                        
                        {/* Video Thumbnail Image */}
                        <div className="relative rounded-2xl overflow-hidden mt-auto shadow-lg group">
                            <img 
                                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop" 
                                alt="Solar engineers in field" 
                                className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                            
                            {/* Play Button Overlay */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer group/btn">
                                <div className="absolute w-28 h-28 border border-white/40 rounded-full animate-[spin_10s_linear_infinite] border-dashed"></div>
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:scale-110 shadow-lg">
                                    <Play size={24} fill="currentColor" className="ml-1" />
                                </div>
                                <svg className="absolute w-32 h-32 animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
                                    <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                                    <text fill="white" fontSize="10" fontWeight="bold" letterSpacing="3">
                                        <textPath href="#textPath" startOffset="0%">
                                            WATCH VIDEO • WATCH VIDEO • 
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col">
                        {/* Top Large Image */}
                        <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                            <img 
                                src="https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=1200&auto=format&fit=crop" 
                                alt="Workers installing solar panels" 
                                className="w-full h-[300px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Info Boxes */}
                        <div className="flex flex-col sm:flex-row gap-6 mb-8 border-b border-border pb-8">
                            <div className="flex-1 flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary dark:text-white mb-1">
                                        Complete Solar Solutions
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        We provide end-to-end solar services from site assessment & system design.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="hidden sm:block w-px bg-border"></div>
                            
                            <div className="flex-1 sm:pl-4 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-2xl font-black text-primary dark:text-white">4.9</span>
                                    <span className="text-sm font-bold text-slate-500">/5.0</span>
                                    <Star className="text-secondary" fill="currentColor" size={20} />
                                </div>
                                <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                                    Average Website<br />Ratings
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div>
                            <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-md shadow-secondary/20">
                                Learn More 
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
