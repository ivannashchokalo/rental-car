import styles from "./page.module.css";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <Section className={styles.hero}>
      <Container className={styles.heroContainer}>
        <h1 className={styles.title}>Find your perfect rental car</h1>
        <p className={styles.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Button text="View Catalog" href="/catalog" className={styles.button} />
      </Container>
    </Section>
  );
}
