import { Car, CarId } from "@/types/car";
import { api } from "./api";

interface CarsResponse {
  cars: Car[];
  page: number;
  totalCars: number;
  totalPages: number;
}

export const getCars = async (
  page: string,
  brand: string,
  price: string,
  minMileage: string,
  maxMileage: string,
) => {
  console.log({
    page,
    brand,
    price,
  });
  const { data } = await api.get<CarsResponse>("/cars", {
    params: {
      page,
      brand,
      rentalPrice: price,
      minMileage,
      maxMileage,
    },
  });
  console.log(data);
  return data;
};

export const getCarById = async (id: CarId) => {
  const { data } = await api.get<Car>(`/cars/${id}`);
  return data;
};
