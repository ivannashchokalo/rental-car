import { api } from "./api";

export const getBrands = async () => {
  const { data } = await api.get<string[]>("/cars/filters");
  console.log(data);
  return data;
};
