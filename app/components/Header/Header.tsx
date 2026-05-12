import Link from "next/link";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import styles from "./Header.module.css";
import NavList from "../NavList/NavList";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navigation}>
          <Link href="/" className={styles.logoLink}>
            <Icon
              name="logo"
              width={104}
              height={16}
              className={styles.logoIcon}
            />
          </Link>
          <NavList />
        </nav>
      </Container>
    </header>
  );
}
