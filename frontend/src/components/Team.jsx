import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TEAM } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

const GRADIENTS = [
    "from-[#8B5CF6] to-[#22D3EE]",
    "from-[#22D3EE] to-[#D946EF]",
    "from-[#D946EF] to-[#8B5CF6]",
    "from-[#8B5CF6] to-[#D946EF]",
    "from-[#22D3EE] to-[#8B5CF6]",
];

const initials = (role) =>
    role
        .split(/[\s&]+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();

export default function Team() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            gsap.to(track, {
                x: () => -(track.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => `+=${track.scrollWidth - window.innerWidth}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="team" ref={sectionRef} data-testid="team-section" className="relative z-10 overflow-hidden">
            <div className="flex h-screen flex-col justify-center">
                <div className="px-6">
                    <div className="mx-auto flex max-w-6xl flex-col gap-3">
                        <div className="flex items-center gap-3 font-mono2 text-xs uppercase tracking-[0.25em] text-[#22D3EE]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] animate-pulse-dot" aria-hidden="true" />
                            07 — The Team
                        </div>
                        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl">
                            THE PEOPLE BEHIND
                            <br />
                            <span className="text-gradient">THE MACHINE.</span>
                        </h2>
                        <p className="text-sm text-[#A1A1AA]">Meet the minds building Krithim Dhi.</p>
                    </div>
                </div>
                <div
                    ref={trackRef}
                    data-cursor="drag"
                    className="mt-12 flex w-max gap-6 pl-6 pr-[40vw] will-change-transform sm:pl-[max(1.5rem,calc((100vw-72rem)/2))]"
                >
                    {TEAM.map((m, i) => (
                        <article
                            key={i}
                            data-testid={`team-card-${i}`}
                            className="team-card glass-card group relative w-[270px] shrink-0 overflow-hidden p-7 transition-colors duration-500 hover:border-[#8B5CF6]/40 sm:w-[320px]"
                        >
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#8B5CF6]/10 blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute right-5 top-5 font-mono2 text-xs text-white/20"
                            >
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <div
                                className={`relative flex h-40 w-40 items-center justify-center rounded-3xl bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} transition-transform duration-500 group-hover:scale-[1.04]`}
                            >
                                <span className="font-display text-4xl font-extrabold text-[#050505]/80">
                                    {initials(m.role)}
                                </span>
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                />
                            </div>
                            <div className="mt-7 font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#22D3EE] transition-colors duration-300 group-hover:text-[#F5F5F5]">
                                {m.role}
                            </div>
                            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#F5F5F5]">
                                {m.name}
                            </h3>
                            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[#A1A1AA]">
                                {m.tagline}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
