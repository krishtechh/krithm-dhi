import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/Reveal";
import { EVENTS } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
    const sectionRef = useRef(null);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const wraps = gsap.utils.toArray(".event-wrap");
            wraps.forEach((wrap, i) => {
                ScrollTrigger.create({
                    trigger: wrap,
                    start: "top 55%",
                    onEnter: () => setCurrent(i),
                    onLeaveBack: () => setCurrent(Math.max(0, i - 1)),
                });
                const img = wrap.querySelector(".event-img");
                gsap.fromTo(
                    img,
                    { yPercent: -6 },
                    {
                        yPercent: 6,
                        ease: "none",
                        scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true },
                    },
                );
                if (i < wraps.length - 1) {
                    gsap.to(wrap.querySelector(".event-card"), {
                        scale: 0.92,
                        rotate: i % 2 === 0 ? -1.6 : 1.6,
                        filter: "brightness(0.45)",
                        transformOrigin: "center top",
                        ease: "none",
                        scrollTrigger: {
                            trigger: wraps[i + 1],
                            start: "top 95%",
                            end: "top 10%",
                            scrub: true,
                        },
                    });
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="events" ref={sectionRef} data-testid="events-section" className="relative z-10 py-28 sm:py-40">
            <div className="px-6">
                <div className="mx-auto max-w-6xl">
                    <SectionHeading index="06" label="Previous Events" lines={["MEMORIES", "THAT MOVED US", "FORWARD."]} />
                    <p className="mt-6 max-w-md text-sm text-[#A1A1AA]">
                        [Placeholder events — real titles, dates and photos will replace these cards.]
                    </p>
                </div>
            </div>
            <div className="relative mt-16">
                <div
                    data-testid="event-counter"
                    className="pointer-events-none sticky top-1/2 z-30 hidden h-0 -translate-y-1/2 justify-start pl-8 lg:flex"
                >
                    <span className="font-mono2 text-sm tracking-[0.25em] text-[#22D3EE]">
                        {String(current + 1).padStart(2, "0")}
                        <span className="text-[#A1A1AA]"> / {String(EVENTS.length).padStart(2, "0")}</span>
                    </span>
                </div>
                {EVENTS.map((e, i) => (
                    <div key={i} className="event-wrap relative h-screen px-4 sm:px-6">
                        <article
                            data-testid={`event-card-${i}`}
                            data-cursor="view"
                            className="event-card glass-card sticky mx-auto flex h-[76vh] max-w-4xl flex-col overflow-hidden !rounded-[28px] will-change-transform"
                            style={{ top: `${12 + i * 1.6}vh` }}
                        >
                            <div className="relative h-[58%] shrink-0 overflow-hidden">
                                <img
                                    src={e.image}
                                    alt={`${e.category} event placeholder`}
                                    loading="lazy"
                                    className="event-img absolute inset-0 h-[115%] w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                                <span className="glass-card absolute left-5 top-5 !rounded-full px-4 py-1.5 font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#22D3EE]">
                                    {e.category}
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="absolute bottom-3 right-6 font-display text-7xl font-extrabold text-white/10"
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                                <div>
                                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F5F5F5] sm:text-3xl">
                                        {e.title}
                                    </h3>
                                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#A1A1AA]">
                                        {e.description}
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-4">
                                    <span className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA] sm:text-xs">
                                        {e.date} • {e.year}
                                    </span>
                                    <span className="group flex items-center gap-1.5 font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#F5F5F5] sm:text-xs">
                                        View
                                        <ArrowUpRight size={14} className="text-[#22D3EE]" aria-hidden="true" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}
