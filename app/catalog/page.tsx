import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CarList from "../components/CarList/CarList";
import Container from "../components/Container/Container";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import Section from "../components/Section/Section";
import { getCars } from "@/lib/cars";

export default async function Catalog() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [
      "cars",
      {
        brand: "",
        price: "",
        minMileage: "",
        maxMileage: "",
      },
    ],

    queryFn: ({ pageParam }) =>
      getCars({
        page: Number(pageParam),
      }),

    initialPageParam: 1,
  });

  return (
    <Section>
      <Container>
        <h1 className="visually-hidden">Car catalog</h1>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <FilterPanel />

          <CarList />
        </HydrationBoundary>
      </Container>
    </Section>
  );
}
