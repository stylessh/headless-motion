"use client";

import clsx from "clsx";
import styles from "./card.module.css";
import { RotateCcw } from "lucide-react";
import { useId, useState } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Card({ children, as, title, ...props }: CardProps) {
  // key state to re-render the component
  const id = useId();
  const [key, setKey] = useState(0);

  const Component = as || "div";

  const handleRestart = () => {
    setKey(key + 1);
  };

  return (
    <Component className={clsx(styles.card, props.className)} {...props}>
      {/* restart component */}
      <button className={styles.restart} onClick={handleRestart}>
        <RotateCcw size={20} />
        <span className="sr-only">Restart</span>
      </button>

      <div className={styles.content} key={`${id}-${key}`}>
        {children}
      </div>

      {title && (
        <div className={styles.footer}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      )}
    </Component>
  );
}
