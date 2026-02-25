import { useInView } from '../hooks/useInView';

const reasons = [
    { num: '01', title: 'Multi-Industry Expertise', desc: 'From IT and creative services to real estate and tourism — cross-domain expertise on every project.' },
    { num: '02', title: 'Outcome-Driven Approach', desc: 'We focus on measurable results. Every campaign, website, and solution is built to deliver real business impact.' },
    { num: '03', title: 'International Presence', desc: 'Strategically positioned across India, Qatar, and UAE to serve businesses with global ambitions.' },
    { num: '04', title: 'WhatsApp-First Support', desc: "Instant access to our team — because your time matters and problems don't wait." },
];

export default function WhyUs() {
    const [ref, inView] = useInView();

    return (
        <section ref={ref} className="relative py-28">
            <div className="divider absolute top-0 left-8 right-8" />

            {/* Very subtle center glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.04) 0%, transparent 65%)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="section-tag mx-auto w-fit">Why Choose Us</div>
                    <h2 className="font-outfit font-extrabold text-4xl md:text-[2.7rem] text-white mt-2">
                        Built for <span className="gradient-text">results,</span>{' '}
                        designed for <span className="gradient-text-gold">growth</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((r, i) => (
                        <div
                            key={r.num}
                            className="card-surface rounded-xl p-7 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300"
                            style={{ animation: inView ? `slideUp 0.5s ease-out ${i * 0.1}s both` : 'none' }}
                        >
                            <div
                                className="absolute top-0 right-0 w-28 h-28 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                                style={{ background: 'radial-gradient(circle at top right, rgba(37,99,235,0.12), transparent)' }}
                            />
                            {/* Decorative number */}
                            <div
                                className="font-outfit font-black text-6xl leading-none mb-5 select-none"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(59,130,246,0.35), rgba(37,99,235,0.12))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {r.num}
                            </div>
                            <h3 className="font-outfit font-bold text-white text-[15px] mb-2">{r.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>

                            {/* Bottom accent line */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.4), transparent)' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
