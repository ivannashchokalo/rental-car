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
  const price = searchParams.get("price") ?? "";
  const minMileage = searchParams.get("minMileage") ?? "";
  const maxMileage = searchParams.get("maxMileage") ?? "";

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["cars", { brand, price, minMileage, maxMileage }],

    queryFn: ({ pageParam }) =>
      getCars({ pageParam, brand, price, minMileage, maxMileage }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (Number(lastPage.page) < lastPage.totalPages) {
        return Number(lastPage.page) + 1;
      }

      return undefined;
    },
  });

  const cars = data?.pages.flatMap((page) => page.cars) ?? [];

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
        />
      )}
    </>
  );
}
