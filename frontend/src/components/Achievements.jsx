import { Reveal, SectionHeading } from "@/components/Reveal";
import { ACHIEVEMENTS } from "@/data/content";

export default function Achievements() {
    return (
        <section id="achievements" data-testid="achievements-section" className="relative z-10 px-6 py-28 sm:py-40">
            <div
                aria-hidden="true"
                className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[#D946EF]/[0.06] blur-[130px]"
            />
            <div className="relative mx-auto max-w-6xl">
                <SectionHeading index="04" label="Achievements" lines={["PROOF", "OF", "PROGRESS."]} />
                <p className="mt-6 max-w-md text-sm text-[#A1A1AA]">
                    [Placeholder milestones — real achievements will be added as they happen.]
                </p>
                <div className="mt-16 space-y-6">
                    {ACHIEVEMENTS.map((a, i) => (
                        <Reveal key={i} delay={0.05}>
                            <div
                                data-testid={`achievement-card-${i}`}
                                data-cursor
                                className="glass-card group relative overflow-hidden p-8 transition-colors duration-500 hover:border-white/20 sm:p-10"
                            >
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[9rem] font-extrabold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-white/[0.07] sm:text-[12rem]"
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                                    <div className="max-w-xl">
                                        <span className="font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#8B5CF6]">
                                            {a.category}
                                        </span>
                                        <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-[#F5F5F5] sm:text-3xl">
                                            {a.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                                            {a.description}
                                        </p>
                                    </div>
                                    <div className="shrink-0 text-left sm:text-right">
                                        <div className="font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#A1A1AA]">
                                            Year
                                        </div>
                                        <div className="font-display text-2xl font-bold text-gradient">
                                            {a.year}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
