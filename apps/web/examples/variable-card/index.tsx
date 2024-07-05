"use client";

import { VariableHeight } from "@headless-motion/ui";
import styles from "./variable-card.module.css";
import { useEffect, useState } from "react";

export function VariableCard() {
  const [grow, setGrow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGrow(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <VariableHeight className={styles.card}>
      <h2 className={styles.title}>Variable height card</h2>

      <p className={styles.description}>
        This card will grow to fit its content. In this example, the card
        contains a paragraph of text.
      </p>

      {grow && (
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tristique, nisl sed aliquet tincidunt, nunc risus aliquam nisi, eu
          tincidunt nisi nisl sit amet nunc. Sed eget nisl euismod, aliquam nisl
          in, aliquam nisl. Sed eget nisl euismod, aliquam nisl in, aliquam
          nisl. Sed eget nisl euismod, aliquam nisl in, aliquam nisl. Sed eget
          nisl euismod, aliquam nisl in, aliquam nisl. Sed eget nisl euismod.
        </p>
      )}
    </VariableHeight>
  );
}
