export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;

  img: string;

  address: string;
  rentalCompany: string;

  type: string;
  mileage: number;

  rentalPrice: string;
}

export type CarId = Car["id"];
