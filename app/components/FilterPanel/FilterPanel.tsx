"use client";

import { useQuery } from "@tanstack/react-query";
import styles from "./FilterPanel.module.css";
import { getBrands } from "@/lib/brands";

export default function FilterPanel() {
  const { data } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });
  return (
    <section>
      <h2 className="visually-hidden">Filters</h2>
      <p>Filter panel</p>
    </section>
  );
}
