export type PropertyType = "HOUSE" | "APARTMENT";
export type PropertyStatus = "SALE" | "RENT";

export interface PropertyImage {
  id: string;
  url: string;
}

export interface Property {
  id: string;
  title: string;
  description?: string;
  price: number;
  surface: number;
  rooms: number;
  bedrooms?: number;
  type: PropertyType;
  status: PropertyStatus;
  images: PropertyImage[];
}
