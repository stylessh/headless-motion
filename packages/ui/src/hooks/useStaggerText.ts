import { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { MotionTextEffect } from "../components/motion-text";

interface StaggerTextProps {
  effect: Omit<MotionTextEffect, "highlight"> | "highlight";
  highlightColor: string;
  highlightOpacity: number;
}

export function useStaggerText(multiplier: number, opts: StaggerTextProps) {
  const staggerCharacters = stagger(multiplier * 0.1, {
    startDelay: 0.01,
  });

  const [scope, animate] = useAnimate();

  useEffect(() => {
    // if highlight, append class to span to highlight
    if (opts.effect === "highlight") {
      animate(
        "span[data-stagger]",
        {
          color: opts.highlightColor || "inherit",
        },
        {
          type: "spring",
          duration: 0.4,
          bounce: 0,
          delay: staggerCharacters,
        }
      );
    }

    animate(
      "span[data-stagger]",
      {
        opacity: 1,
        filter: opts.effect === "blur" ? "blur(0px)" : undefined,
      },
      {
        type: "spring",
        duration: 0.4,
        bounce: 0,
        delay: staggerCharacters,
      }
    );
  }, [staggerCharacters, scope, animate]);

  return scope;
}
