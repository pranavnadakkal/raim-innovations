import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (ts) => {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
}

function StatCard({ target, suffix = '', label, started }) {
    const val = useCountUp(target, 1800, started);
    const display = target === 2022 ? (started ? '2022' : '0') : `${val}${suffix}`;
    return (
        <div className="flex flex-col items-center px-6 py-4 text-center">
            <div className="font-outfit font-extrabold text-2xl text-white tabular-nums">{display}</div>
            <div className="text-xs text-slate-400 mt-1 font-medium tracking-wide">{label}</div>
        </div>
    );
}




// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
    const [statsStarted, setStatsStarted] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setStatsStarted(true); },
            { threshold: 0.3 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center pt-28 pb-16">
            <div className="max-w-4xl mx-auto px-6 w-full">

                {/* ── Left ─────────────────────────────────────── */}
                <div className="relative z-10">
                    {/* Eyebrow */}
                    <div
                        className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                        style={{
                            background: 'rgba(37,99,235,0.1)',
                            border: '1px solid rgba(59,130,246,0.3)',
                            color: '#7DD3FC',
                            animation: 'fadeIn 0.6s ease-out 0.2s both',
                        }}
                    >
                        <span
                            className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"
                            style={{ animation: 'pulse 2s ease-in-out infinite' }}
                        />
                        Best IT Service Provider · Kannur, Kerala
                    </div>

                    {/* Headline */}
                    <h1
                        className="font-outfit font-extrabold leading-[1.06] mb-6"
                        style={{
                            fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
                            animation: 'slideUp 0.7s ease-out 0.3s both',
                        }}
                    >
                        <span className="text-white">Connecting</span><br />
                        <span className="text-white">the dots</span><br />
                        <span className="gradient-text">for you.</span>
                    </h1>

                    <p
                        className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
                        style={{ animation: 'slideUp 0.7s ease-out 0.45s both' }}
                    >
                        From digital marketing to real estate — we deliver data-driven,
                        outcome-focused solutions that transform your business across
                        India, Qatar, and UAE.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mb-12" style={{ animation: 'slideUp 0.7s ease-out 0.6s both' }}>
                        <a href="#services" className="btn-primary px-7 py-3.5 text-[15px]">
                            Explore Services <ArrowRight size={17} />
                        </a>
                        <a href="#contact" className="btn-outline px-7 py-3.5 text-[15px]">
                            Talk to Us
                        </a>
                    </div>

                    {/* Stats */}
                    <div
                        className="card-surface rounded-xl overflow-hidden inline-flex"
                        style={{ animation: 'slideUp 0.7s ease-out 0.75s both' }}
                    >
                        {[
                            { target: 500, suffix: '+', label: 'Projects Delivered' },
                            { target: 3, suffix: '', label: 'Countries Served' },
                            { target: 8, suffix: '+', label: 'Service Divisions' },
                            { target: 2022, suffix: '', label: 'Est.' },
                        ].map((s, i, arr) => (
                            <div
                                key={s.label}
                                style={i < arr.length - 1 ? { borderRight: '1px solid rgba(59,130,246,0.12)' } : {}}
                            >
                                <StatCard {...s} started={statsStarted} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <a
                href="#about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
            >
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold">Scroll</span>
                <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5">
                    <div
                        className="w-1 h-2 bg-blue-500 rounded-full"
                        style={{ animation: 'slideUp 1.5s ease-in-out infinite' }}
                    />
                </div>
            </a>
        </section>
    );
}
