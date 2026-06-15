import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Menu, X } from "lucide-react";
import MarqueeStrip from "@/components/MarqueeStrip";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";

const fadeInProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-100px" as any }
};

export default function BonaFilmsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState<{ src: string; isOpen: boolean }>({
    src: "",
    isOpen: false,
  });

  const [showreelPlaying, setShowreelPlaying] = useState(false);
  const showreelRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (src: string) => setModalVideo({ src, isOpen: true });
  const closeModal = () => setModalVideo(prev => ({ ...prev, isOpen: false }));

  const handleShowreelPlay = () => {
    if (showreelRef.current) {
      setShowreelPlaying(true);
      showreelRef.current.play().catch(() => {});
      showreelRef.current.controls = true;
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2EE] text-[#0A0A0A] font-sans selection:bg-[#0A0A0A] selection:text-[#F2F2EE]">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F2F2EE]/85 backdrop-blur-md border-b border-[#D4D4CE]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-16 h-[64px] md:h-[72px] flex items-center justify-between">
          <div className="font-sans font-black text-lg tracking-tight">BONA FILMS.</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#work" className="font-sans font-medium text-[14px] hover:opacity-60 transition-opacity">Work</a>
            <a href="#about" className="font-sans font-medium text-[14px] hover:opacity-60 transition-opacity">About</a>
            <a href="#contact" className="font-sans font-medium text-[14px] hover:opacity-60 transition-opacity">Contact</a>
          </nav>

          <div className="hidden md:block font-mono text-xs text-[#6B6B66]">29.3782° S</div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="btn-menu-open"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0A0A0A] text-[#F2F2EE] flex flex-col justify-center px-6">
          <button
            className="absolute top-6 right-6 p-2"
            onClick={() => setMobileMenuOpen(false)}
            data-testid="btn-menu-close"
          >
            <X size={32} />
          </button>
          
          <nav className="flex flex-col gap-8 text-[clamp(48px,7vw,80px)] font-black tracking-tight">
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">Work</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">Contact</a>
          </nav>
        </div>
      )}

      {/* SECTION 02 — HERO */}
      <section className="relative w-full h-[100vh] min-h-[700px] md:min-h-[800px] bg-[#F2F2EE] overflow-hidden flex flex-col pt-[120px]">
        {/* Mobile Title (Above photo) */}
        <div className="md:hidden px-6 mb-6 z-10">
          <h1 className="font-sans font-black text-[clamp(64px,14vw,220px)] leading-[0.85] tracking-[-0.05em] text-[#0A0A0A]">
            Bona Films
          </h1>
        </div>

        {/* Desktop Title (Mix-blend over photo) */}
        <h1 className="hidden md:block absolute top-[8%] left-16 font-sans font-black text-[clamp(80px,14vw,220px)] leading-[0.85] tracking-[-0.05em] text-[#F2F2EE] mix-blend-difference z-10 pointer-events-none">
          Bona Films
        </h1>

        <div className="relative mx-auto w-full px-6 md:px-0 max-w-[80vw] aspect-[4/5] md:aspect-[16/10] bg-[#0A0A0A]">
          <img
            src="/images/hero-placeholder.png"
            alt="Gustavo Bonadeu"
            className="w-full h-full object-cover filter grayscale contrast-105"
          />
          
          <div className="absolute bottom-6 left-6 max-w-[280px]">
            <p className="font-sans text-[14px] text-[#F2F2EE] opacity-90 leading-relaxed">
              A creative film production concept showcasing storytelling, motion and emotion.
            </p>
          </div>
          
          <div className="absolute bottom-6 right-6">
            <p className="font-mono text-[12px] text-[#F2F2EE] opacity-90">
              29.3782° S
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 03 — MARQUEE */}
      <MarqueeStrip />

      {/* SECTION 04 — ABOUT */}
      <section id="about" className="w-full bg-[#F2F2EE] py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <motion.div {...fadeInProps}>
            <p className="font-sans font-medium text-[13px] text-[#6B6B66] mb-12">(About)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6">
              <div className="md:col-span-5 aspect-[4/5] bg-[#0A0A0A]">
                <img
                  src="/images/about-placeholder.png"
                  alt="Gustavo behind the camera"
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
              
              <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center mt-8 md:mt-0">
                <h2 className="font-sans font-bold text-[32px] md:text-[48px] tracking-[-0.03em] leading-none mb-8 text-[#0A0A0A]">
                  We craft cinematic stories for brands and people that want to be remembered.
                </h2>
                
                <p className="font-sans text-[18px] leading-relaxed text-[#0A0A0A] opacity-90 mb-4">
                  Bona Films é a produtora audiovisual de Gustavo Bonadeu. Realizamos vídeos comerciais, institucionais e autorais com foco em narrativa visual, ritmo e emoção.
                </p>
                <p className="font-sans text-[18px] leading-relaxed text-[#0A0A0A] opacity-90">
                  Baseados no Rio Grande do Sul. Rodando o Brasil.
                </p>
                
                <div className="grid grid-cols-3 mt-20 border-t border-[#D4D4CE]">
                  <div className="pt-8 pr-4 border-r border-[#D4D4CE]">
                    <div className="font-sans font-black text-[clamp(32px,4vw,64px)] tracking-[-0.04em] leading-none text-[#0A0A0A]">05+</div>
                    <div className="font-sans text-[14px] text-[#6B6B66] mt-3 leading-tight">Years<br/>of craft</div>
                  </div>
                  <div className="pt-8 px-4 border-r border-[#D4D4CE]">
                    <div className="font-sans font-black text-[clamp(32px,4vw,64px)] tracking-[-0.04em] leading-none text-[#0A0A0A]">40+</div>
                    <div className="font-sans text-[14px] text-[#6B6B66] mt-3 leading-tight">Projects<br/>delivered</div>
                  </div>
                  <div className="pt-8 pl-4">
                    <div className="font-sans font-black text-[clamp(32px,4vw,64px)] tracking-[-0.04em] leading-none text-[#0A0A0A]">2k+</div>
                    <div className="font-sans text-[14px] text-[#6B6B66] mt-3 leading-tight">Followers<br/>on IG</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 05 — SHOWREEL */}
      <section id="work" className="w-full bg-[#0A0A0A] py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <motion.div {...fadeInProps}>
            <p className="font-sans font-medium text-[13px] text-[#6B6B66] mb-12">(Showreel — 2025)</p>
            
            <div className="relative w-full aspect-video bg-black group">
              <video
                ref={showreelRef}
                src="/videos/showreel.mp4"
                poster="/images/showreel-poster.png"
                className="w-full h-full object-cover"
                playsInline
                preload="metadata"
                onError={() => console.warn("Showreel video not found")}
              />
              
              {!showreelPlaying && (
                <button 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[96px] h-[96px] rounded-full bg-[#F2F2EE] flex items-center justify-center transition-transform duration-300 hover:scale-110 z-10"
                  onClick={handleShowreelPlay}
                  data-testid="btn-play-showreel"
                >
                  <Play size={32} className="text-[#0A0A0A] ml-2" fill="currentColor" />
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-2 mt-6">
              <div>
                <p className="font-mono text-[14px] text-[#6B6B66]">Reel 2025</p>
                <p className="font-mono text-[14px] text-[#6B6B66]">A year in motion</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[14px] text-[#6B6B66]">Directed & shot by</p>
                <p className="font-mono text-[14px] text-[#6B6B66]">Gustavo Bonadeu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 06 — SELECTED WORK */}
      <section className="w-full bg-[#F2F2EE] py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <p className="font-sans font-medium text-[13px] text-[#6B6B66] mb-12">(Selected Work)</p>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-6 md:gap-y-16">
            <motion.div className="md:col-span-8" {...fadeInProps}>
              <VideoCard
                poster="/images/work-01-poster.png"
                videoSrc="/videos/work-01.mp4"
                client="Oceano"
                type="Commercial Campaign"
                year="2024"
                aspectClass="aspect-video"
                onClick={openModal}
              />
            </motion.div>
            
            <motion.div className="md:col-span-4" {...fadeInProps}>
              <VideoCard
                poster="/images/work-02-poster.png"
                videoSrc="/videos/work-02.mp4"
                client="Reserva"
                type="Documentary Short"
                year="2025"
                aspectClass="aspect-[4/5]"
                onClick={openModal}
              />
            </motion.div>
            
            <motion.div className="md:col-span-12" {...fadeInProps}>
              <VideoCard
                poster="/images/work-03-poster.png"
                videoSrc="/videos/work-03.mp4"
                client="Vale do Vento"
                type="Brand Film"
                year="2024"
                aspectClass="aspect-[21/9]"
                onClick={openModal}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — APPROACH */}
      <section className="w-full bg-[#0A0A0A] py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <motion.div {...fadeInProps}>
            <p className="font-sans font-medium text-[13px] text-[#6B6B66] mb-12">(Approach)</p>
            
            <h2 className="font-sans font-bold text-[clamp(48px,7vw,96px)] tracking-[-0.03em] leading-none text-[#F2F2EE] max-w-[720px] mb-24">
              Three principles that guide every frame we shoot.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              {[
                { num: "01", title: "Story first", desc: "Cada vídeo começa numa pergunta: o que essa história quer dizer? Antes da câmera, vem a narrativa." },
                { num: "02", title: "Light & motion", desc: "Frames pensados pra durar. Movimento de câmera com intenção, luz como linguagem, não como acessório." },
                { num: "03", title: "Real connection", desc: "Cliente não é briefing — é conversa. A história precisa ser real pra emocionar quem assiste." }
              ].map((pillar, i) => (
                <motion.div 
                  key={pillar.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <p className="font-mono text-[14px] text-[#6B6B66]">{pillar.num}</p>
                  <div className="w-8 h-[1px] bg-[#6B6B66] my-4"></div>
                  <h3 className="font-sans font-bold text-[28px] text-[#F2F2EE] mb-4">{pillar.title}</h3>
                  <p className="font-sans text-[16px] text-[#F2F2EE]/70 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 08 — CONTACT */}
      <section id="contact" className="w-full bg-[#F2F2EE] py-[100px] md:py-[160px]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <motion.div {...fadeInProps}>
            <p className="font-sans font-medium text-[13px] text-[#6B6B66] mb-12">(Contact)</p>
            
            <h2 className="font-sans font-black text-[clamp(80px,12vw,180px)] tracking-[-0.05em] leading-[0.9] text-[#0A0A0A] mb-24">
              Let's make something that matters.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="border-t border-[#D4D4CE] pt-6">
                <p className="font-sans font-medium text-[13px] text-[#6B6B66] mb-3">WhatsApp</p>
                <a 
                  href="https://wa.me/5554997227310?text=Oi%20Gustavo%2C%20vim%20pelo%20site!" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block font-sans font-medium text-[clamp(32px,4vw,56px)] tracking-[-0.03em] text-[#0A0A0A] hover:underline underline-offset-8 decoration-2"
                >
                  +55 54 9972-2731 &rarr;
                </a>
              </div>
              
              <div className="border-t border-[#D4D4CE] pt-6">
                <p className="font-sans font-medium text-[13px] text-[#6B6B66] mb-3">Instagram</p>
                <a 
                  href="https://instagram.com/gbonadeu_" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block font-sans font-medium text-[clamp(32px,4vw,56px)] tracking-[-0.03em] text-[#0A0A0A] hover:underline underline-offset-8 decoration-2"
                >
                  @gbonadeu_ &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#0A0A0A] border-t border-[#1F1F1F] py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="font-sans font-black text-[16px] text-[#F2F2EE] text-center md:text-left">
              BONA FILMS.
            </div>
            
            <div className="font-sans text-[13px] text-[#6B6B66] text-center">
              © 2026 Bona Films. Todos os direitos reservados.
            </div>
            
            <div className="font-mono text-[12px] text-[#6B6B66] text-center md:text-right">
              29.3782° S
            </div>
          </div>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      <VideoModal
        isOpen={modalVideo.isOpen}
        src={modalVideo.src}
        onClose={closeModal}
      />
    </div>
  );
}