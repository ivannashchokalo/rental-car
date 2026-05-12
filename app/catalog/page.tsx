import Button from "../components/Button/Button";
import CarList from "../components/CarList/CarList";
import Container from "../components/Container/Container";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import Section from "../components/Section/Section";
import styles from "./Catalog.module.css";

export default function Catalog() {
  return (
    <Section>
      <Container>
        <FilterPanel />
        <CarList />
        <Button variant="secondary" text="Load more" />
      </Container>
    </Section>
  );
}
