import { Equipment, equipmentMakes, EquipmentEnum } from "../types/equipment";
import { faker } from "@faker-js/faker";
import { Yard } from "../types/yard";

export const createRandomEquipment = (): Equipment => ({
  id: faker.string.uuid(),
  make: faker.helpers.arrayElement(equipmentMakes),
  model: faker.helpers.fromRegExp("[0-9]{3,5}[A-G]?"),
  year: faker.number.int({ min: 1991, max: 2024 }),
  type: faker.helpers.enumValue(EquipmentEnum),
  vin: faker.vehicle.vin(),
});

export const createRandomYard = (): Yard => {
  const fakeState = faker.location.state({ abbreviated: true });
  const fakeCity = faker.location.city();
  const fakeName = `${fakeCity} ${fakeState}`;

  const maxSpacesAvailable = faker.number.int({ min: 50, max: 200})

  return {
    equipment: [],
    id: faker.string.uuid(),
    name: fakeName,
    maxSpacesAvailable,
    location: {
      city: fakeCity,
      region: fakeState,
      country: "USA",
    },
  };
};

export const dbSeeder = (type: "equipment" | "yard", length: number) => {
  if (type === "equipment")
    return Array.from({ length }, () => createRandomEquipment());
  if (type === "yard") return Array.from({ length }, () => createRandomYard());
};
