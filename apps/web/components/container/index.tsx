import styles from "./container.module.css";

export function Container({
  children,
  as,
}: {
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  const Component = as || "div";

  return <Component className={styles.container}>{children}</Component>;
}
