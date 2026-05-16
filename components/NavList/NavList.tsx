"use client";

import Link from "next/link";
import styles from "./NavList.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavList() {
  const path = usePathname();
  return (
    <ul className={styles.navList}>
      <li className={styles.navListItem}>
        <Link
          href="/"
          className={clsx(styles.navListLink, path === "/" && styles.active)}
        >
          Home
        </Link>
      </li>
      <li className={styles.navListItem}>
        <Link
          href="/catalog"
          className={clsx(
            styles.navListLink,
            path === "/catalog" && styles.active,
          )}
        >
          Catalog
        </Link>
      </li>
    </ul>
  );
}
