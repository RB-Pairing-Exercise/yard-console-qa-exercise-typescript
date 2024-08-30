
export interface Yard {
  id: string;
  name: string;
  location: {
    city: string;
    region: string;
    country: string;
  };
  equipment: string[];
  maxSpacesAvailable: number;
}
