import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const AboutHeroSection = () => {
    const bgRef = useRef(null);

    useEffect(() => {
        let frameId;
        
        const handleScroll = () => {
            frameId = requestAnimationFrame(() => {
                if (bgRef.current) {
                    const offset = window.scrollY;
                    // Move the background down at 40% the scroll speed for a smooth parallax effect
                    bgRef.current.style.transform = `translateY(${offset * 0.4}px)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return (
        <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <div
                ref={bgRef}
                className="absolute left-0 right-0 w-full"
                style={{
                    // Make the image slightly taller and offset it so it doesn't show edges when translating
                    height: '130%',
                    top: '-15%',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform'
                }}
            />

            {/* Dark/Light Overlay - left side darker, right side lighter gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/50 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-900/30" />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4 drop-shadow-md">
                    About Us
                </h1>
                <div className="flex items-center justify-center gap-2 text-slate-700 dark:text-white/90 text-sm md:text-base font-bold">
                    <Link to="/" className="hover:text-primary dark:hover:text-secondary transition-colors">Home</Link>
                    <span className="text-slate-400 dark:text-white/50">/</span>
                    <span>About Us</span>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;
