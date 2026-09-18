import { NAV_LINKS } from "@/data/content";

export default function SectionCounter({ active }) {
    const idx = Math.max(0, NAV_LINKS.findIndex((l) => l.id === active));
    return (
        <div
            data-testid="section-counter"
            className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-3 lg:flex"
            aria-hidden="true"
        >
            <span className="font-mono2 text-xs tracking-[0.2em] text-[#F5F5F5]">
                {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="relative h-14 w-px bg-white/10">
                <span
                    className="absolute left-0 top-0 w-px bg-gradient-to-b from-[#8B5CF6] to-[#22D3EE] transition-[height] duration-500"
                    style={{ height: `${((idx + 1) / NAV_LINKS.length) * 100}%` }}
                />
            </span>
            <span className="font-mono2 text-xs tracking-[0.2em] text-[#A1A1AA]">
                {String(NAV_LINKS.length).padStart(2, "0")}
            </span>
        </div>
    );
}
