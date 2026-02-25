import { useInView } from '../hooks/useInView';

const projects = [
    { emoji: '🌐', title: 'E-Commerce Platform', desc: 'Full-stack web application for a retail chain', tag: 'Web Development', color: '#3B82F6', wide: true },
    { emoji: '📊', title: 'SEO Campaign', desc: '300% traffic increase in 6 months', tag: 'Digital Marketing', color: '#0EA5E9' },
    { emoji: '🎨', title: 'Brand Identity', desc: 'Complete rebranding for a logistics company', tag: 'Graphic Design', color: '#6366F1' },
    { emoji: '✈️', title: 'Tourism Portal', desc: 'Kerala travel booking platform', tag: 'Tourism', color: '#14B8A6' },
    { emoji: '🏠', title: 'Interior Showcase', desc: 'Modern residential spaces designed end-to-end', tag: 'Interior Design', color: '#7C3AED', tall: true },
    { emoji: '📱', title: 'Social Strategy', desc: '10x follower growth for a retail brand', tag: 'Social Media', color: '#2563EB' },
];

export default function Gallery() {
    const [ref, inView] = useInView();

    return (
        <section id="gallery" ref={ref} className="relative py-28">
            <div className="divider absolute top-0 left-8 right-8" />
            <div className="max-w-7xl mx-auto px-6">
                <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="section-tag mx-auto w-fit">Portfolio</div>
                    <h2 className="font-outfit font-extrabold text-4xl md:text-[2.7rem] text-white mt-2 mb-3">
                        Our <span className="gradient-text">Work</span>
                    </h2>
                    <p className="text-slate-400">A glimpse of the projects we're proud of</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[200px]">
                    {projects.map((p, i) => (
                        <div
                            key={p.title}
                            className={`card-surface rounded-xl p-6 flex flex-col justify-between group hover:scale-[1.02] transition-all duration-300 overflow-hidden relative cursor-pointer ${p.wide ? 'col-span-2' : ''} ${p.tall ? 'row-span-2' : ''}`}
                            style={{ animation: inView ? `slideUp 0.5s ease-out ${i * 0.08}s both` : 'none' }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = `${p.color}30`;
                                e.currentTarget.style.boxShadow = `0 12px 40px ${p.color}15`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.12)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(circle at 25% 25%, ${p.color}0e, transparent 55%)` }}
                            />
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{p.emoji}</div>
                            <div>
                                <h4 className="font-outfit font-bold text-white text-sm mb-1">{p.title}</h4>
                                <p className="text-slate-400 text-xs mb-3 leading-relaxed">{p.desc}</p>
                                <span
                                    className="text-xs px-2.5 py-1 rounded-full font-semibold"
                                    style={{ background: `${p.color}12`, color: p.color }}
                                >
                                    {p.tag}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
