import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { STATS } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ stat, testId }) => {
    const numRef = useRef(null);

    useEffect(() => {
        if (stat.type === "number" && stat.value) {
            const ctx = gsap.context(() => {
                const obj = { v: 0 };
                gsap.to(obj, {
                    v: stat.value,
                    duration: 1.8,
                    ease: "power2.out",
                    scrollTrigger: { trigger: numRef.current, start: "top 88%" },
                    onUpdate: () => {
                        if (numRef.current) numRef.current.textContent = Math.round(obj.v);
                    },
                });
            });
            return () => ctx.revert();
        }
    }, [stat]);

    return (
        <div
            data-testid={testId}
            className={`glass-card group relative flex min-h-[210px] flex-col justify-between overflow-hidden !rounded-3xl p-8 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.04] hover:shadow-[0_0_35px_rgba(139,92,246,0.15)] sm:p-10 ${stat.span}`}
        >
            {/* Background subtle radial glow on hover */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/[0.03] blur-2xl transition-all duration-500 group-hover:bg-[#22D3EE]/[0.08]"
            />

            {/* Stat Value / Display Header */}
            <div>
                {stat.type === "number" ? (
                    <div className="font-display text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
                        <span
                            ref={numRef}
                            className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                        >
                            0
                        </span>
                        <span className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                            {stat.suffix}
                        </span>
                    </div>
                ) : (
                    <div className="font-display text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
                        {stat.displayText}
                    </div>
                )}
            </div>

            {/* Subtext Description */}
            <div className="mt-8 font-sans text-xs font-medium leading-relaxed text-[#A1A1AA] transition-colors duration-300 group-hover:text-white/90 sm:text-sm">
                {stat.label}
            </div>
        </div>
    );
};

export default function Community() {
    return (
        <section id="community" data-testid="community-section" className="relative z-10 overflow-hidden px-6 py-28 sm:py-40">
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-[380px] w-[620px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/[0.07] blur-[130px]"
            />
            <div className="relative mx-auto max-w-6xl">
                <SectionHeading
                    index="02"
                    label="Our Community"
                    lines={["CURIOUS MINDS.", "ONE COMMUNITY.", "LIMITLESS POSSIBILITIES."]}
                />

                {/* Bento Grid layout matching reference design */}
                <div className="mt-16 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-6">
                    {STATS.map((s, i) => (
                        <Reveal key={s.label} delay={i * 0.08} className={s.span}>
                            <StatCard stat={s} testId={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
