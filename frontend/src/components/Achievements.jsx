import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { ACHIEVEMENTS } from "@/data/content";
import { Image as ImageIcon, X, Calendar, Award } from "lucide-react";

export default function Achievements() {
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    // Prevent body scroll when modal is active
    useEffect(() => {
        if (selectedAchievement) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedAchievement]);

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setSelectedAchievement(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section id="achievements" data-testid="achievements-section" className="relative z-10 px-6 py-28 sm:py-40">
            <div
                aria-hidden="true"
                className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[#D946EF]/[0.06] blur-[130px]"
            />
            <div className="relative mx-auto max-w-6xl">
                <SectionHeading index="04" label="Achievements" lines={["PROOF OF PROGRESS."]} />
                <div className="mt-16 space-y-6">
                    {ACHIEVEMENTS.map((a, i) => (
                        <Reveal key={i} delay={0.05}>
                            <div
                                data-testid={`achievement-card-${i}`}
                                data-cursor
                                onClick={() => setSelectedAchievement(a)}
                                className="glass-card group relative cursor-pointer overflow-hidden p-6 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] sm:p-8"
                            >
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[9rem] font-extrabold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-white/[0.07] sm:text-[12rem]"
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                                        {/* Photo Slot */}
                                        <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-[#22D3EE]/40 sm:h-28 sm:w-40">
                                            {a.image ? (
                                                <img
                                                    src={a.image}
                                                    alt={a.title}
                                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/30">
                                                    <ImageIcon className="h-6 w-6" />
                                                    <span className="font-mono2 text-[10px] uppercase tracking-wider">
                                                        Photo
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Text Info */}
                                        <div className="max-w-xl">
                                            <span className="font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#8B5CF6]">
                                                {a.category}
                                            </span>
                                            <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-[#F5F5F5] transition-colors group-hover:text-[#22D3EE] sm:text-2xl">
                                                {a.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                                                {a.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Year */}
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

            {/* Modal Popup with Glass Effect */}
            <AnimatePresence>
                {selectedAchievement && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedAchievement(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md"
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-[#090D16]/80 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_20px_rgba(34,211,238,0.2)] backdrop-blur-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedAchievement(null)}
                                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/70 transition-all hover:border-white/30 hover:bg-white/20 hover:text-white"
                                aria-label="Close dialog"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            {/* Photo in Center */}
                            <div className="relative mb-6 flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:h-80 lg:h-96">
                                {selectedAchievement.image ? (
                                    <img
                                        src={selectedAchievement.image}
                                        alt={selectedAchievement.title}
                                        className="h-full w-full object-contain p-2"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-2 text-white/40">
                                        <ImageIcon className="h-12 w-12" />
                                        <span className="font-mono2 text-xs uppercase tracking-widest">
                                            No Photo Available
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Details Beneath Photo */}
                            <div className="space-y-4">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1 font-mono2 text-xs uppercase tracking-widest text-[#A78BFA]">
                                        <Award className="h-3.5 w-3.5" />
                                        {selectedAchievement.category}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 font-mono2 text-xs uppercase tracking-widest text-[#22D3EE]">
                                        <Calendar className="h-3.5 w-3.5" />
                                        Year {selectedAchievement.year}
                                    </span>
                                </div>

                                <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-[#F5F5F5] sm:text-3xl">
                                    {selectedAchievement.title}
                                </h2>

                                <p className="text-base leading-relaxed text-[#D4D4D8]">
                                    {selectedAchievement.description}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
