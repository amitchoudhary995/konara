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
            title: 'Redefining Solar Integration With <span class="text-secondary">Architectural Elegance</span>',
            description: 'Seamlessly blending high-performance photovoltaics into modern façades, rooftops, and skylights without compromising design.',
            image: '/images/banner-redefining-solar-integration-1.jpg',
            icon: Sun,
            ctaText: 'Discover More',
            ctaLink: '/contact',
        },
        {
            id: 2,
            badge: 'Technology-Driven',
            sidebarLabel: 'Advanced Solar Solutions',
            title: 'Uncompromising <span class="text-secondary">Solar Performance</span>',
            description: 'Powering the future of smart-city infrastructure with precision-engineered building-integrated photovoltaic systems.',
            image: '/images/banner-redefining-solar-integration-2.jpg',
            icon: Zap,
            ctaText: 'Discover More',
            ctaLink: '/contact',
        },
        {
            id: 3,
            badge: 'Decarbonizing Materials',
            sidebarLabel: 'Unlimited Solar Power',
            title: 'Transforming Surfaces Into <span class="text-secondary">Clean Power Plants</span>',
            description: 'Engineered structural panels and solar glass that combine severe weather resistance with maximum grid-independent energy output.',
            image: '/images/banner-transforming-surfaces.jpg',
            icon: Leaf,
            ctaText: 'Discover More',
            ctaLink: '/contact',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
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
        const interval = setInterval(goNext, 5000); // 5000ms is smoother and gives more time to read
        return () => clearInterval(interval);
    }, [goNext]);

    const slide = slides[currentIndex];

    return (
        <section
            className="relative h-[70vh] min-h-[580px] md:h-[65vh] lg:h-[65vh] xl:h-[80vh] xl:min-h-[700px] w-full overflow-hidden font-sans"
        >
            {/* Background Images with cross-fade */}
            {slides.map((s, idx) => (
                <div
                    key={s.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover transition-transform duration-[5000ms] ease-out"
                        style={{
                            backgroundImage: `url(${s.image})`,
                            backgroundPosition: 'center center',
                            transform: idx === currentIndex ? 'scale(1)' : 'scale(1.05)'
                        }}
                    />
                    {/* Base overlay with left gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent dark:from-black/60 dark:via-black/20 dark:to-transparent"></div>
                    {/* Top gradient for navbar readability */}
                    <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white/60 to-transparent dark:from-black/40 dark:to-transparent"></div>
                </div>
            ))}


            <div className="relative w-full h-full overflow-hidden">
                {/* Radial Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_right,transparent,rgba(255,255,255,0.7))] dark:bg-[radial-gradient(circle_at_right,rgba(0,0,0,0.5),rgba(0,0,0,0.91))]" />

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
                                                    ? 'border-secondary bg-secondary/15 text-secondary shadow-[0_0_12px_rgba(227,77,42,0.2)]'
                                                    : 'border-slate-300 dark:border-white/20 bg-white/60 dark:bg-black/25 text-slate-600 dark:text-white/60 group-hover:border-slate-500 dark:group-hover:border-white/50 group-hover:text-slate-900 dark:group-hover:text-white'
                                                    }`}
                                            >
                                                <SlideIcon size={18} />
                                            </div>

                                            {/* Sidebar Text */}
                                            <div className="flex flex-col justify-center">
                                                <span className={`text-[10px] font-black uppercase tracking-wider leading-tight transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-slate-800 dark:text-white/80 group-hover:text-black dark:group-hover:text-white'
                                                    }`}>
                                                    {firstLine}
                                                </span>
                                                {secondLine && (
                                                    <span className={`text-[10px] font-bold uppercase tracking-wider leading-tight transition-colors duration-300 ${isActive ? 'text-secondary/80' : 'text-slate-500 dark:text-white/40 group-hover:text-slate-700 dark:group-hover:text-white/60'
                                                        }`}>
                                                        {secondLine}
                                                    </span>
                                                )}
                                            </div>
                                        </button>

                                        {/* Bottom line indicator */}
                                        <div className="mt-2.5 flex items-center w-full">
                                            <div className={`h-[1px] transition-all duration-700 ease-in-out ${isActive ? 'bg-secondary w-full' : 'bg-slate-300 dark:bg-white/10 w-4/5'
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
                            className="col-span-12 md:col-span-8 lg:col-span-8 flex flex-col items-center text-center justify-center animate-[slideUp_0.8s_ease-out_forwards] relative z-10"
                        >
                            {/* Soft glowing backdrop behind text for extreme contrast */}
                            <div className="absolute inset-0 bg-white/60 dark:bg-black/40 blur-3xl rounded-full -z-10 w-4/5 h-[120%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none" />
                            {/* Badge */}
                            <p className="text-secondary font-bold tracking-widest uppercase mb-2 text-[10px] sm:text-xs inline-flex items-center gap-3 drop-shadow-sm">
                                <span className="w-6 sm:w-8 h-[1px] bg-secondary/60"></span>
                                ✦ {slide.badge} ✦
                                <span className="w-6 sm:w-8 h-[1px] bg-secondary/60"></span>
                            </p>

                            {/* Slide Title */}
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4 leading-[1.15] dark:drop-shadow-xl max-w-4xl"
                                dangerouslySetInnerHTML={{ __html: slide.title }}
                            />

                            {/* Slide Description */}
                            <p className="text-xs sm:text-sm md:text-base text-slate-800 dark:text-white/85 max-w-xl mb-5 sm:mb-6 leading-relaxed font-bold dark:font-medium dark:drop-shadow-md">
                                {slide.description}
                            </p>

                            {/* Button CTA */}
                            <Link
                                to={slide.ctaLink}
                                className="inline-flex items-center gap-4 bg-secondary text-white font-nav font-bold text-xs uppercase tracking-widest rounded-full pl-7 pr-2 py-2.5 transition-all duration-500 hover:shadow-[0_12px_35px_-8px_rgba(234,88,12,0.7)] hover:-translate-y-1 group relative overflow-hidden"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-out" />
                                <span className="relative z-10">{slide.ctaText}</span>
                                <span className="relative z-10 w-9 h-9 rounded-full bg-white text-secondary flex items-center justify-center group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                    <ArrowUpRight size={14} strokeWidth={2.5} />
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Bottom Slider Nav Arrows & Progress (Premium Frosted glass) */}
                <div className="absolute bottom-6 right-6 md:right-12 lg:right-16 z-20 flex items-center gap-4 bg-black/30 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-2xl">
                    <button
                        onClick={goPrev}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-primary hover:scale-110 text-white transition-all duration-300 cursor-pointer"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <div className="flex gap-2.5 items-center px-1">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className="group p-1 cursor-pointer focus:outline-none"
                                aria-label={`Go to slide ${idx + 1}`}
                            >
                                <div className={`h-1.5 rounded-full transition-all duration-500 ease-out ${idx === currentIndex ? 'bg-secondary w-8 shadow-[0_0_10px_rgba(234,88,12,0.6)]' : 'bg-white/30 w-1.5 group-hover:bg-white/80 group-hover:w-3'
                                    }`} />
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={goNext}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-primary hover:scale-110 text-white transition-all duration-300 cursor-pointer"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>




        </section>
    );
};

export default HeroSection;