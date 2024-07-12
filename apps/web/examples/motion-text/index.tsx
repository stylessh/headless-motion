import { MotionText } from "headless-motion";

export function MotionTextExample() {
  return (
    <MotionText
      text="This whole text will be showing with a blur effect and a fade in effect"
      multiplier={0.05}
    />
  );
}
