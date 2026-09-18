import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Reveal = ({ children, className = "", delay = 0, y = 44 }) => {
    const ref = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current,
                { y, opacity: 0, filter: "blur(8px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1,
                    delay,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ref.current, start: "top 86%" },
                },
            );
        }, ref);
        return () => ctx.revert();
    }, [delay, y]);
    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export const SectionHeading = ({ index, label, lines, className = "", align = "left" }) => {
    const ref = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".sh-line > span",
                { yPercent: 112 },
                {
                    yPercent: 0,
                    duration: 1.1,
                    stagger: 0.12,
                    ease: "power4.out",
                    scrollTrigger: { trigger: ref.current, start: "top 80%" },
                },
            );
            gsap.fromTo(
                ".sh-label",
                { opacity: 0, y: 16 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: { trigger: ref.current, start: "top 86%" },
                },
            );
        }, ref);
        return () => ctx.revert();
    }, []);
    return (
        <div ref={ref} className={`${align === "center" ? "text-center" : ""} ${className}`}>
            <div
                className={`sh-label flex items-center gap-3 font-mono2 text-xs uppercase tracking-[0.25em] text-[#22D3EE] ${
                    align === "center" ? "justify-center" : ""
                }`}
            >
                <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] animate-pulse-dot" aria-hidden="true" />
                {index} — {label}
            </div>
            <h2 className="mt-6 font-display font-extrabold uppercase leading-[0.95] tracking-tight text-[#F5F5F5] text-4xl sm:text-5xl lg:text-6xl">
                {lines.map((line, i) => (
                    <span key={i} className="sh-line block overflow-hidden pb-1">
                        <span className="block">{line}</span>
                    </span>
                ))}
            </h2>
        </div>
    );
};
