import { useInView } from '../hooks/useInView';
import { Zap, BarChart2, Globe } from 'lucide-react';

const features = [
    { icon: <Zap size={17} />, title: 'Fast Delivery', desc: 'Quick turnarounds without compromising quality' },
    { icon: <BarChart2 size={17} />, title: 'Data-Driven', desc: 'Every decision backed by insights and analytics' },
    { icon: <Globe size={17} />, title: 'Global Reach', desc: 'Serving clients in India, Qatar & UAE' },
];

export default function About() {
    const [ref, inView] = useInView();

    return (
        <section id="about" ref={ref} className="relative py-28">
            {/* Divider top */}
            <div className="divider mb-0 absolute top-0 left-8 right-8" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Visual side */}
                    <div className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div
                            className="card-surface rounded-2xl p-10 text-center relative overflow-hidden"
                        >
                            {/* Corner accent */}
                            <div
                                className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
                                style={{ background: 'radial-gradient(circle at top right, rgba(37,99,235,0.8), transparent)' }}
                            />
                            <div className="text-6xl mb-5">💡</div>
                            <h3 className="font-outfit font-bold text-white text-lg mb-2">Innovation First</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Founded in 2022 with a mission to revolutionize digital marketing in Kerala and beyond.
                            </p>

                            {/* Bottom stat bar */}
                            <div
                                className="mt-8 pt-6 grid grid-cols-2 gap-4"
                                style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}
                            >
                                {[
                                    { val: '500+', lbl: 'Projects' },
                                    { val: '2022', lbl: 'Founded' },
                                ].map(s => (
                                    <div key={s.lbl}>
                                        <div className="font-outfit font-extrabold text-white text-xl">{s.val}</div>
                                        <div className="text-xs text-slate-500 font-medium">{s.lbl}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating badges */}
                        <div
                            className="absolute -top-5 -right-5 card-surface rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm font-semibold text-white"
                            style={{ animation: 'float 7s ease-in-out infinite' }}
                        >
                            <span>🏆</span> Award-Winning
                        </div>
                        <div
                            className="absolute -bottom-5 -left-5 card-surface rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm font-semibold text-white"
                            style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '2s' }}
                        >
                            <span>📍</span> Kannur & Kochi
                        </div>
                    </div>

                    {/* Text side */}
                    <div className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="section-tag">About Raim Innovations</div>
                        <h2 className="font-outfit font-extrabold text-4xl md:text-[2.7rem] text-white mb-5 leading-tight">
                            Empowering businesses with{' '}
                            <span className="gradient-text">smart digital solutions</span>
                        </h2>
                        <p className="text-slate-400 leading-relaxed mb-4 text-[15px]">
                            Founded in 2022, Raim Innovations set out with a bold goal: to revolutionize digital
                            marketing in Kerala. We specialize in data-driven, outcome-focused strategies that help
                            businesses across e-commerce, retail, logistics, and beyond reach their full potential.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-8 text-[15px]">
                            From our bases in Kannur and Kochi, we serve clients across India, Qatar, and the UAE —
                            delivering everything from high-performance web applications to strategic marketing campaigns.
                        </p>

                        <div className="flex flex-col gap-3 mb-8">
                            {features.map((f) => (
                                <div
                                    key={f.title}
                                    className="flex items-start gap-4 card-surface rounded-xl p-4 transition-all duration-300 hover:border-blue-500/25 cursor-default"
                                >
                                    <div
                                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-400"
                                        style={{ background: 'rgba(37,99,235,0.1)' }}
                                    >
                                        {f.icon}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white text-[14px]">{f.title}</div>
                                        <div className="text-slate-400 text-sm mt-0.5">{f.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href="#contact" className="btn-primary">Learn More About Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
