import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_VIDEO } from "@/lib/videos";

const EASE = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-[#0A0A0A] text-[#F2F2EE]"
    >
      {/* Ambient background video */}
      <motion.div className="absolute inset-0 z-0" style={{ y: videoY, scale: videoScale }}>
        {/* poster fallback (mostra enquanto o vídeo carrega / se não tocar) */}
        <img
          src="/images/showreel-poster.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.7)" }}
        />
        <video
          src={encodeURI(HERO_VIDEO)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.7)" }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* Overlays: gradient + vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.15) 35%, rgba(10,10,10,0.25) 65%, rgba(10,10,10,0.9) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ boxShadow: "inset 0 0 200px 60px rgba(10,10,10,0.7)" }}
      />

      {/* Corner micro-texts */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          className="absolute top-[88px] md:top-[110px] left-6 md:left-16"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
        >
          <p className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.12em] text-[#F2F2EE]/70 leading-relaxed">
            filmmaker<br />& produtora
          </p>
        </motion.div>

        <motion.div
          className="absolute top-[88px] md:top-[110px] right-6 md:right-16 text-right"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: EASE }}
        >
          <p className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.12em] text-[#F2F2EE]/70 leading-relaxed">
            imagem<br />& narrativa
          </p>
        </motion.div>
      </div>

      {/* Center headline */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <motion.p
          className="font-mono text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-[#F2F2EE]/60 mb-5 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Produtora Audiovisual
        </motion.p>

        <h1
          className="font-sans font-black leading-[0.82]"
          style={{
            fontSize: "clamp(68px, 17vw, 280px)",
            letterSpacing: "-0.05em",
          }}
        >
          <Line delay={0.25}>BONA</Line>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}
            >
              FILMS<span style={{ color: "var(--bona-red)" }}>.</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="font-sans text-[15px] md:text-[19px] text-[#F2F2EE]/75 mt-6 md:mt-10 max-w-[460px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
        >
          O simples também é história. Quando existe olhar.
        </motion.p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-7 md:bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2F2EE]/50">
          role
        </span>
        <div className="w-[1px] h-10 bg-[#F2F2EE]/25 relative overflow-hidden">
          <span className="scroll-cue-dot absolute top-0 left-0 w-full h-3 bg-[#F2F2EE]/90" />
        </div>
      </motion.div>

      {/* Bottom-right year */}
      <motion.div
        className="absolute bottom-7 md:bottom-9 right-6 md:right-16 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <p className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.12em] text-[#F2F2EE]/60">
          desde 2020
        </p>
      </motion.div>
    </section>
  );
}
