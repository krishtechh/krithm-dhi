export default function BackgroundFX() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-grid" />
            <div className="absolute -top-48 left-1/4 h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />
            <div className="absolute top-1/2 -right-48 h-[520px] w-[520px] rounded-full bg-[#22D3EE]/[0.08] blur-[140px]" />
            <div className="absolute -bottom-24 -left-24 h-[440px] w-[440px] rounded-full bg-[#D946EF]/[0.06] blur-[140px]" />
            <div className="absolute inset-0 noise" />
        </div>
    );
}
