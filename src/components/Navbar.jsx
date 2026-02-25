import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import RaimLogo from './RaimLogo';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Team' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-strong shadow-[0_1px_0_rgba(59,130,246,0.15)] py-2' : 'py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <RaimLogo size={36} gradId="navLogo" />
                    </div>
                    <div className="leading-none">
                        <div className="font-outfit font-extrabold text-white text-[17px] tracking-widest">RAIM</div>
                        <div className="text-[9px] font-semibold tracking-[0.35em] text-blue-400 uppercase">Innovations</div>
                    </div>
                </a>

                {/* Desktop nav links */}
                <ul className="hidden lg:flex items-center gap-1">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-md hover:bg-blue-500/5 transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right side */}
                <div className="hidden lg:flex items-center gap-3">
                    <a href="#contact" className="btn-primary text-sm px-5 py-2.5">
                        Get Started
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden glass-strong border-t transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen py-4' : 'max-h-0'
                    }`}
                style={{ borderTopColor: 'rgba(59,130,246,0.1)' }}
            >
                <div className="max-w-7xl mx-auto px-6 flex flex-col gap-1">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-blue-500/5 rounded-lg transition-all"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="btn-primary text-sm mt-2 justify-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
}
