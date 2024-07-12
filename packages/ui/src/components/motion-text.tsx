"use client";

import { m } from "framer-motion";
import { useStaggerText } from "../hooks/useStaggerText";

export type MotionTextEffect = "blur" | "fade" | "highlight";

interface MotionTextProps {
  as?: React.ElementType;
  text: string;
  multiplier?: number;
  effect?: MotionTextEffect;

  highlightColor?: string;
  highlightOpacity?: number;
}

type MotionHighlightProps = MotionTextProps & {
  effect: "highlight";
  highlightColor?: string;
  highlightOpacity?: number;
};

type Props = MotionTextProps | MotionHighlightProps;

export function MotionText({
  as: Component = "span",
  text,
  multiplier = 0.1,
  effect = "fade",
  highlightColor = "#fff",
  highlightOpacity = 0.5,
}: Props) {
  const scope = useStaggerText(multiplier, {
    effect,
    highlightColor,
    highlightOpacity,
  });

  return (
    <Component ref={scope}>
      {text.split("").map((char, index) => (
        <m.span
          key={index}
          initial={{
            opacity: effect === "highlight" ? highlightOpacity : 0, 
            filter: effect === "blur" ? "blur(4px)" : undefined,
          }}
          data-stagger={index}
        >
          {char}
        </m.span>
      ))}
    </Component>
  );
}
