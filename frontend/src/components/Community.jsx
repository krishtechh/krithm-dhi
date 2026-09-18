import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { STATS, TOPICS } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

const Stat = ({ value, suffix, label, testId }) => {
    const numRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const obj = { v: 0 };
            gsap.to(obj, {
                v: value,
                duration: 1.8,
                ease: "power2.out",
                scrollTrigger: { trigger: numRef.current, start: "top 88%" },
                onUpdate: () => {
                    if (numRef.current) numRef.current.textContent = Math.round(obj.v);
                },
            });
        });
        return () => ctx.revert();
    }, [value]);
    return (
        <div className="glass-card p-6 text-center sm:p-8" data-testid={testId}>
            <div className="font-display text-5xl font-extrabold text-[#F5F5F5] sm:text-6xl">
                <span ref={numRef}>0</span>
                <span className="text-gradient">{suffix}</span>
            </div>
            <div className="mt-3 font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA] sm:text-xs">
                {label}
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
                <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                    {STATS.map((s, i) => (
                        <Reveal key={s.label} delay={i * 0.08}>
                            <Stat {...s} testId={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`} />
                        </Reveal>
                    ))}
                </div>
                <div className="mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                    {TOPICS.map((t, i) => (
                        <span
                            key={t}
                            data-testid={`topic-chip-${t.toLowerCase().replace(/\s+/g, "-")}`}
                            className="glass-card animate-float !rounded-full px-5 py-2.5 font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA] transition-colors duration-300 hover:border-[#22D3EE]/50 hover:text-[#22D3EE] sm:text-xs"
                            style={{ animationDelay: `${i * 0.7}s`, animationDuration: `${5 + (i % 3)}s` }}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
