import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sun, Zap, Leaf, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';

const HeroSection = () => {
    // --- Slide data (updated with specific BIPV copy and matching images) ---
    const slides = [
        {
            id: 1,
            badge: 'Eco‑Friendly BIPV',
            sidebarLabel: 'Smart Solar Technology',
            title: 'Solar Integration <span class="text-secondary">Meets Modern Design</span>',
            description: 'Transforming building facades and window panels into active power‑generating assets without compromising architectural vision.',
            image: 'https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Man in solar field / roof installer
            icon: Sun,
            ctaText: 'Discover More',
            ctaLink: '/solutions',
        },
        {
            id: 2,
            badge: 'Active Envelopes',
            sidebarLabel: 'Advanced Solar Solutions',
            title: 'Custom Solar <span class="text-secondary">Glass & Active Facades</span>',
            description: 'Powering future smart‑city infrastructures with high‑performance building‑integrated photovoltaic cladding systems.',
            image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Technician working in solar plant / panel grid close up
            icon: Zap,
            ctaText: 'Discover More',
            ctaLink: '/technology',
        },
        {
            id: 3,
            badge: 'Decarbonizing Materials',
            sidebarLabel: 'Unlimited Solar Power',
            title: 'High‑Performance <span class="text-secondary">Photovoltaic Roofs</span>',
            description: 'Engineered BIPV roof tiling and structural panels that combine severe weather resistance with clean grid‑independent output.',
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // EV charging carport powered by solar panels (charge solar)
            icon: Leaf,
            ctaText: 'Discover More',
            ctaLink: '/products',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);
    const totalSlides = slides.length;

    // --- Navigation ---
    const goToSlide = useCallback(
        (index) => {
            setCurrentIndex((index + totalSlides) % totalSlides);
        },
        [totalSlides]
    );

    const goNext = useCallback(() => goToSlide(currentIndex + 1), [currentIndex, goToSlide]);
    const goPrev = useCallback(() => goToSlide(currentIndex - 1), [currentIndex, goToSlide]);

    // --- Autoplay ---
    useEffect(() => {
        if (isPaused) return;
        intervalRef.current = setInterval(goNext, 5000);
        return () => clearInterval(intervalRef.current);
    }, [goNext, isPaused]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [currentIndex]);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    const slide = slides[currentIndex];

    return (
        <section
            className="relative h-[70vh] min-h-[580px] md:h-[65vh] lg:h-[65vh] xl:h-[80vh] xl:min-h-[700px] w-full overflow-hidden font-sans"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background Images with cross-fade */}
            {slides.map((s, idx) => (
                <div
                    key={s.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover transition-transform duration-[5000ms] ease-out scale-105"
                        style={{
                            backgroundImage: `url(${s.image})`,
                            backgroundPosition: 'center center',
                            transform: idx === currentIndex ? 'scale(1)' : 'scale(1.05)'
                        }}
                    />
                    {/* Base overlay with left gradient (0.4 to 0.15) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-black/15"></div>
                    {/* Top gradient for navbar readability */}
                    <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/40 to-transparent"></div>
                </div>
            ))}


            <div className="relative w-full h-full overflow-hidden">
                {/* Radial Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_right,rgba(0,0,0,0.5),rgba(0,0,0,0.91))]" />

                {/* Content Container (Full Width grid alignment with left spacing and double right spacing) */}
                <div className="relative z-10 w-full pl-6 md:pl-12 pr-12 md:pr-24 h-full flex items-center">
                    <div className="grid grid-cols-12 w-full gap-8 lg:gap-16 items-center">

                        {/* Left Page/Slide Nav (Zolar Design) - One-third width (4/12) */}
                        <div className="col-span-12 md:col-span-4 lg:col-span-4 hidden md:flex flex-col gap-4 justify-center py-4">
                            {slides.map((s, idx) => {
                                const isActive = idx === currentIndex;
                                const SlideIcon = s.icon;
                                const words = s.sidebarLabel.split(' ');
                                const firstLine = words.slice(0, 2).join(' ');
                                const secondLine = words.slice(2).join(' ');

                                return (
                                    <div key={s.id} className="flex flex-col w-full">
                                        <button
                                            onClick={() => goToSlide(idx)}
                                            className="flex items-center gap-3 text-left transition-all duration-300 group focus:outline-none cursor-pointer"
                                            aria-label={`Go to slide ${idx + 1}`}
                                        >
                                            {/* Circular Icon */}
                                            <div
                                                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive
                                                    ? 'border-secondary bg-secondary/15 text-secondary shadow-[0_0_12px_rgba(249,115,22,0.2)]'
                                                    : 'border-white/20 bg-black/25 text-white/60 group-hover:border-white/50 group-hover:text-white'
                                                    }`}
                                            >
                                                <SlideIcon size={18} />
                                            </div>

                                            {/* Sidebar Text */}
                                            <div className="flex flex-col justify-center">
                                                <span className={`text-[10px] font-bold uppercase tracking-wider leading-tight transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-white/80 group-hover:text-white'
                                                    }`}>
                                                    {firstLine}
                                                </span>
                                                {secondLine && (
                                                    <span className={`text-[10px] font-bold uppercase tracking-wider leading-tight transition-colors duration-300 ${isActive ? 'text-secondary/70' : 'text-white/40 group-hover:text-white/60'
                                                        }`}>
                                                        {secondLine}
                                                    </span>
                                                )}
                                            </div>
                                        </button>

                                        {/* Bottom line indicator */}
                                        <div className="mt-2.5 flex items-center w-full">
                                            <div className={`h-[1px] transition-all duration-700 ease-in-out ${isActive ? 'bg-secondary w-full' : 'bg-white/10 w-4/5'
                                                }`} />
                                            {isActive && (
                                                <span className="pl-3 text-[9px] font-bold text-secondary tracking-widest animate-pulse">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Main Hero Slider Content */}
                        <div
                            key={currentIndex}
                            className="col-span-12 md:col-span-8 lg:col-span-8 flex flex-col items-center text-center justify-center animate-[slideUp_0.8s_ease-out_forwards]"
                        >
                            {/* Badge */}
                            <p className="text-secondary font-bold tracking-widest uppercase mb-2.5 text-xs inline-flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-secondary/60"></span>
                                ✦ {slide.badge} ✦
                                <span className="w-8 h-[1px] bg-secondary/60"></span>
                            </p>

                            {/* Slide Title */}
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 leading-[1.12]"
                                dangerouslySetInnerHTML={{ __html: slide.title }}
                            />

                            {/* Slide Description */}
                            <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-xl mb-6 leading-relaxed">
                                {slide.description}
                            </p>

                            {/* Button CTA */}
                            <Link
                                to={slide.ctaLink}
                                className="inline-flex items-center gap-3 bg-secondary text-white font-nav font-bold text-xs uppercase tracking-widest rounded-full pl-6 pr-2 py-2 hover:bg-secondary/90 transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 group shadow-lg"
                            >
                                {slide.ctaText}
                                <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                    <ArrowUpRight size={12} />
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Bottom Slider Nav Arrows & Progress (Frosted glass container) */}
                <div className="absolute bottom-5 right-6 md:right-12 lg:right-16 z-20 flex items-center gap-3 bg-black/20 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-lg">
                    <button
                        onClick={goPrev}
                        className="p-1.5 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors cursor-pointer"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={13} />
                    </button>
                    <div className="flex gap-1.5">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? 'bg-secondary w-5' : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={goNext}
                        className="p-1.5 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors cursor-pointer"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={13} />
                    </button>
                </div>
            </div>




        </section>
    );
};

export default HeroSection;