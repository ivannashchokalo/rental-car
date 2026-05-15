export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engine: string;
  mileage: number;
  rentalPrice: string;
  rentalCompany: string;
  location: {
    country: string;
    city: string;
    address: string;
  };
  rentalConditions: string[];
  features: string[];
}

export type CarId = Car["id"];
