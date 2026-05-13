import Section from "@/app/components/Section/Section";
import styles from "./CarDetails.module.css";
import Container from "@/app/components/Container/Container";

interface CarDetailesProps {
  params: Promise<{ carId: string }>;
}

export default async function CarDetails({ params }: CarDetailesProps) {
  const { carId } = await params;
  return (
    <Section>
      <Container>
        <p>details</p>
        <p>{carId}</p>
      </Container>
    </Section>
  );
}
