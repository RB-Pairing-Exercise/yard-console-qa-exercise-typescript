export enum EquipmentEnum {
  BULLDOZER = "bulldozer",
  SKID_STEER = "skidSteer",
  DUMP_TRUCK = "dumpTruck",
  PICKUP = "pickup",
  EXCAVATOR = "excavator",
  TRACTOR = "tractor",
}

type EquipmentType =
  | "bulldozer"
  | "skidSteer"
  | "dumpTruck"
  | "pickup"
  | "excavator"
  | "tractor";

export const equipmentMakes = [
  "Komatsu",
  "Caterpillar",
  "Ford",
  "Liebherr",
  "John Deere",
  "Volvo",
  "Hitachi",
  "Mitsubishi",
  "Sandvik",
  "XCMG",
];

export interface Equipment {
  id: string;
  type: EquipmentType;
  make: string;
  model: string;
  year: number;
  vin: string;
  yardAssignment?: string;
}
