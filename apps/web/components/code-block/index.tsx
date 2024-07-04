import clsx from "clsx";
import styles from "./code-block.module.css";

export function CodeBlock({
  code,
  className,
}: {
  code: string;
  language: string;
  className?: string;
}) {
  return (
    <code className={clsx(styles.codeBlock, className)}>
      <pre dangerouslySetInnerHTML={{ __html: code }}></pre>
    </code>
  );
}
