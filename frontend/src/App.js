import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Toaster } from "sonner";
import "@/App.css";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import BackgroundFX from "@/components/BackgroundFX";
import Navbar from "@/components/Navbar";
import SectionCounter from "@/components/SectionCounter";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import Community from "@/components/Community";
import WhatWeDo from "@/components/WhatWeDo";
import Achievements from "@/components/Achievements";
import IndustryConnect from "@/components/IndustryConnect";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { NAV_LINKS } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

function App() {
    const [loaded, setLoaded] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        window.__lenis = lenis;
        lenis.on("scroll", ScrollTrigger.update);
        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    useEffect(() => {
        if (!loaded) return;
        const refresh = setTimeout(() => ScrollTrigger.refresh(), 100);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: "-35% 0px -60% 0px" },
        );
        NAV_LINKS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => {
            clearTimeout(refresh);
            observer.disconnect();
        };
    }, [loaded]);

    return (
        <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
            {!loaded && <Loader onComplete={() => setLoaded(true)} />}
            <CustomCursor />
            <BackgroundFX />
            <Navbar active={active} />
            <SectionCounter active={active} />
            <main className="relative z-10">
                <Hero />
                <VisionMission />
                <Community />
                <WhatWeDo />
                <Achievements />
                <IndustryConnect />
                <Events />
                <Team />
                <Contact />
            </main>
            <Footer />
            <Toaster theme="dark" position="bottom-right" />
        </div>
    );
}

export default App;
