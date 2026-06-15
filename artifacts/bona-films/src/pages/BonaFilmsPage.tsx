import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import MarqueeStrip from "@/components/MarqueeStrip";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";

const fadeInProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-100px" as const },
};

const editorialGridStyle: React.CSSProperties = {
  backgroundImage: "linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px)",
  backgroundSize: "calc((100% - 128px) / 12) 100%",
  backgroundPosition: "64px 0",
  backgroundRepeat: "repeat",
};

const WA_HREF = "https://wa.me/5554997227310?text=Oi%20Gustavo%2C%20vim%20pelo%20site%20da%20Bona%20Films!";

export default function BonaFilmsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalVideo, setModalVideo] = useState<{ src: string; isOpen: boolean }>({ src: "", isOpen: false });
  const [reelPlaying, setReelPlaying] = useState(false);
  const reelRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (src: string) => setModalVideo({ src, isOpen: true });
  const closeModal = () => setModalVideo((prev) => ({ ...prev, isOpen: false }));

  const handleReelPlay = () => {
    if (reelRef.current) {
      setReelPlaying(true);
      reelRef.current.play().catch(() => {});
      reelRef.current.controls = true;
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2EE] text-[#0A0A0A] font-sans selection:bg-[#0A0A0A] selection:text-[#F2F2EE]">

      {/* ─── HEADER ─── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F2F2EE]/85 backdrop-blur-md border-b border-[#D4D4CE]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-16 h-[64px] md:h-[72px] flex items-center justify-between">
          <a
            href="#"
            className="font-sans font-black text-[18px] tracking-[-0.02em] text-[#0A0A0A]"
            data-testid="link-logo"
          >
            BONA FILMS.
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#trabalhos" className="font-sans font-medium text-[15px] hover:opacity-60 transition-opacity" data-testid="nav-trabalhos">Trabalhos</a>
            <a href="#sobre" className="font-sans font-medium text-[15px] hover:opacity-60 transition-opacity" data-testid="nav-sobre">Sobre</a>
            <a href="#contato" className="font-sans font-medium text-[15px] hover:opacity-60 transition-opacity" data-testid="nav-contato">Contato</a>
          </nav>

          <a
            href={WA_HREF}
            target="_blank"
            rel="noreferrer"
            className="wa-btn-compact inline-flex items-center gap-2 bg-[#0A0A0A] text-[#F2F2EE] font-sans font-medium text-[14px] tracking-[-0.01em] px-[18px] py-[10px] transition-all duration-[250ms]"
            style={{ borderRadius: 0 }}
            data-testid="btn-whatsapp-header"
          >
            Conversar <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      {/* ─── SEÇÃO 01 — HERO ─── */}
      <section
        className="relative w-full min-h-screen overflow-hidden bg-[#F2F2EE]"
        style={editorialGridStyle}
      >
        {/* Micro-texto top-left */}
        <div className="absolute top-[90px] md:top-[100px] left-6 md:left-16 z-10">
          <p className="font-sans text-[13px] text-[#6B6B66] leading-snug">
            videomaker<br />& criador de reels
          </p>
          <div className="w-6 h-[1px] bg-[#6B6B66] mt-3" />
        </div>

        {/* Micro-texto top-right */}
        <div className="absolute top-[90px] md:top-[100px] right-6 md:right-16 z-10 text-right">
          <p className="font-sans text-[13px] text-[#6B6B66] leading-snug">
            baseado em<br />caxias do sul, rs
          </p>
          <div className="w-6 h-[1px] bg-[#6B6B66] mt-3 ml-auto" />
        </div>

        {/* Micro-texto bottom-left */}
        <div className="absolute bottom-12 md:bottom-16 left-6 md:left-16 z-10">
          <p className="font-sans text-[13px] text-[#6B6B66] leading-snug">
            histórias cinematográficas<br />para marcas e pessoas
          </p>
          <div className="w-6 h-[1px] bg-[#6B6B66] mt-3" />
        </div>

        {/* Micro-texto bottom-right */}
        <div className="absolute bottom-12 md:bottom-16 right-6 md:right-16 z-10 text-right">
          <div className="w-6 h-[1px] bg-[#6B6B66] mb-3 ml-auto" />
          <p className="font-mono text-[12px] text-[#6B6B66]">desde 2020</p>
        </div>

        {/* Composição central: foto + título */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Foto — vertical 4:5, atrás do título */}
          <img
            src="/images/hero-placeholder.png"
            alt="Gustavo Bonadeu"
            className="absolute"
            style={{
              width: "540px",
              maxWidth: "55%",
              aspectRatio: "4 / 5",
              objectFit: "cover",
              objectPosition: "center top",
              filter: "grayscale(100%) contrast(1.1)",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -45%)",
            }}
          />

          {/* Título GIGANTE — mix-blend-mode: difference sobre a foto */}
          <h1
            className="relative font-sans font-black text-center pointer-events-none w-full px-6 md:px-16"
            style={{
              fontSize: "clamp(80px, 18vw, 280px)",
              letterSpacing: "-0.05em",
              lineHeight: 0.85,
              color: "#F2F2EE",
              mixBlendMode: "difference",
              zIndex: 5,
            }}
          >
            Bona Films
          </h1>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <MarqueeStrip />

      {/* ─── SEÇÃO 02 — SOBRE ─── */}
      <section
        id="sobre"
        className="w-full bg-[#F2F2EE] py-[80px] md:py-[120px]"
        style={editorialGridStyle}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <motion.div {...fadeInProps}>
            <p className="font-sans font-medium text-[13px] text-[#6B6B66] mb-12">(Sobre)</p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Foto */}
              <div className="md:col-span-5 bg-[#0A0A0A]" style={{ aspectRatio: "4/5" }}>
                <img
                  src="/images/about-placeholder.png"
                  alt="Gustavo com câmera"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(100%)" }}
                />
              </div>

              {/* Texto */}
              <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
                <h2
                  className="font-sans font-bold text-[#0A0A0A] mb-8"
                  style={{ fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-0.03em", lineHeight: 1 }}
                >
                  Vídeos que ficam na memória.
                </h2>

                <p className="font-sans text-[18px] leading-relaxed text-[#0A0A0A] mb-4">
                  Bona Films é a produtora audiovisual de Gustavo Bonadeu. Videomaker e criador de reels com foco em narrativa visual, ritmo e emoção.
                </p>
                <p className="font-sans text-[18px] leading-relaxed text-[#0A0A0A] mb-4">
                  Realizamos comerciais, institucionais e conteúdo autoral para marcas e pessoas.
                </p>
                <p className="font-sans text-[18px] leading-relaxed text-[#0A0A0A]">
                  Baseados no Rio Grande do Sul. Rodando o Brasil.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 mt-20 border-t border-[#D4D4CE]">
              {[
                { num: "05+", label: "anos de\nestrada" },
                { num: "40+", label: "projetos\nentregues" },
                { num: "2k+", label: "seguidores\nno instagram" },
              ].map((stat, i) => (
                <div
                  key={stat.num}
                  className={`pt-8 ${i < 2 ? "pr-4 md:pr-8 border-r border-[#D4D4CE]" : ""} ${i > 0 ? "pl-4 md:pl-8" : ""}`}
                >
                  <div
                    className="font-sans font-black text-[#0A0A0A]"
                    style={{ fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.04em", lineHeight: 1 }}
                  >
                    {stat.num}
                  </div>
                  <div className="font-sans text-[14px] text-[#6B6B66] mt-3 whitespace-pre-line leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SEÇÃO 03 — REEL ─── */}
      <section id="trabalhos" className="w-full bg-[#0A0A0A] py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <motion.div {...fadeInProps}>
            <p className="font-sans font-medium text-[13px] text-[#6B6B66] mb-12">(Reel — 2025)</p>

            <div className="relative w-full aspect-video bg-black">
              <video
                ref={reelRef}
                src="/videos/reel.mp4"
                poster="/images/showreel-poster.png"
                className="w-full h-full object-cover"
                playsInline
                preload="metadata"
                onError={() => console.warn("Reel não encontrado")}
              />
              {!reelPlaying && (
                <button
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] md:w-[96px] md:h-[96px] rounded-full bg-[#F2F2EE] flex items-center justify-center hover:scale-110 transition-transform duration-300 z-10"
                  onClick={handleReelPlay}
                  data-testid="btn-play-reel"
                >
                  <Play size={28} className="text-[#0A0A0A] ml-1 md:ml-2" fill="currentColor" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 mt-6">
              <div>
                <p className="font-mono text-[14px] text-[#6B6B66]">Reel 2025</p>
                <p className="font-mono text-[14px] text-[#6B6B66]">Um ano em movimento</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[14px] text-[#6B6B66]">Filmado e editado por</p>
                <p className="font-mono text-[14px] text-[#6B6B66]">Gustavo Bonadeu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SEÇÃO 04 — TRABALHOS SELECIONADOS ─── */}
      <section className="w-full bg-[#F2F2EE] py-[100px] md:py-[160px]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <p className="font-sans font-medium text-[13px] text-[#6B6B66] mb-16">(Trabalhos selecionados)</p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-16 md:gap-y-20">
            {/* Vídeo 1 — col 6, 16:9 */}
            <motion.div className="md:col-span-6" {...fadeInProps}>
              <VideoCard
                poster="/images/work-01-poster.png"
                videoSrc="/videos/work-01.mp4"
                client="[Cliente 1]"
                type="Comercial"
                year="2025"
                onClick={openModal}
              />
            </motion.div>

            {/* Vídeo 2 — col 6, 16:9 */}
            <motion.div className="md:col-span-6" {...fadeInProps}>
              <VideoCard
                poster="/images/work-02-poster.png"
                videoSrc="/videos/work-02.mp4"
                client="Olivas de Gramado"
                type="Cobertura de Evento"
                year="2024"
                onClick={openModal}
              />
            </motion.div>

            {/* Vídeo 3 — full-width, 16:9 */}
            <motion.div className="md:col-span-12" {...fadeInProps}>
              <VideoCard
                poster="/images/work-03-poster.png"
                videoSrc="/videos/work-03.mp4"
                client="Nordweg"
                type="Filme Institucional"
                year="2024"
                onClick={openModal}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SEÇÃO 05 — PROCESSO ─── */}
      <section className="w-full bg-[#0A0A0A] py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <motion.div {...fadeInProps}>
            <p className="font-sans font-medium text-[13px] text-[#6B6B66] mb-12">(Processo)</p>

            <h2
              className="font-sans font-bold text-[#F2F2EE] max-w-[720px] mb-24"
              style={{ fontSize: "clamp(48px,7vw,96px)", letterSpacing: "-0.03em", lineHeight: 1 }}
            >
              Três princípios em cada vídeo que entrego.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              {[
                {
                  num: "01",
                  title: "História primeiro",
                  desc: "Todo vídeo começa numa pergunta: o que essa história quer dizer? Antes da câmera, vem a narrativa.",
                },
                {
                  num: "02",
                  title: "Luz & movimento",
                  desc: "Frames pensados pra durar. Câmera com intenção, luz como linguagem — não como acessório.",
                },
                {
                  num: "03",
                  title: "Conexão real",
                  desc: "Briefing é só o começo. A história precisa ser real pra emocionar quem assiste.",
                },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <p className="font-mono text-[14px] text-[#6B6B66]">{pillar.num}</p>
                  <div className="w-8 h-[1px] bg-[#6B6B66] my-4" />
                  <h3 className="font-sans font-bold text-[28px] text-[#F2F2EE] mb-4">{pillar.title}</h3>
                  <p className="font-sans text-[16px] leading-relaxed text-[#F2F2EE]/70">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SEÇÃO 06 — CONTATO ─── */}
      <section
        id="contato"
        className="w-full bg-[#F2F2EE] py-[100px] md:py-[160px]"
        style={editorialGridStyle}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <motion.div {...fadeInProps}>
            <p className="font-sans font-medium text-[13px] text-[#6B6B66] mb-12">(Contato)</p>

            <h2
              className="font-sans font-black text-[#0A0A0A] mb-24"
              style={{ fontSize: "clamp(72px,11vw,160px)", letterSpacing: "-0.05em", lineHeight: 0.9 }}
            >
              Vamos fazer<br />algo memorável.
            </h2>

            {/* Botão WhatsApp grande */}
            <a
              href={WA_HREF}
              target="_blank"
              rel="noreferrer"
              className="wa-btn-large inline-block font-sans font-medium text-[18px] tracking-[-0.01em] bg-[#0A0A0A] text-[#F2F2EE] px-10 py-6 transition-all duration-300"
              style={{ borderRadius: 0 }}
              data-testid="btn-whatsapp-contact"
            >
              Conversar no WhatsApp →
            </a>

            {/* Instagram */}
            <div className="mt-16">
              <p className="font-sans text-[14px] text-[#6B6B66] mb-4">Ou me chama no Instagram:</p>
              <a
                href="https://instagram.com/gbonadeu_"
                target="_blank"
                rel="noreferrer"
                className="font-sans font-medium text-[32px] text-[#0A0A0A] hover:underline decoration-2 underline-offset-6"
                style={{ letterSpacing: "-0.02em" }}
                data-testid="link-instagram"
              >
                @gbonadeu_ ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="w-full bg-[#0A0A0A] border-t border-[#1F1F1F] py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          {/* Linha principal: 3 colunas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="font-sans font-black text-[16px] text-[#F2F2EE]">BONA FILMS.</div>
            <div className="font-sans text-[13px] text-[#6B6B66] md:text-center">
              © 2026 Bona Films.<br />Todos os direitos reservados.
            </div>
            <div className="font-mono text-[12px] text-[#6B6B66] md:text-right leading-relaxed">
              29.3782° S<br />−51.1794° W<br />caxias do sul
            </div>
          </div>

          {/* Linha inferior: links sociais */}
          <div className="mt-12 pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row gap-6 sm:gap-8">
            <a
              href="https://instagram.com/gbonadeu_"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[14px] text-[#F2F2EE] hover:opacity-70 transition-opacity"
              data-testid="footer-link-instagram"
            >
              <span className="text-[#6B6B66]">(Instagram)</span>
              <span className="text-[#6B6B66]">↗</span>
              <span>@gbonadeu_</span>
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[14px] text-[#F2F2EE] hover:opacity-70 transition-opacity"
              data-testid="footer-link-whatsapp"
            >
              <span className="text-[#6B6B66]">(WhatsApp)</span>
              <span className="text-[#6B6B66]">↗</span>
              <span>+55 54 9972-2731</span>
            </a>
          </div>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      <VideoModal isOpen={modalVideo.isOpen} src={modalVideo.src} onClose={closeModal} />
    </div>
  );
}
