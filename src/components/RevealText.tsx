import { motion } from "framer-motion";
import type { CSSProperties } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  once?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/** Splits text into words and reveals each from a clipped mask. */
export default function RevealText({
  text,
  className,
  style,
  delay = 0,
  as = "h2",
  once = true,
}: RevealTextProps) {
  const words = text.split(" ");
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {words.map((word, i) => {
        if (word === "[br]") return <br key={i} />;
        if (word === "[br-md]") return <br key={i} className="hidden md:block" />;

        return (
          <span key={i} className="reveal-mask">
            <motion.span
              style={{ display: "inline-block" }}
              variants={{
                hidden: { y: "110%" },
                visible: { y: 0 },
              }}
              transition={{ duration: 0.85, ease: EASE, delay: delay + i * 0.06 }}
            >
              {word.endsWith(".") ? (
                <>
                  {word.slice(0, -1)}
                  <span style={{ color: "#ff3c00" }}>.</span>
                </>
              ) : (
                word
              )}
            </motion.span>
            {i < words.length - 1 && words[i + 1] !== "[br]" && words[i + 1] !== "[br-md]" ? "\u00A0" : ""}
          </span>
        );
      })}
    </Tag>
  );
}
