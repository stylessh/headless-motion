"use client";

import { MorphText } from "headless-motion";
import { useEffect, useState } from "react";

export function MorphTextExample() {
  const [text, setText] = useState("Submit");

  useEffect(() => {
    setTimeout(() => {
      setText("Submitted");
    }, 1000);
  }, []);

  return (
    <p>
      <MorphText>{text}</MorphText>
    </p>
  );
}
