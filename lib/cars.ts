import { Car, CarId } from "@/types/car";
import { api } from "./api";

interface CarsResponse {
  cars: Car[];
  page: number;
  totalCars: number;
  totalPages: number;
}

export const getCars = async () => {
  const { data } = await api.get<CarsResponse>("/cars");
  console.log(data);
  return data;
};

export const getCarById = async (id: CarId) => {
  const { data } = await api.get<Car>(`/cars/${id}`);
  return data;
};
