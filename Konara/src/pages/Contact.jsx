import { Helmet } from 'react-helmet-async';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, Map as MapIcon, ArrowRight } from 'lucide-react';

const Contact = () => {
    const bgRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            const response = await fetch("https://formsubmit.co/ajax/iamworkapi@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', category: '', message: '' });
                // Note: Popup is manually closed by the user
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    useEffect(() => {
        // High-performance parallax scroll effect for the Hero Section
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
                <title>Contact Us – Solastra BIPV</title>
                <meta name="description" content="Get in touch with Solastra for your BIPV requirements." />
            </Helmet>

            {/* Parallax Hero Section (Matching About/Projects) */}
            <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center overflow-hidden">
                <div
                    ref={bgRef}
                    className="absolute left-0 right-0 w-full"
                    style={{
                        height: '130%',
                        top: '-15%',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        willChange: 'transform'
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/50 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-900/30" />

                <div className="relative z-10 text-center px-4 mt-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4 drop-shadow-md">
                        Get in Touch
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-slate-700 dark:text-white/90 text-sm md:text-base font-bold">
                        <Link to="/" className="hover:text-primary dark:hover:text-secondary transition-colors">Home</Link>
                        <span className="text-slate-400 dark:text-white/50">/</span>
                        <span>Contact</span>
                    </div>
                </div>
            </section>

            {/* Advanced Geometric Bento-Box Layout */}
            <section className="py-10 md:py-12 px-4 sm:px-8 max-w-[1400px] mx-auto w-full relative z-10 -mt-24">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8">

                    {/* LEFT COLUMN: Modular Contact Info (Bento Grid) */}
                    <div className="xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6">

                        {/* Address Box */}
                        <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl group hover:border-secondary/30 transition-colors sm:col-span-2 xl:col-span-1">
                            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform duration-500">
                                <MapPin size={28} />
                            </div>
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2">Our Location</h3>
                            <p className="text-xl sm:text-2xl font-black text-primary dark:text-white leading-tight">
                                III-D-41, Ashok Nagar,<br />Nehru Nagar III, Nehru Nagar,<br />Ghaziabad, UP 201001
                            </p>
                        </div>

                        {/* Phone Box */}
                        <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl group hover:border-blue-500/30 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2">Contact Us</h3>
                            <p className="text-lg font-black text-primary dark:text-white group-hover:text-blue-500 transition-colors">
                                +91-9560206699
                            </p>
                        </div>

                        {/* Email Box */}
                        <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl group hover:border-amber-500/30 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2">Email Address</h3>
                            <p className="text-lg font-black text-primary dark:text-white group-hover:text-amber-500 transition-colors">
                                info@solastra.in
                            </p>
                        </div>

                        {/* Office Hours Box */}
                        <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl group hover:border-emerald-500/30 transition-colors sm:col-span-2 xl:col-span-1">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Clock size={24} />
                                    </div>
                                    <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2">Office Hours</h3>
                                    <p className="text-base font-black text-primary dark:text-white mb-1">
                                        Mon - Fri: 9:00 AM - 6:00 PM
                                    </p>
                                    <p className="text-sm font-bold text-slate-400 dark:text-slate-500">
                                        Sat - Sun: Closed
                                    </p>
                                </div>
                                <ArrowRight className="text-slate-300 dark:text-slate-700 -rotate-45" size={32} />
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Contact Form */}
                    <div className="xl:col-span-7">
                        <div className="bg-white dark:bg-[#0a111a] backdrop-blur-3xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl h-full flex flex-col justify-center relative overflow-hidden group">

                            {/* Subtle Ambient Glow */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                    <span className="text-secondary font-bold tracking-widest uppercase text-xs">
                                        Send Us a Message
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary dark:text-white mb-6 tracking-tight">
                                    Have questions about our solar solutions?
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 font-medium text-lg mb-10 leading-relaxed max-w-xl">
                                    Fill out the form below and our engineering team will get back to you shortly to discuss your BIPV requirements.
                                </p>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2.5">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm font-medium text-primary dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="your@email.com"
                                                className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm font-medium text-primary dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2.5">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Phone Number *</label>
                                            <div className="flex gap-3">
                                                <span className="bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm text-slate-500 font-bold shrink-0 flex items-center justify-center">
                                                    +91
                                                </span>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="9876543210"
                                                    className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm font-medium text-primary dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Service Category *</label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm font-medium text-slate-600 dark:text-white/70 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all appearance-none cursor-pointer"
                                                required
                                            >
                                                <option value="" disabled className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Select Category</option>
                                                <option value="commercial" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Commercial BIPV</option>
                                                <option value="residential" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Residential Solutions</option>
                                                <option value="consulting" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Design Consulting</option>
                                                <option value="other" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2.5">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="4"
                                            placeholder="Tell us more about your requirements..."
                                            className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm font-medium text-primary dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                                            required
                                        ></textarea>
                                    </div>
                                    
                                    {status === 'error' && (
                                        <p className="text-red-500 text-sm font-bold text-center">Something went wrong. Please try again.</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-gradient-to-r from-secondary to-amber-500 text-white font-black uppercase tracking-[0.2em] text-sm py-5 rounded-2xl shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mt-8 disabled:opacity-70 disabled:hover:translate-y-0"
                                    >
                                        <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                                        <Send size={18} className={status === 'submitting' ? 'animate-pulse' : ''} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced UI Map Section */}
            <section className="pt-0 pb-12 md:pb-16 px-4 sm:px-8 max-w-[1400px] mx-auto w-full relative z-10">
                
                {/* Decorative Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative w-full h-[400px] md:h-[500px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group bg-slate-900">
                    
                    {/* Floating Overlay Badge */}
                    <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 pointer-events-none">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                            </span>
                            <span className="text-white font-bold tracking-[0.2em] uppercase text-[10px]">
                                Global Headquarters
                            </span>
                        </div>
                    </div>

                    <iframe
                        src="https://maps.google.com/maps?q=III-D-41,%20Ashok%20Nagar,%20Nehru%20Nagar%20III,%20Ghaziabad,%20Uttar%20Pradesh%20201001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[1.5s]"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    {/* Gradient Overlay for blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-20 transition-opacity duration-1000" />
                </div>
            </section>

            {/* Success Popup Modal */}
            {status === 'success' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
                    <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_0_80px_rgba(234,88,12,0.2)] text-center max-w-md w-full relative overflow-hidden animate-[fade-in_0.3s_ease-out_forwards] translate-y-0">
                        
                        {/* Decorative Top Line */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-secondary to-amber-500" />
                        
                        <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6 shadow-inner">
                            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                                <Send className="text-white ml-1" size={24} />
                            </div>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">Message Sent!</h3>
                        <p className="text-slate-400 font-medium text-base leading-relaxed mb-8">
                            We have received your requirements and our team will connect with you shortly.
                        </p>
                        
                        <button 
                            onClick={() => setStatus('')} 
                            className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-xs transition-colors border border-white/10"
                        >
                            Close Window
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
