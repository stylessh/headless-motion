import { Container } from "@/components/container";
import { Header } from "@/components/header";
import styles from "./page.module.css";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import Link from "next/link";

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
            code={`npm install headless-motion\n\nyarn add headless-motion\n\npnpm add headless-motion`}
            language="bash"
          />

          <p>
            Then import the <Code>MotionWrapper</Code> component and wrap your
            application with it. This will load the necessary stuff to make
            animations work.
          </p>

          <CodeBlock
            className={styles.codeBlock}
            code={`import { MotionWrapper } from "headless-motion";\n\nfunction App() {\n  return (\n    <MotionWrapper>\n      <Component />\n    </MotionWrapper>\n  );\n}`}
            language="jsx"
          />

          <p>
            <span className={styles.highlight}>That's it!</span> You can now use
            the primitives to build your animations.
          </p>
        </section>

        <section className={styles.section}>
          <Link href="/examples" className={styles.button}>
            Explore the examples
          </Link>
        </section>
      </Container>
    </div>
  );
}
