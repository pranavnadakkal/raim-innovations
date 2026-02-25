import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let W, H;
        let scrollY = 0;
        let targetRotY = 0;
        let currentRotY = 0;
        let currentRotX = 0;
        let autoRotate = 0;

        // ── resize ──────────────────────────────────────────────
        function resize() {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        // ── scroll drives extra Y rotation ──────────────────────
        function onScroll() {
            scrollY = window.scrollY;
        }
        window.addEventListener('scroll', onScroll, { passive: true });

        // ── Globe geometry ───────────────────────────────────────
        const RADIUS = Math.min(W, H) * 0.36;       // fills ~72% of shortest dimension
        const NODE_COUNT = 90;

        // Fibonacci sphere — even distribution of points on a sphere
        const nodes = [];
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        for (let i = 0; i < NODE_COUNT; i++) {
            const theta = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT); // polar
            const phi = 2 * Math.PI * i / goldenRatio;                   // azimuthal
            nodes.push({
                x: Math.sin(theta) * Math.cos(phi),
                y: Math.sin(theta) * Math.sin(phi),
                z: Math.cos(theta),
            });
        }

        // Precompute edges between nodes closer than ~42° apart
        const edges = [];
        const DOT_THRESHOLD = 0.77; // cos(~40°)
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dot =
                    nodes[i].x * nodes[j].x +
                    nodes[i].y * nodes[j].y +
                    nodes[i].z * nodes[j].z;
                if (dot > DOT_THRESHOLD) {
                    edges.push([i, j]);
                }
            }
        }

        // ── 3-D rotation helpers ─────────────────────────────────
        function rotateY(x, y, z, a) {
            return {
                x: x * Math.cos(a) + z * Math.sin(a),
                y,
                z: -x * Math.sin(a) + z * Math.cos(a),
            };
        }
        function rotateX(x, y, z, a) {
            return {
                x,
                y: y * Math.cos(a) - z * Math.sin(a),
                z: y * Math.sin(a) + z * Math.cos(a),
            };
        }
        // Orthographic + slight perspective project to canvas
        function project(p, cx, cy, R) {
            const persp = 2.8;           // perspective factor (higher = less distortion)
            const scale = persp / (persp + p.z); // z is −1..+1 after normalize
            return {
                sx: cx + p.x * R * scale,
                sy: cy + p.y * R * scale,
                z: p.z,
                scale,
            };
        }

        // ── Background particle haze ─────────────────────────────
        const HAZE = 50;
        const hazeParticles = Array.from({ length: HAZE }, () => ({
            x: Math.random(),
            y: Math.random(),
            r: Math.random() * 1.0 + 0.3,
            dx: (Math.random() - 0.5) * 0.0002,
            dy: (Math.random() - 0.5) * 0.0002,
            op: Math.random() * 0.25 + 0.08,
            ts: Math.random() * 0.005 + 0.002,
            td: Math.random() > 0.5 ? 1 : -1,
        }));

        // ── Main draw loop ───────────────────────────────────────
        function draw() {
            ctx.clearRect(0, 0, W, H);

            // ── 1. Background haze dots ──
            hazeParticles.forEach(p => {
                p.op += p.ts * p.td;
                if (p.op > 0.33 || p.op < 0.04) p.td *= -1;
                p.x += p.dx; p.y += p.dy;
                if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
                if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(148,186,233,${p.op})`;
                ctx.fill();
            });

            // ── 2. Rotation update ──
            autoRotate += 0.0018;                          // slow constant spin
            // Scroll drives a smooth extra Y rotation
            const scrollFrac = scrollY / (document.body.scrollHeight - H || 1);
            targetRotY = autoRotate + scrollFrac * Math.PI * 3; // max 1.5 full turns from scroll
            currentRotY += (targetRotY - currentRotY) * 0.04;   // lerp for smoothness
            // Slight gentle X tilt that rocks slowly
            currentRotX = Math.sin(autoRotate * 0.4) * 0.18;

            // ── 3. Project all nodes ──
            const cx = W / 2;
            const cy = H / 2;
            const R = Math.min(W, H) * 0.36;

            const projected = nodes.map(n => {
                let p = rotateY(n.x, n.y, n.z, currentRotY);
                p = rotateX(p.x, p.y, p.z, currentRotX);
                return project(p, cx, cy, R);
            });

            // ── 4. Draw globe latitude/longitude guide rings (very faint) ──
            drawGuideRings(ctx, cx, cy, R, currentRotY, currentRotX);

            // ── 5. Draw edges ──
            edges.forEach(([i, j]) => {
                const a = projected[i];
                const b = projected[j];
                const avgZ = (a.z + b.z) / 2;
                // Hide edges on the far side
                if (avgZ < -0.2) return;
                const alpha = Math.max(0, (avgZ + 0.2) / 1.2) * 0.35;
                ctx.beginPath();
                ctx.moveTo(a.sx, a.sy);
                ctx.lineTo(b.sx, b.sy);
                ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
                ctx.lineWidth = 0.7;
                ctx.stroke();
            });

            // ── 6. Draw nodes ──
            projected.forEach((p) => {
                if (p.z < -0.15) return;                   // skip far-side nodes
                const alpha = Math.max(0, (p.z + 0.15) / 1.15);
                const r = 2.2 * p.scale;

                // Glow
                const grd = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 5);
                grd.addColorStop(0, `rgba(96,165,250,${alpha * 0.25})`);
                grd.addColorStop(1, 'rgba(96,165,250,0)');
                ctx.beginPath();
                ctx.arc(p.sx, p.sy, r * 5, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(147,197,253,${alpha * 0.85})`;
                ctx.fill();
            });

            // ── 7. Subtle radial vignette over the whole canvas ──
            const vig = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, R * 1.6);
            vig.addColorStop(0, 'rgba(6,13,31,0)');
            vig.addColorStop(1, 'rgba(6,13,31,0.7)');
            ctx.fillStyle = vig;
            ctx.fillRect(0, 0, W, H);

            animId = requestAnimationFrame(draw);
        }

        // ── Helper: faint guide rings (latitude lines + equator) ──
        function drawGuideRings(ctx, cx, cy, R, rotY, rotX) {
            const STEPS = 80;
            const latitudes = [-0.6, -0.3, 0, 0.3, 0.6];  // sin of latitude
            const opacities = [0.04, 0.06, 0.09, 0.06, 0.04];

            latitudes.forEach((sinLat, li) => {
                const cosLat = Math.sqrt(Math.max(0, 1 - sinLat * sinLat));
                const ringR = cosLat;
                const ringY = sinLat;

                ctx.beginPath();
                let first = true;
                for (let s = 0; s <= STEPS; s++) {
                    const phi = (s / STEPS) * Math.PI * 2;
                    const nx = ringR * Math.cos(phi);
                    const ny = ringY;
                    const nz = ringR * Math.sin(phi);

                    let p = rotateY(nx, ny, nz, rotY);
                    p = rotateX(p.x, p.y, p.z, rotX);
                    const proj = project(p, cx, cy, R);

                    if (p.z < -0.05) {
                        first = true;
                        continue;
                    }
                    if (first) { ctx.moveTo(proj.sx, proj.sy); first = false; }
                    else ctx.lineTo(proj.sx, proj.sy);
                }
                ctx.strokeStyle = `rgba(59,130,246,${opacities[li]})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            });

            // 3 meridian lines
            const meridians = [0, Math.PI / 3, (2 * Math.PI) / 3];
            meridians.forEach((startPhi) => {
                ctx.beginPath();
                let first = true;
                for (let s = 0; s <= STEPS; s++) {
                    const theta = (s / STEPS) * Math.PI * 2;
                    const phi = startPhi;
                    const nx = Math.sin(theta) * Math.cos(phi);
                    const ny = Math.cos(theta);
                    const nz = Math.sin(theta) * Math.sin(phi);

                    let p = rotateY(nx, ny, nz, rotY);
                    p = rotateX(p.x, p.y, p.z, rotX);
                    const proj = project(p, cx, cy, R);

                    if (p.z < -0.05) { first = true; continue; }
                    if (first) { ctx.moveTo(proj.sx, proj.sy); first = false; }
                    else ctx.lineTo(proj.sx, proj.sy);
                }
                ctx.strokeStyle = 'rgba(59,130,246,0.05)';
                ctx.lineWidth = 0.8;
                ctx.stroke();
            });
        }

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <>
            {/* Globe + haze canvas */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-0 pointer-events-none"
            />

            {/* Deep navy base */}
            <div
                className="fixed inset-0"
                style={{
                    zIndex: -2,
                    background:
                        'radial-gradient(ellipse at 50% 40%, #0b1832 0%, #060D1F 55%, #050c1a 100%)',
                }}
            />

            {/* Very subtle ambient blue — top-left & bottom-right ──  */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
                <div
                    style={{
                        position: 'absolute',
                        top: '-15%', left: '-10%',
                        width: 650, height: 650,
                        background:
                            'radial-gradient(circle, rgba(29,78,216,0.07) 0%, transparent 65%)',
                        borderRadius: '50%',
                        filter: 'blur(70px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-10%', right: '-8%',
                        width: 550, height: 550,
                        background:
                            'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)',
                        borderRadius: '50%',
                        filter: 'blur(80px)',
                    }}
                />

                {/* Fine dot-grid */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'radial-gradient(rgba(59,130,246,0.15) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                        opacity: 0.3,
                    }}
                />

                {/* Top edge light */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0, left: '15%', right: '15%', height: 1,
                        background:
                            'linear-gradient(to right, transparent, rgba(59,130,246,0.2), transparent)',
                    }}
                />

                {/* Vignette */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(ellipse at 50% 30%, transparent 40%, rgba(6,13,31,0.55) 100%)',
                    }}
                />
            </div>
        </>
    );
}
