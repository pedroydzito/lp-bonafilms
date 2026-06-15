export default function MarqueeStrip() {
  return (
    <div className="w-full overflow-hidden border-y border-[#0A0A0A] bg-[#F2F2EE] py-8">
      <div className="marquee-inner">
        <span
          className="font-sans font-black text-[#0A0A0A] tracking-[-0.03em] whitespace-nowrap"
          style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          BONA FILMS — VÍDEOS QUE FICAM NA MEMÓRIA —&nbsp;
        </span>
        <span
          className="font-sans font-black text-[#0A0A0A] tracking-[-0.03em] whitespace-nowrap"
          style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          BONA FILMS — VÍDEOS QUE FICAM NA MEMÓRIA —&nbsp;
        </span>
      </div>
    </div>
  );
}
