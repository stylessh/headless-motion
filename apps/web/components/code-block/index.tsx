import clsx from "clsx";
import styles from "./code-block.module.css";
import { highlight } from "sugar-high";

export function CodeBlock({
  code,
  className,
}: {
  code: string;
  language: string;
  className?: string;
}) {
  const html = highlight(code);

  return (
    <code className={clsx(styles.codeBlock, className)}>
      <pre dangerouslySetInnerHTML={{ __html: html }}></pre>
    </code>
  );
}
