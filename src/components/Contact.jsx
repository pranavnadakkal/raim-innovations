import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const contacts = [
    { icon: <MapPin size={16} />, title: 'Head Office', detail: '3rd Floor Market Place Building\nTaliparamba, Kannur, Kerala' },
    { icon: <MapPin size={16} />, title: 'Branch Office', detail: 'Kadavathara, Kochi, Kerala' },
    { icon: <Phone size={16} />, title: 'Phone', detail: '+91 85168 48888  |  +91 88596 61666', href: 'tel:+918516848888' },
    { icon: <Mail size={16} />, title: 'Email', detail: 'info@raiminnovations.com', href: 'mailto:info@raiminnovations.com' },
];

const socials = [
    { label: 'f', title: 'Facebook', href: '#' },
    { label: 'in', title: 'LinkedIn', href: '#' },
    { label: '▶', title: 'Instagram', href: '#' },
    { label: '▶', title: 'YouTube', href: '#' },
];

const serviceOptions = [
    'Web Development', 'Digital Marketing', 'SEO Services', 'Social Media Management',
    'Graphic Designing', 'Advertising', 'Barcode Solutions', 'Tourism',
    'Interior Design', 'Real Estate', 'Education', 'Back Office Work',
];

export default function Contact() {
    const [ref, inView] = useInView();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="contact" ref={ref} className="relative py-28">
            <div className="divider absolute top-0 left-8 right-8" />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 60% 60%, rgba(37,99,235,0.05) 0%, transparent 60%)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="section-tag mx-auto w-fit">Get In Touch</div>
                    <h2 className="font-outfit font-extrabold text-4xl md:text-[2.7rem] text-white mt-2 mb-3">
                        Let's build something <span className="gradient-text">great together</span>
                    </h2>
                    <p className="text-slate-400">Reach out and we'll get back to you within 24 hours</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Info side */}
                    <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <h3 className="font-outfit font-bold text-white text-lg mb-6">Contact Information</h3>
                        <div className="flex flex-col gap-5 mb-8">
                            {contacts.map((c, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div
                                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-400"
                                        style={{ background: 'rgba(37,99,235,0.1)' }}
                                    >
                                        {c.icon}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white text-[13px] mb-0.5">{c.title}</div>
                                        {c.href
                                            ? <a href={c.href} className="text-slate-400 text-sm hover:text-blue-400 transition-colors whitespace-pre-line">{c.detail}</a>
                                            : <p className="text-slate-400 text-sm whitespace-pre-line">{c.detail}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social links */}
                        <div className="flex gap-2 flex-wrap">
                            {[
                                { label: 'FB', title: 'Facebook' },
                                { label: 'in', title: 'LinkedIn' },
                                { label: 'IG', title: 'Instagram' },
                                { label: 'YT', title: 'YouTube' },
                            ].map(s => (
                                <a
                                    key={s.title}
                                    href="#"
                                    aria-label={s.title}
                                    className="w-10 h-10 card-surface rounded-lg flex items-center justify-center text-xs font-bold text-slate-400 hover:text-white hover:border-blue-500/40 transition-all hover:scale-105"
                                >
                                    {s.label}
                                </a>
                            ))}
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/918516848888"
                                aria-label="WhatsApp"
                                className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all hover:scale-105 text-xs font-bold"
                                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                            >
                                WA
                            </a>
                        </div>
                    </div>

                    {/* Form side */}
                    <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <form onSubmit={handleSubmit} className="card-surface rounded-2xl p-8 flex flex-col gap-5">
                            <div>
                                <h3 className="font-outfit font-bold text-white text-lg">Send us a message</h3>
                                <p className="text-slate-500 text-sm mt-1">We'll respond within one business day.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {['First Name', 'Last Name'].map(label => (
                                    <div key={label}>
                                        <label className="block text-xs font-semibold text-slate-400 mb-1.5 tracking-wide">{label}</label>
                                        <input
                                            type="text"
                                            placeholder={label === 'First Name' ? 'John' : 'Doe'}
                                            className="w-full rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-all"
                                            style={{
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(59,130,246,0.15)',
                                            }}
                                            onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(59,130,246,0.15)'}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-400 mb-1.5 tracking-wide">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-all"
                                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(59,130,246,0.15)' }}
                                    onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(59,130,246,0.15)'}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-400 mb-1.5 tracking-wide">Service Interested In</label>
                                <select
                                    className="w-full rounded-lg px-4 py-2.5 text-sm text-slate-300 focus:outline-none transition-all"
                                    style={{ background: 'rgba(10,22,40,0.9)', border: '1px solid rgba(59,130,246,0.15)', appearance: 'none' }}
                                    onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(59,130,246,0.15)'}
                                >
                                    <option value="">Select a service...</option>
                                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-400 mb-1.5 tracking-wide">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-all resize-none"
                                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(59,130,246,0.15)' }}
                                    onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(59,130,246,0.15)'}
                                />
                            </div>

                            <button type="submit" className="btn-primary justify-center w-full py-3.5 text-[15px]">
                                {submitted
                                    ? <><span>✓</span> Message Sent!</>
                                    : <><span>Send Message</span><Send size={15} /></>
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
