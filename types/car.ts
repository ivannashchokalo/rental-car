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
  rentalConditions: string[];
  fuelConsumption: string;
  engineSize: string;
  description: string;
  accessories: string[];
  functionalities: string[];
}

export type CarId = Car["id"];
