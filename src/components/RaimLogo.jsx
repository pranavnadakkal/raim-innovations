/**
 * Raim Innovations Logo
 * A globe wireframe (equator + 2 latitudes + meridian) with a bold "R" centered on it.
 * gradId must be unique per page location to avoid SVG defs conflicts.
 */
export default function RaimLogo({ size = 36, gradId = 'raimGlobe' }) {
    const g = gradId;
    return (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            style={{ display: 'block', flexShrink: 0 }}
        >
            {/* ── Outer globe circle ── */}
            <circle cx="20" cy="20" r="17" stroke={`url(#${g})`} strokeWidth="1.6" />

            {/* ── Latitude lines ── */}
            {/* Upper */}
            <ellipse cx="20" cy="13" rx="13.3" ry="3.8" stroke={`url(#${g})`} strokeWidth="0.9" strokeOpacity="0.65" />
            {/* Equator */}
            <ellipse cx="20" cy="20" rx="17" ry="5.2" stroke={`url(#${g})`} strokeWidth="0.9" strokeOpacity="0.65" />
            {/* Lower */}
            <ellipse cx="20" cy="27" rx="13.3" ry="3.8" stroke={`url(#${g})`} strokeWidth="0.9" strokeOpacity="0.65" />

            {/* ── Vertical meridian ── */}
            <ellipse cx="20" cy="20" rx="5.5" ry="17" stroke={`url(#${g})`} strokeWidth="0.9" strokeOpacity="0.65" />

            {/* ── Bold R centered ── */}
            <text
                x="20"
                y="26"
                textAnchor="middle"
                dominantBaseline="auto"
                fontFamily="'Outfit', 'Arial Black', Arial, sans-serif"
                fontSize="18"
                fontWeight="900"
                fill={`url(#${g})`}
                letterSpacing="-0.5"
            >
                R
            </text>

            <defs>
                <linearGradient id={g} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
            </defs>
        </svg>
    );
}
