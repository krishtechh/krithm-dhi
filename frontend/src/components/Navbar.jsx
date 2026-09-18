import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/content";

const scrollTo = (id) => {
    if (window.__lenis) window.__lenis.scrollTo(`#${id}`, { offset: 0, duration: 1.4 });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar({ active }) {
    const [open, setOpen] = useState(false);
    const go = (id) => {
        setOpen(false);
        scrollTo(id);
    };
    return (
        <>
            <header className="fixed left-0 right-0 top-4 z-50 flex justify-center px-4">
                <nav
                    data-testid="navbar"
                    className="glass-card flex w-full max-w-3xl items-center justify-between gap-2 !rounded-full px-4 py-2.5 sm:px-5"
                >
                    <button
                        data-testid="nav-logo"
                        onClick={() => go("home")}
                        className="flex items-center gap-2.5"
                        aria-label="Krithim Dhi — home"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#22D3EE] font-display text-xs font-extrabold text-[#050505]">
                            KD
                        </span>
                        <span className="hidden font-display text-sm font-bold tracking-wide text-[#F5F5F5] sm:block">
                            KRITHIM DHI
                        </span>
                    </button>
                    <div className="hidden items-center gap-1 lg:flex">
                        {NAV_LINKS.map((l) => (
                            <button
                                key={l.id}
                                data-testid={`nav-link-${l.id}`}
                                onClick={() => go(l.id)}
                                className={`relative whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] transition-colors duration-300 ${
                                    active === l.id
                                        ? "text-[#F5F5F5]"
                                        : "text-[#A1A1AA] hover:text-[#F5F5F5]"
                                }`}
                            >
                                {l.label}
                                <span
                                    className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#22D3EE] shadow-[0_0_8px_2px_rgba(34,211,238,0.7)] transition-opacity duration-300 ${
                                        active === l.id ? "opacity-100" : "opacity-0"
                                    }`}
                                    aria-hidden="true"
                                />
                            </button>
                        ))}
                    </div>
                    <button
                        data-testid="nav-menu-open"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#F5F5F5] lg:hidden"
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={18} />
                    </button>
                </nav>
            </header>
            {open && (
                <div
                    data-testid="mobile-menu"
                    className="fixed inset-0 z-[60] flex flex-col bg-[#050505]/80 backdrop-blur-2xl"
                >
                    <div className="flex items-center justify-between px-6 py-6">
                        <span className="font-display text-sm font-bold tracking-wide">KRITHIM DHI</span>
                        <button
                            data-testid="nav-menu-close"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                        >
                            <X size={18} />
                        </button>
                    </div>
                    <div className="flex flex-1 flex-col justify-center gap-2 px-8">
                        {NAV_LINKS.map((l, i) => (
                            <button
                                key={l.id}
                                data-testid={`mobile-nav-link-${l.id}`}
                                onClick={() => go(l.id)}
                                className={`flex items-baseline gap-4 py-2 text-left font-display text-3xl font-bold transition-colors ${
                                    active === l.id ? "text-gradient" : "text-[#F5F5F5]"
                                }`}
                            >
                                <span className="font-mono2 text-xs text-[#8B5CF6]">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                {l.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
