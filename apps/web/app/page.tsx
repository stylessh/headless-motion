import { Container } from "@/components/container";
import { Header } from "@/components/header";
import styles from "./page.module.css";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";

export default function Home() {
  return (
    <div className={styles.page}>
      <Container as="main">
        <Header className={styles.header} />

        <section className={styles.section}>
          <p>
            <span className={styles.highlight}>
              Put motion on your website within minutes.
            </span>
          </p>
          <p>
            A collection of primitives that allow you to build beautiful
            animations and interactions with minimal effort.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Get started</h2>

          <p>
            First install the <Code>headless-motion</Code> package. React +18 is
            required to use this library.
          </p>

          <CodeBlock
            className={styles.codeBlock}
            code={`npm install headless-motion \n\nyarn add headless-motion \n\npnpm add headless-motion`}
            language="bash"
          />
        </section>
      </Container>
    </div>
  );
}
