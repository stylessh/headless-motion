"use client";

import { VariableHeight } from "headless-motion";
import styles from "./variable-card.module.css";
import { useMemo, useState } from "react";

export function VariableCard() {
  const [step, setStep] = useState(0);

  const content = useMemo(() => {
    return {
      0: (
        <div className={styles.section}>
          <p className={styles.description}>
            This card will grow to fit its content.
          </p>

          <p className={styles.description}>
            In this example, the card contains a paragraph of text.
          </p>
        </div>
      ),
      1: (
        <div className={styles.section}>
          <p className={styles.description}>
            This will be a bigger paragraph of text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed elementum, dui eu aliquam.
          </p>

          <p className={styles.description}>
            In this example, the card contains a paragraph of text. Lorem ipsum.
          </p>
        </div>
      ),
      2: (
        <div className={styles.section}>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            elementum, dui eu aliquam tincidunt.
          </div>
        </div>
      ),
    } as Record<number, React.ReactNode>;
  }, [step]);

  return (
    <VariableHeight className={styles.card}>
      <h2 className={styles.title}>Dynamic card</h2>

      {content[step]}

      <button
        className={styles.button}
        onClick={() => {
          setStep(step + 1);

          if (step === 2) {
            setStep(0);
          }
        }}
      >
        Next
      </button>
    </VariableHeight>
  );
}
