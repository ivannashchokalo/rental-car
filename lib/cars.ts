import { Car, CarId } from "@/types/car";
import { api } from "./api";

interface GetCarsParams {
  pageParam: number;
  brand?: string;
  price?: string;
  minMileage?: string;
  maxMileage?: string;
}

interface CarsResponse {
  cars: Car[];
  page: number;
  totalCars: number;
  totalPages: number;
}

export interface FiltersResponse {
  brands: string[];
  price: {
    min: number;
    max: number;
  };
}

interface BookingRequestData {
  carId: string;
  name: string;
  email: string;
  comment: string;
}

export const getCars = async ({
  pageParam,
  brand,
  price,
  minMileage,
  maxMileage,
}: GetCarsParams) => {
  const { data } = await api.get<CarsResponse>("/cars", {
    params: {
      ...(brand && { brand }),
      ...(price && {
        price: Number(price),
      }),
      ...(minMileage && {
        minMileage: Number(minMileage),
      }),
      ...(maxMileage && {
        maxMileage: Number(maxMileage),
      }),
      page: pageParam,
      perPage: 12,
    },
  });

  return data;
};

export const getCarById = async (id: CarId) => {
  const { data } = await api.get<Car>(`/cars/${id}`);
  return data;
};

export const getFilters = async () => {
  const { data } = await api.get<FiltersResponse>("/cars/filters");
  return data;
};

export const createBookingRequest = async ({
  carId,
  ...body
}: BookingRequestData) => {
  const { data } = await api.post<{ message: string }>(
    `/cars/${carId}/booking-requests`,
    body,
  );
  return data;
};
