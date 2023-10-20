export interface ICar {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
  marketplacePrice: number;
  marketplaceOldPrice: number;
  mileage: number;
  transmission: string;
  sellingCondition: string;
  engineType: string;
  installment: number;
  carName: string;
  gradeScore: number;
  state: string;
  country: string;
  city: string;
  interiorColor: string;
  exteriorColor: string;
  fuelType: string;
}

export interface ICarMedia {
  id: string;
  name: string;
  url: string;
}

export interface IBrand {
  id: string;
  name: string;
  imageUrl: string;
}
