import { Reveal, SectionHeading } from "@/components/Reveal";
import { INDUSTRY } from "@/data/content";

export default function IndustryConnect() {
    return (
        <section id="industry" data-testid="industry-section" className="relative z-10 overflow-hidden px-6 py-28 sm:py-40">
            <div className="mx-auto max-w-6xl">
                <SectionHeading index="05" label="Industry Connect" lines={["FROM", "CLASSROOM", "TO INDUSTRY."]} />
                <Reveal className="mt-8 max-w-xl">
                    <p className="text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
                        Krithim Dhi bridges students with industry professionals, alumni, researchers, startups,
                        technology companies and mentors — so learning never stops at the classroom door.
                    </p>
                </Reveal>
                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {INDUSTRY.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <Reveal key={item.title} delay={(i % 3) * 0.1}>
                                <div
                                    data-testid={`industry-card-${i}`}
                                    data-cursor
                                    className="glass-card group h-full p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#22D3EE]/30"
                                >
                                    <Icon
                                        size={24}
                                        className="text-[#22D3EE] transition-transform duration-500 group-hover:scale-110"
                                        aria-hidden="true"
                                    />
                                    <h3 className="mt-6 font-display text-lg font-bold text-[#F5F5F5]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">{item.description}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
            <div className="mt-20 overflow-hidden" aria-hidden="true">
                <div className="animate-marquee flex w-max gap-4">
                    {[...Array(2)].map((_, dup) => (
                        <div key={dup} className="flex gap-4">
                            {[...Array(8)].map((_, i) => (
                                <span
                                    key={i}
                                    className="glass-card flex h-16 w-44 shrink-0 items-center justify-center !rounded-2xl font-mono2 text-[10px] uppercase tracking-[0.3em] text-white/20"
                                >
                                    [ Logo ]
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
