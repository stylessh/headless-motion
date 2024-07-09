import { Container } from "@/components/container";
import { Header } from "@/components/header";
import styles from "./examples.module.css";
import { Card } from "@/components/card";
import { VariableCard } from "@/examples/variable-card";

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
        </section>
      </Container>
    </div>
  );
}
