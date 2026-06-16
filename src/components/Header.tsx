import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import { WA_HREF } from "@/lib/videos";

const NAV = [
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // header is over the dark hero at top or menu open -> light text; after scroll -> cream bg, dark text
  const onDark = !scrolled || menuOpen;

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className={`fixed top-0 left-0 w-full z-[110] transition-colors duration-300 ${
          scrolled && !menuOpen
            ? "bg-[#F2F2EE]/85 backdrop-blur-md border-b border-[#D4D4CE]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-16 h-[64px] md:h-[76px] flex items-center justify-between">
          <a
            href="#"
            className={`font-sans font-black text-[18px] tracking-[-0.03em] transition-colors duration-300 ${
              onDark ? "text-[#F2F2EE]" : "text-[#0A0A0A]"
            }`}
            data-testid="link-logo"
          >
            BONA FILMS<span style={{ color: "var(--bona-red)" }}>.</span>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`link-underline font-sans font-medium text-[14px] tracking-[-0.01em] transition-colors duration-300 ${
                  onDark ? "text-[#F2F2EE]" : "text-[#0A0A0A]"
                }`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <Magnetic strength={0.4}>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 font-sans font-medium text-[14px] px-[18px] py-[10px] transition-colors duration-300 ${
                  onDark
                    ? "bg-[#F2F2EE] text-[#0A0A0A]"
                    : "bg-[#0A0A0A] text-[#F2F2EE]"
                }`}
                data-testid="btn-whatsapp-header"
              >
                Conversar <ArrowUpRight size={16} />
              </a>
            </Magnetic>
          </nav>

          {/* mobile toggle */}
          <button
            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[6px] z-[110]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            data-testid="btn-menu"
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                menuOpen ? "bg-[#F2F2EE] translate-y-[8px] rotate-45" : onDark ? "bg-[#F2F2EE]" : "bg-[#0A0A0A]"
              }`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                menuOpen ? "opacity-0" : onDark ? "bg-[#F2F2EE]" : "bg-[#0A0A0A]"
              }`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                menuOpen ? "bg-[#F2F2EE] -translate-y-[8px] -rotate-45" : onDark ? "bg-[#F2F2EE]" : "bg-[#0A0A0A]"
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans font-black text-[#F2F2EE] text-[15vw] leading-[1.05] tracking-[-0.04em]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: EASE }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            <motion.div
              className="px-8 pb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={WA_HREF}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 bg-[#F2F2EE] text-[#0A0A0A] font-sans font-medium text-[16px] px-7 py-4 w-full justify-center"
              >
                Conversar no WhatsApp <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
