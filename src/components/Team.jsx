import { useInView } from '../hooks/useInView';

const members = [
    { initials: 'RP', name: 'Ranjith Padavil', role: 'Founder & Managing Director', desc: "Visionary leader driving Raim's mission to transform digital landscapes across South Asia and the Middle East.", colorFrom: '#1D4ED8', colorTo: '#2563EB' },
    { initials: 'RK', name: 'Ranjini Kevees', role: 'Director', desc: "Strategic operations leader ensuring seamless execution across all Raim's business divisions and client engagements.", colorFrom: '#0369A1', colorTo: '#0EA5E9' },
    { initials: 'MH', name: 'Mahesh Hohan', role: 'Creative Director', desc: "Award-level creative talent behind Raim's visual identity, branding campaigns, and graphic design excellence.", colorFrom: '#4338CA', colorTo: '#6366F1' },
    { initials: 'RP', name: 'Rohith P', role: 'Operations Head', desc: 'Operational backbone of Raim, coordinating across teams and geographies to deliver projects on time, every time.', colorFrom: '#0D9488', colorTo: '#14B8A6' },
];

export default function Team() {
    const [ref, inView] = useInView();

    return (
        <section id="team" ref={ref} className="relative py-28">
            <div className="divider absolute top-0 left-8 right-8" />
            <div className="max-w-7xl mx-auto px-6">
                <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="section-tag mx-auto w-fit">The Team</div>
                    <h2 className="font-outfit font-extrabold text-4xl md:text-[2.7rem] text-white mt-2 mb-3">
                        Meet the <span className="gradient-text">Minds</span> Behind Raim
                    </h2>
                    <p className="text-slate-400">A passionate team of innovators, creators, and strategists</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {members.map((m, i) => (
                        <div
                            key={m.name}
                            className="card-surface rounded-xl p-7 flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-300"
                            style={{ animation: inView ? `slideUp 0.5s ease-out ${i * 0.1}s both` : 'none' }}
                        >
                            {/* Professional avatar */}
                            <div
                                className="w-18 h-18 rounded-xl flex items-center justify-center font-outfit font-black text-2xl text-white mb-5 transition-shadow duration-300 group-hover:shadow-lg"
                                style={{
                                    width: 72, height: 72,
                                    background: `linear-gradient(135deg, ${m.colorFrom}, ${m.colorTo})`,
                                    boxShadow: `0 4px 20px ${m.colorFrom}35`,
                                }}
                            >
                                {m.initials}
                            </div>
                            <h3 className="font-outfit font-bold text-white text-[15px] mb-1">{m.name}</h3>
                            <span
                                className="text-xs font-semibold px-3 py-1 rounded-full mb-3"
                                style={{ background: `${m.colorFrom}15`, color: m.colorTo }}
                            >
                                {m.role}
                            </span>
                            <p className="text-slate-400 text-sm leading-relaxed mb-5">{m.desc}</p>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:scale-105"
                                style={{ background: 'rgba(37,99,235,0.12)', color: '#60A5FA' }}
                            >
                                in
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
