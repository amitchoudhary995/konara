import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, User, Lightbulb, Layers, ThermometerSun, Palette } from 'lucide-react';

const ICON_MAP = {
  Layers: Layers,
  ThermometerSun: ThermometerSun,
  Palette: Palette
};

const projectsData = [
  {
    id: 1,
    title: "The Circuit Board Building",
    type: "International Design Center",
    location: "14 Rue Marius Patinaud, Saint-Étienne, France",
    architects: "LIN Architects, Werner Sobek & Okasolar",
    description: 'Known globally as "The Circuit Board," this building uses a stunning blend of triangular BIPV patterns to create a futuristic skin.',
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    inspiration: "The Circuit Board represents the perfect marriage between form and function. Its innovative use of geometric patterns and mixed BIPV technologies demonstrates how solar integration can transcend traditional design boundaries to create truly iconic architecture. This building doesn't just use solar technology—it celebrates it.",
    takeaways: [
      { title: "Mixed BIPV Technologies", desc: "Mixed use of triangular opaque PV, transparent CdTe glass, and crystalline PV.", icon: 'Layers', color: "text-secondary", bgHover: "group-hover:bg-secondary", borderHover: "hover:border-secondary/30" },
      { title: "Climate Control", desc: "Controls natural light and temperature with a patterned BIPV skin.", icon: 'ThermometerSun', color: "text-amber-500", bgHover: "group-hover:bg-amber-500", borderHover: "hover:border-amber-500/30" },
      { title: "Modern Art Meets Green Energy", desc: "A design that merges modern art with green energy, creating a building that stands as a landmark.", icon: 'Palette', color: "text-blue-500", bgHover: "group-hover:bg-blue-500", borderHover: "hover:border-blue-500/30" }
    ]
  },
  {
    id: 2,
    title: "Hikari Building",
    type: "Positive Energy Building (PEB)",
    location: "25 Quai Antoine Riboud, Lyon, France",
    architects: "Kengo Kuma & Associates | Sadev Constructions",
    description: "Hikari—meaning \"light\" in Japanese—is France's first Positive Energy Building, and a global symbol of sustainable architecture.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    inspiration: "Hikari represents the pinnacle of architectural innovation and sustainable design. As France's first Positive Energy Building, it demonstrates that buildings can generate more energy than they consume while maintaining stunning aesthetic appeal.",
    takeaways: [
      { title: "Custom Crystalline PV Glass", desc: "Use of custom crystalline PV glass panels blended into a partial façade.", icon: 'Layers', color: "text-secondary", bgHover: "group-hover:bg-secondary", borderHover: "hover:border-secondary/30" },
      { title: "Premium Aesthetic", desc: "Clean integration that maintains an iconic, premium aesthetic.", icon: 'Palette', color: "text-amber-500", bgHover: "group-hover:bg-amber-500", borderHover: "hover:border-amber-500/30" },
      { title: "Smart Façade Design", desc: "Smart façade design that naturally controls glare and sunlight.", icon: 'ThermometerSun', color: "text-blue-500", bgHover: "group-hover:bg-blue-500", borderHover: "hover:border-blue-500/30" },
      { title: "Architectural Expression", desc: "Demonstrates how BIPV can be both functional and architecturally expressive.", icon: 'Layers', color: "text-secondary", bgHover: "group-hover:bg-secondary", borderHover: "hover:border-secondary/30" }
    ]
  },
  {
    id: 3,
    title: "Copenhagen International School",
    type: "Europe's Largest BIPV Installation",
    location: "Levantkaj 4-14, Copenhagen, Denmark",
    architects: "C.F. Møller Architects & SolarLab",
    description: "This is one of the largest BIPV installations in Europe, featuring thousands of color-treated opaque solar panels across the entire building envelope.",
    image: "https://images.unsplash.com/photo-1541888049683-9b93510e1906?q=80&w=2070&auto=format&fit=crop",
    inspiration: "The Copenhagen International School showcases how BIPV can be implemented at scale without compromising visual appeal. The color-changing panels create a dynamic, living façade that transforms the building into a work of art while generating clean energy.",
    takeaways: [
      { title: "Full-Surface Opaque PV Façades", desc: "Full-surface opaque PV façades installed at varying angles for optimal performance.", icon: 'Layers', color: "text-secondary", bgHover: "group-hover:bg-secondary", borderHover: "hover:border-secondary/30" },
      { title: "Color-Changing Panels", desc: "Panels that change color depending on sunlight and viewing angle.", icon: 'Palette', color: "text-amber-500", bgHover: "group-hover:bg-amber-500", borderHover: "hover:border-amber-500/30" },
      { title: "Artistic Design + High Performance", desc: "A fusion of artistic design with high-output solar performance, proving that sustainability and aesthetics go hand in hand.", icon: 'ThermometerSun', color: "text-blue-500", bgHover: "group-hover:bg-blue-500", borderHover: "hover:border-blue-500/30" }
    ]
  },
  {
    id: 4,
    title: "CtrlS Datacenter",
    type: "India's Largest BIPV Installation",
    location: "Mahape, Navi Mumbai, Maharashtra",
    architects: "U-Solar & Waaree Energy",
    description: "A groundbreaking project in India's renewable landscape, generating ~0.8 MW from PV panels installed on all 4 sides.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    inspiration: "The CtrlS Datacenter represents a milestone in India's journey toward sustainable infrastructure. As the country's largest BIPV installation, it proves that even energy-intensive facilities like datacenters can be transformed into net-positive energy contributors. This project demonstrates the viability and scalability of BIPV technology in the Indian context.",
    takeaways: [
      { title: "Maximum Surface Utilization", desc: "Demonstrates maximum surface-area utilization with panels on all 4 sides.", icon: 'Layers', color: "text-secondary", bgHover: "group-hover:bg-secondary", borderHover: "hover:border-secondary/30" },
      { title: "Vertical-Surface Solar Generation", desc: "Vertical-surface solar generation perfect for dense urban zones.", icon: 'ThermometerSun', color: "text-amber-500", bgHover: "group-hover:bg-amber-500", borderHover: "hover:border-amber-500/30" },
      { title: "LEED Platinum Certification", desc: "Achieved LEED Platinum with high energy-efficiency results, setting a new standard for sustainable buildings in India.", icon: 'Palette', color: "text-blue-500", bgHover: "group-hover:bg-blue-500", borderHover: "hover:border-blue-500/30" }
    ]
  }
];

const Projects = () => {
  const bgRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Handle Parallax Scroll for Hero
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

    // Handle Intersection Observer for Split Screen
    const observers = [];
    projectsData.forEach((_, i) => {
      const el = document.getElementById(`project-content-${i}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
          }
        },
        { rootMargin: '-40% 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) cancelAnimationFrame(frameId);
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  return (
    <div className="bg-white dark:bg-[#070e17] min-h-screen">
      <Helmet>
        <title>Projects – Solastra BIPV</title>
        <meta name="description" content="Showcase of Solastra's global BIPV projects and architectural inspirations." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          ref={bgRef}
          className="absolute left-0 right-0 w-full"
          style={{
            height: '130%',
            top: '-15%',
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            willChange: 'transform'
          }}
        />

        {/* Dark/Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/50 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-900/30" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 mt-8">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4 drop-shadow-md">
            Featured Projects
          </h1>
          <div className="flex items-center justify-center gap-2 text-slate-700 dark:text-white/90 text-sm md:text-base font-bold">
            <Link to="/" className="hover:text-primary dark:hover:text-secondary transition-colors">Home</Link>
            <span className="text-slate-400 dark:text-white/50">/</span>
            <span>Projects</span>
          </div>
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="py-20 px-4 sm:px-8 bg-white dark:bg-[#070e17] text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-secondary font-bold tracking-widest uppercase text-xs">
            Architectural Showcase
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary dark:text-white leading-[1.1] tracking-tight mb-6">
          Inspiring BIPV Projects Around the World
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
          Explore groundbreaking building-integrated photovoltaic installations that demonstrate the perfect fusion of sustainable energy and architectural excellence.
        </p>
      </section>

      {/* Split Screen Layout */}
      <div className="relative flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto border-t border-slate-200 dark:border-white/10">

        {/* Left: Sticky Image Gallery (Desktop Only) */}
        <div className="hidden lg:block w-1/2 h-screen sticky top-0 p-6 lg:p-10 pt-28 pb-10">
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl border border-slate-200 dark:border-white/10 group/gallery">
            
            {/* Progress Indicators */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
              {projectsData.map((_, idx) => (
                <div 
                  key={`dot-${idx}`}
                  className={`w-1.5 rounded-full transition-all duration-500 cursor-pointer shadow-sm ${activeIndex === idx ? 'h-8 bg-secondary' : 'h-2 bg-white/40 hover:bg-white/80'}`}
                  onClick={() => {
                    const el = document.getElementById(`project-content-${idx}`);
                    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                />
              ))}
            </div>

            {projectsData.map((project, idx) => (
              <div
                key={`img-${project.id}`}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10 mix-blend-multiply" />
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-[20s] ease-linear ${activeIndex === idx ? 'scale-110' : 'scale-100'}`}
                />

                {/* Floating Badges inside Image */}
                <div className={`absolute bottom-10 left-12 right-8 z-20 flex flex-col gap-3 transition-all duration-700 delay-300 ${activeIndex === idx ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 w-max pr-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 shadow-inner">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/80 font-bold mb-0.5">Location</p>
                      <p className="text-xs font-black text-white leading-tight">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 w-max pr-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner">
                      <User size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/80 font-bold mb-0.5">Architects</p>
                      <p className="text-xs font-black text-white leading-tight">{project.architects}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Scrolling Content Blocks */}
        <div className="w-full lg:w-1/2">
          {projectsData.map((project, idx) => (
            <div
              key={`content-${project.id}`}
              id={`project-content-${idx}`}
              className={`py-12 lg:py-16 px-4 sm:px-8 lg:px-12 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeIndex === idx ? 'opacity-100 scale-100 translate-y-0' : 'opacity-30 scale-[0.98] translate-y-4'}`}
            >
              {/* Mobile Image (Hidden on Desktop) */}
              <div className="lg:hidden w-full aspect-[4/5] sm:aspect-video rounded-[2rem] overflow-hidden mb-10 relative shadow-2xl border border-slate-200 dark:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-3">
                  <p className="text-white font-bold flex items-center gap-2 text-sm"><MapPin size={14} className="text-secondary" /> {project.location}</p>
                  <p className="text-white/80 font-medium flex items-center gap-2 text-xs"><User size={14} /> {project.architects}</p>
                </div>
              </div>

              <span className="text-secondary font-bold tracking-widest uppercase text-[10px] sm:text-xs block mb-3">{project.type}</span>
              <h2 className="text-3xl sm:text-4xl font-black text-primary dark:text-white mb-4 leading-[1.1] tracking-tight">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Why this inspires us box */}
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 rounded-[1.5rem] border border-slate-200 dark:border-white/5 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Lightbulb size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-black text-primary dark:text-white">
                    Why This Inspires Solastra
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
                  {project.inspiration}
                </p>
              </div>

              <h3 className="text-xl font-black text-primary dark:text-white mb-4">
                Key Takeaways
              </h3>

              <div className="space-y-3">
                {project.takeaways.map((takeaway, i) => {
                  const IconComponent = ICON_MAP[takeaway.icon] || Layers;
                  return (
                    <div key={i} className={`group flex gap-4 p-4 rounded-[1.5rem] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-md ${takeaway.borderHover}`}>
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 flex items-center justify-center ${takeaway.color} ${takeaway.bgHover} group-hover:text-white transition-colors duration-300`}>
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <h4 className={`text-base font-black text-primary dark:text-white mb-1 transition-colors group-hover:${takeaway.color.split('-')[1]}`}>
                          {takeaway.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-xs">
                          {takeaway.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Solastra's Vision Section */}
      <section className="relative py-10 sm:py-12 px-4 sm:px-8 overflow-hidden bg-slate-950 border-t border-white/10 flex justify-center text-center">
        {/* Full Section Orange Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/70 via-secondary/10 to-slate-950 pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 tracking-tight text-white flex items-center justify-center gap-3">
                <Lightbulb size={28} className="text-secondary" strokeWidth={2.5} />
                Solastra's Vision
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-300/90 leading-relaxed font-medium max-w-2xl mx-auto">
                Solastra aims to bring similar façade-integrated crystalline BIPV solutions to commercial and residential buildings in India, combining cutting-edge technology with elegant design.
            </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
