import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [label, setLabel] = useState("");
    const [enabled] = useState(
        () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches,
    );

    useEffect(() => {
        if (!enabled) return;
        const pos = { x: -100, y: -100 };
        const ring = { x: -100, y: -100 };
        let raf;
        const onMove = (e) => {
            pos.x = e.clientX;
            pos.y = e.clientY;
        };
        const onOver = (e) => {
            const ringEl = ringRef.current;
            if (!ringEl) return;
            const t = e.target.closest("[data-cursor], a, button, input, textarea");
            if (t) {
                const mode = t.getAttribute("data-cursor");
                ringEl.classList.add("cursor-active");
                if (mode === "view") {
                    setLabel("VIEW");
                    ringEl.classList.add("cursor-labelled");
                } else if (mode === "drag") {
                    setLabel("SCROLL");
                    ringEl.classList.add("cursor-labelled");
                } else {
                    setLabel("");
                    ringEl.classList.remove("cursor-labelled");
                }
            } else {
                ringEl.classList.remove("cursor-active", "cursor-labelled");
                setLabel("");
            }
        };
        const loop = () => {
            ring.x += (pos.x - ring.x) * 0.16;
            ring.y += (pos.y - ring.y) * 0.16;
            if (dotRef.current)
                dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%)`;
            if (ringRef.current)
                ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%,-50%)`;
            raf = requestAnimationFrame(loop);
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        document.addEventListener("mouseover", onOver);
        raf = requestAnimationFrame(loop);
        return () => {
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onOver);
            cancelAnimationFrame(raf);
        };
    }, [enabled]);

    if (!enabled) return null;
    return (
        <>
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
            <div ref={ringRef} className="cursor-ring" aria-hidden="true">
                <span>{label}</span>
            </div>
        </>
    );
}
