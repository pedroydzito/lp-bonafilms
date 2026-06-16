import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  src: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ src, isOpen, onClose }: VideoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(10,10,10,0.95)]"
          onClick={onClose}
          data-testid="video-modal-overlay"
        >
          <button
            className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform duration-300 z-50"
            onClick={onClose}
            data-cursor-label="Fechar"
            data-testid="button-close-modal"
          >
            <X size={32} />
          </button>
          
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-[90vw] max-h-[85vh] aspect-video relative"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={src}
              className="w-full h-full object-contain bg-black"
              autoPlay
              controls
              playsInline
              onError={(e) => {
                console.error("Video failed to load in modal:", src);
              }}
              data-testid="video-modal-player"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}