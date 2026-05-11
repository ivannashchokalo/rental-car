import styles from "./Section.module.css";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return <section className={(styles.section, className)}>{children}</section>;
}
