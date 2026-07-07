import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUpRight } from 'lucide-react';

const posts = [
    {
        title: 'How BIPV is changing the future of commercial real estate',
        category: 'News',
        image: '/images/quick-easy-installation-solar-panels.jpg',
        date: '02 July 2026',
        desc: 'Explore how building-integrated photovoltaics are revolutionizing urban architecture and property valuations across major cities.',
    },
    {
        title: 'Top 5 Design Considerations for Integrated Solar Facades',
        category: 'Tech Insight',
        image: '/images/smart-integration-solar-panels.jpg',
        date: '28 June 2026',
        desc: 'A comprehensive guide for architects planning to implement solar glass technologies without compromising on aesthetic appeal.',
    },
    {
        title: 'Understanding Yield Performance in Modern Solar Glass',
        category: 'Research',
        image: '/images/specialized-bipv-solar-consultation.jpg',
        date: '15 June 2026',
        desc: 'Deep dive into the analytics of energy generation versus traditional grid dependence in contemporary smart structures.',
    },
    {
        title: 'Decarbonizing Cities: The Role of BIPV in Smart Grid Networks',
        category: 'Grid Integration',
        image: '/images/roi-and-feasibility-analysis.jpg',
        date: '08 June 2026',
        desc: 'How architectural solar surfaces serve as distributed energy nodes, feeding clean, predictable power directly into local municipal microgrids.',
    },
    {
        title: 'Next-Gen Tinted Photovoltaics: Merging Color & Efficiency',
        category: 'Materials',
        image: '/images/electrical-system-procurement-1.jpg',
        date: '28 May 2026',
        desc: 'Explaining the materials science breakthrough allowing custom tinted BIPV glazing to maintain over 18% conversion efficiency while meeting color guidelines.',
    },
];

const slugify = (title) =>
    title.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

const BlogSection = () => {
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
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const reveal = (delay = 0) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    });

    return (
        <section ref={sectionRef} className="py-12 sm:py-16 bg-background relative overflow-hidden transition-colors duration-500 border-b border-border">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 motion-safe:animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/3" />

            {/* Mandated Company Logo Watermark in Background */}
            <div className="absolute top-1/2 left-1/2 pointer-events-none select-none z-0 transform-gpu motion-safe:animate-[breathe_20s_ease-in-out_infinite]">
                <img 
                    src="/logo.png" 
                    alt="Konara Logo Watermark" 
                    className="w-[450px] opacity-[0.06] dark:opacity-[0.09]" 
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">

                {/* Standardized Premium Header Sequence: Heading Left, Paragraph Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12" style={reveal(0)}>
                    <div className="lg:col-span-6">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 mb-4 shadow-sm backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            <span className="text-secondary font-bold tracking-widest uppercase text-xs font-nav">
                                Latest Insights
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary dark:text-white leading-[1.1] tracking-tight">
                            The Future of <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500">
                                Solar Architecture.
                            </span>
                        </h2>
                    </div>

                    <div className="lg:col-span-6 flex flex-col justify-between h-full lg:pt-14">
                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                            Stay ahead of the curve with expert perspectives on BIPV technology, sustainable design trends, and our latest global project milestones.
                        </p>
                        <Link
                            to="/blog"
                            className="group inline-flex items-center gap-3.5 text-primary dark:text-white font-bold uppercase tracking-widest text-xs hover:text-secondary dark:hover:text-blue-400 transition-colors duration-300 mr-auto"
                        >
                            <span>View All Articles</span>
                            <div className="w-10 h-10 rounded-full bg-secondary dark:bg-blue-500 text-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45 shadow-[0_0_10px_rgba(227,77,42,0.3)] group-hover:shadow-[0_0_15px_rgba(227,77,42,0.6)]">
                                <ArrowUpRight size={16} />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* 3-Column Magazine Card Grid (Compact visual hover slide-up approach) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto">
                    {posts.slice(0, 3).map((post, idx) => (
                        <Link
                            key={post.title}
                            to={`/blog/${slugify(post.title)}`}
                            style={reveal(150 + idx * 80)}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-200/40 dark:border-white/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(227,77,42,0.15)] dark:hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)] block"
                        >
                            {/* Background Image with Zoom */}
                            <img
                                src={post.image}
                                alt={post.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                            />
                            
                            {/* Glassmorphic Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 group-hover:from-slate-950 group-hover:via-slate-950/85 transition-all duration-500 z-10" />
                            
                            {/* Dynamic Hover Glow Rings inside card */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_bottom,rgba(227,77,42,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.2),transparent_60%)] transition-opacity duration-700 pointer-events-none z-10" />

                            {/* Floating Category Tag */}
                            <div className="absolute top-4 left-4 z-20">
                                <div className="bg-secondary/90 backdrop-blur-md text-white px-3.5 py-1 rounded-full shadow-md text-[8px] font-black uppercase tracking-widest">
                                    {post.category}
                                </div>
                            </div>

                            {/* Slide-up Content Details Container */}
                            <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end transform translate-y-7 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                <div className="flex items-center gap-1.5 text-secondary dark:text-blue-400 mb-2">
                                    <Calendar size={12} />
                                    <span className="text-[9px] font-bold tracking-widest uppercase">{post.date}</span>
                                </div>

                                <h4 className="font-black text-base sm:text-lg text-white leading-[1.3] mb-2 tracking-tight group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {post.title}
                                </h4>

                                {/* Description that crossfades and expands on hover */}
                                <p className="text-white/70 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                                    {post.desc}
                                </p>

                                <div className="flex items-center gap-1.5 text-[10px] text-white/90 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1">
                                    <span>Read Article</span>
                                    <ArrowUpRight size={12} className="transition-transform duration-500 group-hover:rotate-45" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes breathe {
                    0%, 100% { transform: translate(-50%, -50%) scale(1.04); }
                    50% { transform: translate(-50%, -50%) scale(1.10); }
                }
            `}</style>
        </section>
    );
};

export default BlogSection;