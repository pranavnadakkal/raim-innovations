import RaimLogo from './RaimLogo';

const services1 = ['Web Development', 'Digital Marketing', 'SEO Services', 'Social Media', 'Graphic Design', 'Advertising'];
const services2 = ['Barcode Solutions', 'Tourism', 'Interior Design', 'Real Estate', 'Education', 'Back Office'];
const company = [['About Us', 'about'], ['Our Team', 'team'], ['Gallery', 'gallery'], ['Contact', 'contact']];

export default function Footer() {
    return (
        <footer className="relative" style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.04) 0%, transparent 55%)' }}
            />

            <div className="max-w-7xl mx-auto px-6 py-16 relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <RaimLogo size={36} gradId="footLogo" />
                            <div className="leading-none">
                                <div className="font-outfit font-extrabold text-white text-[17px] tracking-widest">RAIM</div>
                                <div className="text-[9px] font-semibold tracking-[0.35em] text-blue-400 uppercase">Innovations</div>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-5">
                            Connecting the dots for you — IT, creative, and business solutions that drive real growth.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            {['🇮🇳 India', '🇶🇦 Qatar', '🇦🇪 UAE'].map(r => (
                                <span
                                    key={r}
                                    className="text-xs px-2.5 py-1 rounded-full text-slate-400 font-medium"
                                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(59,130,246,0.12)' }}
                                >
                                    {r}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Services 1 */}
                    <div>
                        <h4 className="font-outfit font-bold text-white text-sm mb-4 tracking-wide">Services</h4>
                        <ul className="flex flex-col gap-2">
                            {services1.map(s => (
                                <li key={s}>
                                    <a href="#services" className="text-slate-500 text-sm hover:text-blue-400 transition-colors">{s}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services 2 */}
                    <div>
                        <h4 className="font-outfit font-bold text-white text-sm mb-4 tracking-wide">More Services</h4>
                        <ul className="flex flex-col gap-2">
                            {services2.map(s => (
                                <li key={s}>
                                    <a href="#services" className="text-slate-500 text-sm hover:text-blue-400 transition-colors">{s}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company + Contact */}
                    <div>
                        <h4 className="font-outfit font-bold text-white text-sm mb-4 tracking-wide">Company</h4>
                        <ul className="flex flex-col gap-2 mb-6">
                            {company.map(([label, id]) => (
                                <li key={label}>
                                    <a href={`#${id}`} className="text-slate-500 text-sm hover:text-blue-400 transition-colors">{label}</a>
                                </li>
                            ))}
                        </ul>
                        <h4 className="font-outfit font-bold text-white text-sm mb-3 tracking-wide">Contact</h4>
                        <ul className="flex flex-col gap-2">
                            <li><a href="tel:+918516848888" className="text-slate-500 text-sm hover:text-blue-400 transition-colors">+91 85168 48888</a></li>
                            <li><a href="mailto:info@raiminnovations.com" className="text-slate-500 text-sm hover:text-blue-400 transition-colors">info@raiminnovations.com</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
                    style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}
                >
                    <p className="text-slate-600 text-xs">© 2024 Raim Innovations. All rights reserved. | Kannur, Kerala, India</p>
                    <p className="text-slate-600 text-xs">Made with ❤️ in Kerala</p>
                </div>
            </div>
        </footer>
    );
}
