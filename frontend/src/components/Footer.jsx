import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer data-testid="footer" className="relative z-10 overflow-hidden border-t border-white/[0.06] px-6 pb-10 pt-24">
            <div
                aria-hidden="true"
                className="absolute -bottom-32 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/[0.08] blur-[120px]"
            />
            <div className="relative mx-auto max-w-6xl">
                <div className="font-display text-[13vw] font-extrabold uppercase leading-none tracking-tight text-[#F5F5F5] sm:text-[9rem]">
                    KRITHIM <span className="text-gradient">DHI</span>
                </div>
                <p className="mt-6 max-w-md font-mono2 text-[10px] uppercase leading-relaxed tracking-[0.25em] text-[#A1A1AA] sm:text-xs">
                    Artificial Intelligence & Machine Learning Society
                    <br />
                    Dr. Akhilesh Das Gupta Institute of Professional Studies
                </p>
                <div className="mt-10 flex items-center gap-4">
                    {[
                        { icon: Instagram, label: "Instagram (link coming soon)", id: "instagram" },
                        { icon: Linkedin, label: "LinkedIn (link coming soon)", id: "linkedin" },
                        { icon: Mail, label: "Email (address coming soon)", id: "email" },
                    ].map(({ icon: Icon, label, id }) => (
                        <span
                            key={id}
                            data-testid={`footer-social-${id}`}
                            aria-label={label}
                            title={label}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#A1A1AA] transition-colors duration-300 hover:border-[#22D3EE]/50 hover:text-[#22D3EE]"
                        >
                            <Icon size={17} aria-hidden="true" />
                        </span>
                    ))}
                </div>
                <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
                        © 2026 Krithim Dhi — Built by the community.
                    </span>
                    <span className="flex items-center gap-2.5 font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] animate-pulse-dot" aria-hidden="true" />
                        System Online
                    </span>
                </div>
            </div>
        </footer>
    );
}
