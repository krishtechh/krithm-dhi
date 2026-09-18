import { Reveal, SectionHeading } from "@/components/Reveal";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
    return (
        <section id="purpose" data-testid="vision-section" className="relative z-10 px-6 py-28 sm:py-40">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    index="01"
                    label="Our Purpose"
                    lines={["WE DON'T JUST", "LEARN THE FUTURE.", "WE BUILD IT."]}
                />
                <div className="mt-16 grid gap-6 md:grid-cols-2">
                    <Reveal>
                        <div className="glass-card group relative h-full overflow-hidden p-8 sm:p-12" data-cursor>
                            <div
                                aria-hidden="true"
                                className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#8B5CF6]/15 blur-[80px] transition-opacity duration-500 group-hover:opacity-100 opacity-50"
                            />
                            <Eye className="text-[#8B5CF6]" size={28} aria-hidden="true" />
                            <h3 className="mt-6 font-mono2 text-xs uppercase tracking-[0.3em] text-[#8B5CF6]">
                                Our Vision
                            </h3>
                            <p className="mt-5 max-w-md text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
                                To build a community that explores Artificial Intelligence, Machine Learning and
                                emerging technologies — a space where curiosity turns into capability, and students
                                grow into the innovators shaping tomorrow.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="glass-card group relative h-full overflow-hidden p-8 sm:p-12" data-cursor>
                            <div
                                aria-hidden="true"
                                className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#22D3EE]/15 blur-[80px] transition-opacity duration-500 group-hover:opacity-100 opacity-50"
                            />
                            <Target className="text-[#22D3EE]" size={28} aria-hidden="true" />
                            <h3 className="mt-6 font-mono2 text-xs uppercase tracking-[0.3em] text-[#22D3EE]">
                                Our Mission
                            </h3>
                            <p className="mt-5 max-w-md text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
                                Hands-on learning, experimentation and peer collaboration. Research, industry
                                exposure and real-world problem solving — turning classroom knowledge into things
                                that actually work.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
