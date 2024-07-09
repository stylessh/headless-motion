"use client";

import useMeasure from "react-use-measure";
import { m, MotionProps } from "framer-motion";

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
  const heightToSet = bounds.height > 0 ? bounds.height : "auto";

  return (
    <m.div
      animate={{ height: heightToSet }}
      style={{ height: heightToSet }}
      transition={{
        type: "spring",
        duration: 0.4,
        bounce: 0,
        ...transition,
      }}
      {...props}
    >
      <div ref={ref} className={className}>
        {children}
      </div>
    </m.div>
  );
}
