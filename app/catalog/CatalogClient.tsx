"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getCars } from "@/lib/cars";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import CarList from "../../components/CarList/CarList";
import Loader from "@/components/Loader/Loader";

export default function CatalogClient() {
  const searchParams = useSearchParams();

  const brand = searchParams.get("brand") ?? "";
  const price = searchParams.get("price") ?? "";
  const minMileage = searchParams.get("minMileage") ?? "";
  const maxMileage = searchParams.get("maxMileage") ?? "";

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["cars", { brand, price, minMileage, maxMileage }],

      queryFn: ({ pageParam }) =>
        getCars({
          pageParam,
          brand,
          price,
          minMileage,
          maxMileage,
        }),

      initialPageParam: 1,
      refetchOnMount: false,

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
      {isFetching && <Loader />}
      <FilterPanel />
      <CarList
        cars={cars}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
}
