"use client";

import { useQuery } from "@tanstack/react-query";
import styles from "./CarList.module.css";
import { getCars } from "@/lib/cars";
import CarCard from "../CarCard/CarCard";
import Button from "../Button/Button";

export default function CarList() {
  const { data } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });
  return (
    <section>
      <h2 className="visually-hidden">Cars list</h2>
      {data && data.cars.length > 0 && (
        <ul className={styles.list}>
          {data.cars.map((car) => (
            <li key={car.id} className={styles.listItem}>
              <CarCard car={car} />
            </li>
          ))}
        </ul>
      )}
      <Button variant="secondary" text="Load more" className={styles.button} />
    </section>
  );
}
