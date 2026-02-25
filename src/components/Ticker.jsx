const items = [
    'Digital Marketing', 'Web Development', 'SEO Services', 'Social Media',
    'Graphic Design', 'Barcode Solutions', 'Real Estate', 'Tourism',
    'Interior Design', 'Education', 'Back Office', 'IT Solutions',
];

export default function Ticker() {
    const doubled = [...items, ...items];
    return (
        <div
            className="relative overflow-hidden py-3.5"
            style={{
                background: 'rgba(37,99,235,0.05)',
                borderTop: '1px solid rgba(59,130,246,0.12)',
                borderBottom: '1px solid rgba(59,130,246,0.12)',
            }}
        >
            <div
                className="flex gap-10 whitespace-nowrap"
                style={{ animation: 'ticker 35s linear infinite', width: 'max-content' }}
            >
                {doubled.map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-4 text-xs font-semibold tracking-widest uppercase text-slate-400">
                        {item}
                        <span className="text-blue-600 opacity-50 text-[8px]">◆</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
