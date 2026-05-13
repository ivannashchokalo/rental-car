"use client";

import styles from "./CarList.module.css";

import { getCars } from "@/lib/cars";

import CarCard from "../CarCard/CarCard";
import Button from "../Button/Button";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function CarList() {
  const searchParams = useSearchParams();
  const brand = searchParams.get("brand") ?? "";
  const price = searchParams.get("rentalPrice") ?? "";
  const minMileage = searchParams.get("minMileage") ?? "";
  const maxMileage = searchParams.get("maxMileage") ?? "";

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["cars", { brand, price, minMileage, maxMileage }],

    queryFn: ({ pageParam }) =>
      getCars(String(pageParam), brand, price, minMileage, maxMileage),

    initialPageParam: 1,
    placeholderData: undefined,

    getNextPageParam: (lastPage) => {
      if (Number(lastPage.page) < lastPage.totalPages) {
        return Number(lastPage.page) + 1;
      }

      return undefined;
    },
  });

  const cars = data?.pages.flatMap((page) => page.cars) ?? [];

  return (
    <section>
      <h2 className="visually-hidden">Cars list</h2>

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
        />
      )}
    </section>
  );
}
