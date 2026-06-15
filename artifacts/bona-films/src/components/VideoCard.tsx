import { useRef, useState } from "react";

interface VideoCardProps {
  poster: string;
  videoSrc: string;
  client: string;
  type: string;
  year: string;
  aspectClass?: string;
  onClick: (src: string) => void;
}

export default function VideoCard({ 
  poster, 
  videoSrc, 
  client, 
  type, 
  year, 
  aspectClass = "aspect-video",
  onClick 
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play().catch(err => {
        // Silently handle if video cannot play (e.g. missing file)
        console.warn("Could not play video on hover:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      setIsPlaying(false);
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="group cursor-pointer" onClick={() => onClick(videoSrc)} data-testid={`video-card-${client}`}>
      <div 
        className={`relative w-full overflow-hidden bg-[#0A0A0A] ${aspectClass}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img 
          src={poster} 
          alt={`${client} - ${type}`}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isPlaying ? 'opacity-0 scale-105' : 'opacity-100 scale-100 group-hover:scale-[1.02]'}`}
        />
        
        <video
          ref={videoRef}
          src={videoSrc}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100 scale-[1.02]' : 'opacity-0 scale-100'}`}
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      
      <div className="flex justify-between items-start mt-4">
        <div>
          <h3 className="font-sans font-medium text-[16px] text-[#0A0A0A]">{client}</h3>
          <p className="font-sans font-normal text-[14px] text-[#6B6B66]">{type}</p>
        </div>
        <span className="font-mono text-[12px] text-[#6B6B66]">{year}</span>
      </div>
    </div>
  );
}