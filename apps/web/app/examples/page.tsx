import { Container } from "@/components/container";
import { Header } from "@/components/header";
import styles from "./examples.module.css";
import { Card } from "@/components/card";
import { VariableCard } from "@/examples/variable-card";
import { MotionTextExample } from "@/examples/motion-text";
import { MorphTextExample } from "@/examples/morph-text";

export default function Examples() {
  return (
    <div className={styles.page}>
      <Container as="main">
        <Header className={styles.header} />

        <section className={styles.section}>
          <h3 className={styles.title}>Examples</h3>

          <p>
            Explore the examples below to see how you can use the primitives to
            build your animations.
          </p>
        </section>

        <section className={styles.list}>
          <Card title="Variable Height">
            <VariableCard />
          </Card>

          <Card title="Motion Text">
            <MotionTextExample />
          </Card>

          <Card title="Morph Text">
            <MorphTextExample />
          </Card>
        </section>
      </Container>
    </div>
  );
}
