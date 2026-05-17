"use client";

import styles from "./CarList.module.css";
import CarCard from "../CarCard/CarCard";
import Button from "../Button/Button";
import { Car } from "@/types/car";

interface CarListProps {
  cars: Car[];
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
}

export default function CarList({
  cars,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}: CarListProps) {
  return (
    <>
      {cars.length === 0 ? (
        <p>No cars found.</p>
      ) : (
        <ul className={styles.list}>
          {cars.map((car) => (
            <li key={car.id} className={styles.listItem}>
              <CarCard car={car} />
            </li>
          ))}
        </ul>
      )}
      {hasNextPage && (
        <Button
          variant="secondary"
          text="Load more"
          className={styles.button}
          onClick={() => fetchNextPage()}
          type="button"
          disabled={isFetchingNextPage}
        />
      )}
    </>
  );
}
