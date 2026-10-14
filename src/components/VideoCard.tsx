import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { WorkVideo } from "@/lib/videos";

interface VideoCardProps {
  work: WorkVideo;
  index: string;
  onClick: (src: string) => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function VideoCard({ work, index, onClick }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    setIsPlaying(true);
    v.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    setIsPlaying(false);
    v.pause();
    v.currentTime = 0;
  };

  return (
    <motion.div
      className="group cursor-pointer"
      onClick={() => onClick(work.src)}
      data-cursor-label="Assistir"
      data-testid={`video-card-${work.client}`}
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.9, ease: EASE }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className="relative w-full overflow-hidden bg-[#F2F2EE] aspect-video"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={work.poster}
          alt={`${work.client} — ${work.type}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isPlaying ? "opacity-0 scale-110" : "opacity-100 scale-100 group-hover:scale-[1.04]"
          }`}
          style={{ filter: "grayscale(100%)" }}
        />

        <video
          ref={videoRef}
          src={encodeURI(work.src)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[700ms] ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="none"
        />

        {/* hover dark wash */}
        <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/15 transition-colors duration-500 pointer-events-none" />

        {/* index badge */}
        <div className="absolute top-4 left-4 z-10 mix-blend-difference text-white">
          <span className="font-mono text-[12px]">
            ({index})
          </span>
        </div>

        {/* corner arrow */}
        <div className="absolute top-4 right-4 z-10 overflow-hidden mix-blend-difference text-white">
          <ArrowUpRight
            size={24}
            className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-x-3 -translate-y-3 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
          />
        </div>
      </div>

      <div className="flex justify-between items-start mt-4 md:mt-5">
        <div>
          <h3 className="font-sans font-semibold text-[17px] md:text-[19px] text-[#F2F2EE] tracking-[-0.01em]">
            {work.title}
          </h3>
          <p className="font-sans text-[14px] text-[#F2F2EE]/55 mt-0.5">{work.type}</p>
        </div>
      </div>
    </motion.div>
  );
}
