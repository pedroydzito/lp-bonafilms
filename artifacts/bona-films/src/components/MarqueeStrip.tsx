interface MarqueeStripProps {
  reverse?: boolean;
}

const PHRASE = "O SIMPLES TAMBÉM É HISTÓRIA";

export default function MarqueeStrip({ reverse = false }: MarqueeStripProps) {
  const items = Array.from({ length: 8 });
  return (
    <div className="marquee-wrap w-full overflow-hidden border-y border-[#0A0A0A] bg-[#F2F2EE] py-6 md:py-8 select-none">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {items.map((_, i) => (
          <span
            key={i}
            className="font-sans font-black text-[#0A0A0A] tracking-[-0.03em] whitespace-nowrap flex items-center"
            style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}
          >
            {PHRASE}
            <span
              className="inline-block mx-6 md:mx-10 rounded-full"
              style={{
                width: "0.45em",
                height: "0.45em",
                background: "var(--bona-red)",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
