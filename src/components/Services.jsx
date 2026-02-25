import { useState } from 'react';
import { useInView } from '../hooks/useInView';

// Service accent colors — now professional blue/teal spectrum instead of neon
const services = [
    { emoji: '🌐', title: 'Web Development', desc: 'Static, dynamic, and e-commerce websites tailored for every business scale.', tags: ['Static', 'Dynamic', 'E-Commerce'], category: 'digital', color: '#3B82F6' },
    { emoji: '📈', title: 'Digital Marketing', desc: 'Strategic campaigns across search, social, and display channels to maximize ROI.', tags: ['SEO', 'PPC', 'Analytics'], category: 'digital', color: '#0EA5E9' },
    { emoji: '🔍', title: 'SEO Services', desc: 'Boost your rankings with 20+ extra backlinks, keyword strategies, and on-page optimization.', tags: ['On-Page', 'Backlinks', 'Audit'], category: 'digital', color: '#14B8A6' },
    { emoji: '📱', title: 'Social Media Management', desc: 'Consistent, engaging content strategy across all major platforms to grow your audience.', tags: ['Instagram', 'Facebook', 'LinkedIn'], category: 'digital', color: '#6366F1' },
    { emoji: '🎨', title: 'Graphic Designing', desc: 'Stunning visual identities, marketing collaterals, and brand assets that stand out.', tags: ['Branding', 'Print', 'Digital'], category: 'creative', color: '#8B5CF6' },
    { emoji: '📣', title: 'Advertising', desc: 'Creative ad campaigns across print, digital, and outdoor media to amplify your message.', tags: ['Print Ads', 'Outdoor', 'Digital Ads'], category: 'creative', color: '#64748B' },
    { emoji: '🏷️', title: 'Barcode Solutions', desc: 'End-to-end barcode and QR code solutions for inventory management and retail.', tags: ['QR Codes', 'Inventory', 'Retail'], category: 'business', color: '#0D9488' },
    { emoji: '✈️', title: 'Tourism', desc: "Curated travel packages and tourism solutions connecting travellers to Kerala's destinations.", tags: ['Packages', 'Bookings', 'Kerala'], category: 'business', color: '#2563EB' },
    { emoji: '🏠', title: 'Interior Design', desc: 'Transforming spaces with innovative interior design for homes, offices, and commercial properties.', tags: ['Residential', 'Commercial', 'Office'], category: 'business', color: '#7C3AED' },
    { emoji: '🏢', title: 'Real Estate', desc: 'Comprehensive real estate services helping buyers, sellers, and investors navigate the market.', tags: ['Buy', 'Sell', 'Invest'], category: 'business', color: '#1D4ED8' },
    { emoji: '🎓', title: 'Education', desc: 'Educational programs and training solutions empowering individuals with digital skills.', tags: ['Training', 'Courses', 'Skills'], category: 'business', color: '#0369A1' },
    { emoji: '💼', title: 'Back Office Work', desc: 'Reliable back-office operations, data entry, customer support, and BPO services.', tags: ['BPO', 'Data Entry', 'Support'], category: 'business', color: '#475569' },
];

const tabs = [
    { key: 'all', label: 'All Services' },
    { key: 'digital', label: 'Digital' },
    { key: 'creative', label: 'Creative' },
    { key: 'business', label: 'Business' },
];

export default function Services() {
    const [active, setActive] = useState('all');
    const [ref, inView] = useInView();
    const filtered = active === 'all' ? services : services.filter(s => s.category === active);

    return (
        <section id="services" ref={ref} className="relative py-28">
            <div className="divider absolute top-0 left-8 right-8" />
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="section-tag mx-auto w-fit">What We Do</div>
                    <h2 className="font-outfit font-extrabold text-4xl md:text-[2.7rem] text-white mt-2 mb-4">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-slate-400 text-base max-w-xl mx-auto">
                        Comprehensive solutions across IT, creative, and business domains
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-2 mb-10 flex-wrap">
                    {tabs.map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActive(tab.key)}
                            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${active === tab.key ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                                }`}
                            style={
                                active === tab.key
                                    ? { background: 'linear-gradient(135deg, #2563EB, #1D4ED8)', boxShadow: '0 4px 15px rgba(37,99,235,0.3)' }
                                    : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(59,130,246,0.12)' }
                            }
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {filtered.map((s, i) => (
                        <div
                            key={s.title}
                            className="card-surface rounded-xl p-6 group hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden"
                            style={{ animation: inView ? `slideUp 0.5s ease-out ${i * 0.05}s both` : 'none' }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = `${s.color}35`;
                                e.currentTarget.style.boxShadow = `0 8px 30px ${s.color}12`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.12)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Subtle corner glow */}
                            <div
                                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(circle at top right, ${s.color}18, transparent)` }}
                            />
                            {/* Icon */}
                            <div
                                className="w-11 h-11 rounded-lg flex items-center justify-center text-xl mb-4 transition-transform group-hover:scale-110 duration-300"
                                style={{ background: `${s.color}15` }}
                            >
                                {s.emoji}
                            </div>
                            <h3 className="font-outfit font-bold text-white text-[15px] mb-2 leading-snug">{s.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {s.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                                        style={{ background: `${s.color}12`, color: s.color }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href="#contact"
                                className="text-sm font-semibold flex items-center gap-1 transition-all hover:gap-2"
                                style={{ color: s.color }}
                            >
                                Learn More <span className="transition-all">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
