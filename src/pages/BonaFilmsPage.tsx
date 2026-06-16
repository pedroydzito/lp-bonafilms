import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import CustomCursor from "@/components/CustomCursor";
import Magnetic from "@/components/Magnetic";
import RevealText from "@/components/RevealText";
import CountUp from "@/components/CountUp";
import {
  WORKS,
  WA_HREF,
  INSTAGRAM_HREF,
  INSTAGRAM_HANDLE,
} from "@/lib/videos";

const EASE = [0.22, 1, 0.36, 1] as const;

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeUp = {
  variants: revealVariants,
  initial: "hidden" as const,
  whileInView: "visible" as const,
  transition: { duration: 0.8, ease: EASE },
  viewport: { once: true, amount: 0.2 as const },
};


const STATS = [
  { value: 5, suffix: "+", label: "anos de\nestrada" },
  { value: 40, suffix: "+", label: "projetos\nentregues" },
  { value: 2, suffix: "k+", label: "seguidores\nno instagram" },
];

const PILLARS = [
  {
    num: "01",
    title: "História primeiro",
    desc: "Todo vídeo começa numa pergunta: o que essa história quer dizer? A narrativa vem antes da câmera.",
  },
  {
    num: "02",
    title: "Olhar e movimento",
    desc: "Cada frame é pensado pra durar. A câmera tem intenção e a luz é linguagem, não acessório.",
  },
  {
    num: "03",
    title: "Conexão real",
    desc: "O briefing é só o ponto de partida. A história precisa ser real pra emocionar quem assiste.",
  },
];

export default function BonaFilmsPage() {
  const [modalVideo, setModalVideo] = useState<{ src: string; isOpen: boolean }>({
    src: "",
    isOpen: false,
  });

  const openModal = (src: string) => setModalVideo({ src, isOpen: true });
  const closeModal = () => setModalVideo((prev) => ({ ...prev, isOpen: false }));

  return (
    <div className="min-h-screen bg-[#F2F2EE] text-[#0A0A0A] font-sans selection:bg-[#0A0A0A] selection:text-[#F2F2EE] overflow-x-hidden">
      <CustomCursor />
      <div className="grain-overlay" aria-hidden />

      <Header />

      <Hero />

      <MarqueeStrip />

      {/* ─── SOBRE ─── */}
      <section
        id="sobre"
        className="relative w-full bg-[#F2F2EE] py-[80px] md:py-[140px]"
      >
        <div className="editorial-grid absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-16 z-10">
          <motion.p
            className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#6B6B66] mb-10 md:mb-16"
            {...fadeUp}
          >
            (Sobre)
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            {/* Foto com zoom no hover */}
            <motion.div
              className="md:col-span-5 overflow-hidden bg-[#0A0A0A] group aspect-square"
              variants={{ hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, ease: EASE }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="/images/about-placeholder.png"
                alt="Gustavo Bonadeu com câmera"
                loading="lazy"
                className="w-full h-full object-cover object-bottom transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                style={{ filter: "grayscale(100%)" }}
              />
            </motion.div>

            {/* Texto */}
            <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
              <RevealText
                as="h2"
                text="O simples também é história, quando existe olhar."
                className="font-sans font-bold text-[#0A0A0A] mb-8"
                style={{
                  fontSize: "clamp(30px,4vw,52px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.02,
                }}
              />

              <motion.div {...fadeUp}>
                <p className="font-sans text-[17px] md:text-[19px] leading-relaxed text-[#0A0A0A] mb-4">
                  A Bona Films vem comigo desde o meu início no audiovisual, mas
                  por muito tempo ficou de lado. Eu era um{" "}
                  <span className="font-serif italic">filmmaker</span> independente
                  e não dava atenção a certos detalhes.
                </p>
                <p className="font-sans text-[17px] md:text-[19px] leading-relaxed text-[#0A0A0A] mb-4">
                  Com o tempo a gente amadurece, e o desejo de assumir isso como
                  uma produtora voltou. Dessa vez resolvi ir adiante e colocar
                  toda a minha energia aqui.
                </p>
                <p className="font-sans text-[17px] md:text-[19px] leading-relaxed text-[#0A0A0A]">
                  Hoje a Bona Films é sobre olhar. Sobre transformar o simples em
                  história.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-between md:grid md:grid-cols-3 mt-16 md:mt-24 border-t border-[#D4D4CE]">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`pt-7 md:pt-9 ${
                  i < 2 ? "md:pr-8 md:border-r md:border-[#D4D4CE]" : ""
                } ${i > 0 ? "md:pl-8" : ""}`}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div
                  className="font-sans font-black text-[#0A0A0A] flex items-baseline"
                  style={{
                    fontSize: "clamp(34px,5vw,68px)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-sans text-[13px] md:text-[14px] text-[#6B6B66] mt-3 whitespace-pre-line leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRABALHOS ─── */}
      <section id="trabalhos" className="w-full bg-[#0A0A0A] py-[80px] md:py-[150px]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-24 gap-6">
            <div>
              <motion.p
                className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#F2F2EE]/50 mb-5"
                {...fadeUp}
              >
                (Trabalhos selecionados)
              </motion.p>
              <RevealText
                as="h2"
                text="Em movimento."
                className="font-sans font-black text-[#F2F2EE]"
                style={{
                  fontSize: "clamp(48px,8vw,120px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                }}
              />
            </div>
            <motion.p
              className="font-sans text-[15px] md:text-[16px] text-[#F2F2EE]/60 max-w-[300px] md:text-right"
              {...fadeUp}
            >
              Alguns dos trabalhos que já realizei. Toque para assistir.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-14 md:gap-y-16">
            <div className="md:col-span-6">
              <VideoCard work={WORKS[0]} index="01" onClick={openModal} />
            </div>
            <div className="md:col-span-6 md:mt-24">
              <VideoCard work={WORKS[1]} index="02" onClick={openModal} />
            </div>
            <div className="md:col-span-6">
              <VideoCard work={WORKS[2]} index="03" onClick={openModal} />
            </div>
            <div className="md:col-span-6 md:mt-24">
              <VideoCard work={WORKS[3]} index="04" onClick={openModal} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESSO ─── */}
      <section className="relative w-full bg-[#F2F2EE] py-[80px] md:py-[150px]">
        <div className="editorial-grid absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-16 z-10">
          <motion.p
            className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#6B6B66] mb-10 md:mb-14"
            {...fadeUp}
          >
            (Processo)
          </motion.p>

          <RevealText
            as="h2"
            text="Como eu penso [br-md] cada vídeo."
            className="font-sans font-bold text-[#0A0A0A] max-w-[860px] mb-16 md:mb-28"
            style={{
              fontSize: "clamp(34px,6vw,84px)",
              letterSpacing: "-0.03em",
              lineHeight: 0.98,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.num}
                className="border-t border-[#0A0A0A] pt-7"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="font-mono text-[14px] text-[#6B6B66] mb-6">{pillar.num}</p>
                <h3 className="font-sans font-bold text-[24px] md:text-[28px] text-[#0A0A0A] mb-4 tracking-[-0.01em]">
                  {pillar.title}
                </h3>
                <p className="font-sans text-[16px] leading-relaxed text-[#6B6B66]">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip reverse />

      {/* ─── CONTATO ─── */}
      <section
        id="contato"
        className="relative w-full bg-[#0A0A0A] text-[#F2F2EE] py-[90px] md:py-[170px]"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-16 relative z-10">
          <motion.p
            className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#F2F2EE]/50 mb-10 md:mb-14"
            {...fadeUp}
          >
            (Contato)
          </motion.p>

          <RevealText
            as="h2"
            text="Vamos criar uma história."
            className="font-sans font-black text-[#F2F2EE] mb-14 md:mb-20"
            style={{
              fontSize: "clamp(48px,11vw,170px)",
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
            }}
          />

          <Magnetic strength={0.3}>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-[#F2F2EE] text-[#0A0A0A] font-sans font-medium text-[16px] md:text-[19px] px-8 md:px-10 py-5 md:py-6"
              data-testid="btn-whatsapp-contact"
            >
              Conversar no WhatsApp
              <ArrowUpRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </Magnetic>

          <div className="mt-14 md:mt-20">
            <p className="font-sans text-[14px] text-[#F2F2EE]/50 mb-4">
              Ou me chama no Instagram:
            </p>
            <a
              href={INSTAGRAM_HREF}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-2 font-sans font-medium text-[28px] md:text-[40px] text-[#F2F2EE]"
              style={{ letterSpacing: "-0.02em" }}
              data-testid="link-instagram"
            >
              {INSTAGRAM_HANDLE}
              <ArrowUpRight size={28} className="opacity-60" />
            </a>
          </div>
        </div>

        {/* giant outline word */}
        <p
          className="pointer-events-none select-none absolute -bottom-[2vw] left-1/2 -translate-x-1/2 font-sans font-black text-[#F2F2EE]/[0.03] whitespace-nowrap"
          style={{ fontSize: "26vw", letterSpacing: "-0.05em", lineHeight: 1 }}
          aria-hidden
        >
          BONA FILMS
        </p>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="w-full bg-[#0A0A0A] border-t border-[#1F1F1F] py-14 md:py-16 relative z-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="font-sans font-black text-[16px] text-[#F2F2EE]">
              BONA FILMS<span style={{ color: "var(--bona-red)" }}>.</span>
            </div>
            <div className="font-sans text-[13px] text-[#6B6B66] md:text-center">
              © 2026 Bona Films.<br />Todos os direitos reservados.
            </div>
            <div className="font-serif italic text-[15px] text-[#6B6B66] md:text-right leading-relaxed">
              A experiência<br />começa no olhar.
            </div>
          </div>


        </div>
      </footer>

      <VideoModal isOpen={modalVideo.isOpen} src={modalVideo.src} onClose={closeModal} />
    </div>
  );
}
