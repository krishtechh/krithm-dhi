import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Mail, Instagram, Linkedin, MapPin } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { CONTACT_CARDS } from "@/data/content";

const ICONS = { Email: Mail, Instagram, Linkedin, Location: MapPin };
const EMPTY = { name: "", email: "", subject: "", message: "" };

const fieldCls =
    "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-[#F5F5F5] placeholder:text-white/25 outline-none transition-colors duration-300 focus:border-[#8B5CF6]/60 focus:bg-white/[0.05]";

export default function Contact() {
    const [form, setForm] = useState(EMPTY);
    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const submit = (e) => {
        e.preventDefault();
        toast.success("Query received — the Krithim Dhi team will get back to you soon.");
        setForm(EMPTY);
    };

    return (
        <section id="contact" data-testid="contact-section" className="relative z-10 px-6 py-28 sm:py-40">
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/3 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/[0.08] blur-[140px]"
            />
            <div className="relative mx-auto max-w-6xl">
                <SectionHeading index="08" label="Contact" lines={["LET'S BUILD", "SOMETHING", "INTELLIGENT."]} />
                <Reveal className="mt-8 max-w-lg">
                    <p className="text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
                        Have a question, collaboration idea, workshop proposal, or simply want to connect with
                        Krithim Dhi? We'd love to hear from you.
                    </p>
                </Reveal>
                <div className="mt-16 grid gap-6 lg:grid-cols-5">
                    <Reveal className="lg:col-span-3">
                        <form
                            data-testid="contact-form"
                            onSubmit={submit}
                            className="glass-card grid gap-5 p-8 sm:grid-cols-2 sm:p-10"
                        >
                            <div>
                                <label htmlFor="contact-name" className="mb-2 block font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
                                    Name
                                </label>
                                <input
                                    id="contact-name"
                                    data-testid="contact-name-input"
                                    required
                                    value={form.name}
                                    onChange={set("name")}
                                    placeholder="Your name"
                                    className={fieldCls}
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="mb-2 block font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    data-testid="contact-email-input"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={set("email")}
                                    placeholder="you@example.com"
                                    className={fieldCls}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="contact-subject" className="mb-2 block font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
                                    Subject
                                </label>
                                <input
                                    id="contact-subject"
                                    data-testid="contact-subject-input"
                                    required
                                    value={form.subject}
                                    onChange={set("subject")}
                                    placeholder="What's this about?"
                                    className={fieldCls}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="contact-message" className="mb-2 block font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    data-testid="contact-message-input"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={set("message")}
                                    placeholder="Tell us more..."
                                    className={`${fieldCls} resize-none`}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <button
                                    data-testid="contact-submit-btn"
                                    type="submit"
                                    className="group flex items-center gap-2 rounded-full bg-[#F5F5F5] px-8 py-3.5 text-sm font-semibold text-[#050505] transition-colors duration-300 hover:bg-[#22D3EE]"
                                >
                                    Send Query
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                                    />
                                </button>
                            </div>
                        </form>
                    </Reveal>
                    <div className="grid gap-5 lg:col-span-2">
                        {CONTACT_CARDS.map((c, i) => {
                            const Icon = ICONS[c.label] || Mail;
                            return (
                                <Reveal key={c.label} delay={i * 0.08}>
                                    <div
                                        data-testid={`contact-card-${c.label.toLowerCase()}`}
                                        className="glass-card group flex items-center gap-5 p-6 transition-colors duration-300 hover:border-[#22D3EE]/30"
                                    >
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#22D3EE]">
                                            <Icon size={18} aria-hidden="true" />
                                        </span>
                                        <div>
                                            <div className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
                                                {c.label}
                                            </div>
                                            <div className="mt-1 text-sm font-medium text-[#F5F5F5]">{c.value}</div>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
