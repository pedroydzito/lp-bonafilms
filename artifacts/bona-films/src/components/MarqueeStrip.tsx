export default function MarqueeStrip() {
  return (
    <div className="w-full overflow-hidden border-y border-[#0A0A0A] bg-[#F2F2EE] py-8">
      <div className="marquee-inner">
        <span className="font-sans font-black text-[72px] text-[#0A0A0A] tracking-tighter">
          BONA FILMS — CINEMATIC STORYTELLING — BONA FILMS — CINEMATIC STORYTELLING —&nbsp;
        </span>
        <span className="font-sans font-black text-[72px] text-[#0A0A0A] tracking-tighter">
          BONA FILMS — CINEMATIC STORYTELLING — BONA FILMS — CINEMATIC STORYTELLING —&nbsp;
        </span>
      </div>
    </div>
  );
}