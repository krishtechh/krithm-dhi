import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowRight } from "lucide-react";

function ParticleCanvas() {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let w, h, raf;
        const mouse = { x: -9999, y: -9999 };
        const DPR = Math.min(window.devicePixelRatio || 1, 2);
        const resize = () => {
            w = canvas.offsetWidth;
            h = canvas.offsetHeight;
            canvas.width = w * DPR;
            canvas.height = h * DPR;
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        };
        resize();
        const count = Math.min(85, Math.floor(w / 16));
        const colors = ["139,92,246", "34,211,238", "217,70,239"];
        const pts = Array.from({ length: count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.6 + 0.6,
            c: colors[Math.floor(Math.random() * colors.length)],
        }));
        const onMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            for (const p of pts) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const d = Math.hypot(dx, dy);
                if (d < 140 && d > 0) {
                    p.vx += (dx / d) * 0.02;
                    p.vy += (dy / d) * 0.02;
                }
                p.vx = Math.max(-0.6, Math.min(0.6, p.vx));
                p.vy = Math.max(-0.6, Math.min(0.6, p.vy));
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.c},0.7)`;
                ctx.fill();
            }
            for (let i = 0; i < pts.length; i++) {
                for (let j = i + 1; j < pts.length; j++) {
                    const a = pts[i];
                    const b = pts[j];
                    const d = Math.hypot(a.x - b.x, a.y - b.y);
                    if (d < 110) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(139,92,246,${(1 - d / 110) * 0.16})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }
            raf = requestAnimationFrame(draw);
        };
        raf = requestAnimationFrame(draw);
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMove);
        };
    }, []);
    return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

export default function Hero() {
    const rootRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-line > span",
                { yPercent: 112 },
                { yPercent: 0, duration: 1.2, stagger: 0.14, ease: "power4.out", delay: 0.15 },
            );
            gsap.fromTo(
                ".hero-fade",
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out", delay: 0.7 },
            );
        }, rootRef);
        return () => ctx.revert();
    }, []);

    const go = (id) => {
        if (window.__lenis) window.__lenis.scrollTo(`#${id}`, { duration: 1.4 });
    };

    return (
        <section
            id="home"
            ref={rootRef}
            data-testid="hero-section"
            className="relative flex min-h-[105vh] flex-col items-center justify-center overflow-hidden px-6"
        >
            <ParticleCanvas />
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/15 blur-[120px]"
            />
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="hero-fade flex items-center gap-3 font-mono2 text-[10px] uppercase tracking-[0.35em] text-[#22D3EE] sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] animate-pulse-dot" aria-hidden="true" />
                    AIML Department • ADGIPS
                </div>
                <h1 className="mt-8 font-display font-extrabold uppercase leading-[0.88] tracking-tight text-[#F5F5F5]">
                    <span className="hero-line block overflow-hidden pb-1">
                        <span className="block text-[17vw] sm:text-[13vw] lg:text-[10rem]">KRITHIM</span>
                    </span>
                    <span className="hero-line block overflow-hidden pb-2">
                        <span className="text-gradient block text-[17vw] sm:text-[13vw] lg:text-[10rem]">DHI</span>
                    </span>
                </h1>
                <p className="hero-fade mt-6 font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#A1A1AA] sm:text-xs">
                    Artificial Intelligence & Machine Learning Society
                </p>
                <p className="hero-fade mt-6 max-w-md text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
                    A community of curious minds exploring Artificial Intelligence, Machine Learning, emerging
                    technologies and the ideas shaping tomorrow.
                </p>
                <div className="hero-fade mt-10 flex flex-col items-center gap-4 sm:flex-row">
                    <button
                        data-testid="hero-explore-btn"
                        onClick={() => go("purpose")}
                        className="group flex items-center gap-2 rounded-full bg-[#F5F5F5] px-7 py-3.5 text-sm font-semibold text-[#050505] transition-colors duration-300 hover:bg-[#22D3EE]"
                    >
                        Explore the Society
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1.5"
                        />
                    </button>
                    <button
                        data-testid="hero-community-btn"
                        onClick={() => go("team")}
                        className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-[#F5F5F5] transition-colors duration-300 hover:border-[#8B5CF6] hover:text-[#8B5CF6]"
                    >
                        Meet the Community
                    </button>
                </div>
            </div>
            <div className="hero-fade absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
                <span className="font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#A1A1AA]">
                    Scroll to Explore
                </span>
                <ArrowDown size={14} className="animate-scroll-arrow text-[#22D3EE]" aria-hidden="true" />
            </div>
        </section>
    );
}
