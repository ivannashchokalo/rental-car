import { api } from "./api";

export const getBrands = async () => {
  const { data } = await api.get<string[]>("/brands");
  return data;
};
