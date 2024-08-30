type EquipmentType =
  | "bulldozer"
  | "skidSteer"
  | "dumpTruck"
  | "pickup"
  | "excavator"
  | "tractor";

export interface Equipment {
  id: string;
  type: EquipmentType;
  make: string;
  model: string;
  year: number;
  vin: string;
  yardAssignment?: string;
}
