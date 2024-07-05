"use client";

import { FeatureBundle, LazyMotion } from "framer-motion";

/**
 * MotionWrapper loads framer-motion's domAnimation feature asynchronously
 * to reduce the initial bundle size of the library
 */
export function MotionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion
      features={(): Promise<FeatureBundle> =>
        import("./motion-features").then((res) => res.default)
      }
    >
      {children}
    </LazyMotion>
  );
}
