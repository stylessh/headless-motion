"use client";

import useMeasure from "react-use-measure";
import { Easing, m, MotionProps } from "framer-motion";

const DEFAULT_EASE: Easing[] = [0.22, 0.36, 0.24, 1.0] as unknown as Easing[];

interface VariableHeightProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export function VariableHeight({
  children,
  className,
  transition,
  ...props
}: VariableHeightProps) {
  const [ref, bounds] = useMeasure();

  return (
    <m.div
      animate={{ height: bounds.height }}
      style={{ height: bounds.height, overflow: "hidden" }}
      transition={{ duration: 0.2, ease: DEFAULT_EASE, ...transition }}
      {...props}
    >
      <div ref={ref} className={className}>
        {children}
      </div>
    </m.div>
  );
}
