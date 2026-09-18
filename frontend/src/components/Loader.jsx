import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);
    const rootRef = useRef(null);

    useEffect(() => {
        let p = 0;
        const iv = setInterval(() => {
            p += Math.floor(Math.random() * 5) + 3;
            if (p >= 100) {
                p = 100;
                clearInterval(iv);
                setDone(true);
            }
            setProgress(p);
        }, 30);
        return () => clearInterval(iv);
    }, []);

    useEffect(() => {
        if (!done) return;
        const t = setTimeout(() => {
            gsap.to(rootRef.current, {
                yPercent: -100,
                duration: 0.9,
                ease: "power4.inOut",
                onComplete,
            });
        }, 500);
        return () => clearTimeout(t);
    }, [done, onComplete]);

    return (
        <div
            ref={rootRef}
            data-testid="loader"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
        >
            <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
                KRITHIM <span className="text-gradient">DHI</span>
            </div>
            <div className="mt-3 font-mono2 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#A1A1AA]">
                Artificial Intelligence & Machine Learning
            </div>
            <div className="mt-14 w-56 sm:w-72">
                <div className="flex items-end justify-between">
                    <span className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#8B5CF6]">
                        {done ? "Welcome to Krithim Dhi" : "Initializing Intelligence..."}
                    </span>
                    <span className="font-mono2 text-2xl text-[#F5F5F5]" data-testid="loader-percent">
                        {String(progress).padStart(2, "0")}
                    </span>
                </div>
                <div className="mt-3 h-px w-full bg-white/10">
                    <div
                        className="h-px bg-gradient-to-r from-[#8B5CF6] via-[#22D3EE] to-[#D946EF] transition-[width] duration-100 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
