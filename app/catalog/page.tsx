import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import { getCars } from "@/lib/cars";
import CatalogClient from "./CatalogClient";

interface CatalogProps {
  searchParams: Promise<{
    brand?: string;
    price?: string;
    minMileage?: string;
    maxMileage?: string;
  }>;
}

export default async function Catalog({ searchParams }: CatalogProps) {
  const queryClient = new QueryClient();
  const params = await searchParams;

  await queryClient.prefetchInfiniteQuery({
    queryKey: [
      "cars",
      {
        brand: params.brand ?? "",
        price: params.price ?? "",
        minMileage: params.minMileage ?? "",
        maxMileage: params.maxMileage ?? "",
      },
    ],

    queryFn: ({ pageParam }) =>
      getCars({
        pageParam: Number(pageParam),

        brand: params.brand ?? "",
        price: params.price ?? "",
        minMileage: params.minMileage ?? "",
        maxMileage: params.maxMileage ?? "",
      }),

    initialPageParam: 1,
  });

  return (
    <Section>
      <Container>
        <h1 className="visually-hidden">Car catalog</h1>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CatalogClient />
        </HydrationBoundary>
      </Container>
    </Section>
  );
}
