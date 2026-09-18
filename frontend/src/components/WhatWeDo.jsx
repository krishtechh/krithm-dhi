import { Reveal, SectionHeading } from "@/components/Reveal";
import { WHAT_WE_DO } from "@/data/content";

export default function WhatWeDo() {
    return (
        <section id="what-we-do" data-testid="what-we-do-section" className="relative z-10 px-6 py-28 sm:py-40">
            <div className="mx-auto max-w-6xl">
                <SectionHeading index="03" label="What We Do" lines={["WHAT", "WE DO."]} />
                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {WHAT_WE_DO.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <Reveal key={item.title} delay={(i % 3) * 0.1}>
                                <div
                                    data-testid={`what-card-${i}`}
                                    data-cursor
                                    className="glass-card group relative h-full overflow-hidden p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/0 via-[#22D3EE]/0 to-[#D946EF]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#8B5CF6]/10 group-hover:via-transparent group-hover:to-[#22D3EE]/10 group-hover:opacity-100"
                                    />
                                    <div className="relative">
                                        <div className="flex items-start justify-between">
                                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#22D3EE] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                                                <Icon size={20} aria-hidden="true" />
                                            </span>
                                            <span className="font-mono2 text-xs text-white/20">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <h3 className="mt-8 font-display text-xl font-bold text-[#F5F5F5]">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
