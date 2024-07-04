import styles from "./code.module.css";

/**
 * This code component is intented to display inline code text. For blocks of code, use the
 * CodeBlock component.
 *
 * @returns React.ReactNode
 */
export function Code({ children }: { children: React.ReactNode }) {
  return <code className={styles.code}>{children}</code>;
}
