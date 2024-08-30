import { countBy, sortBy } from "lodash";
import { Equipment } from "../types/equpment";

export const getEquipmentMakesByCount = (equipment: Equipment[]) => {
  const countByMake = countBy(equipment, (equip) => equip.make);
  const countByMakeTuples = Object.entries(countByMake);
  const sortedCountByMakes = sortBy(countByMakeTuples, ([, count]) => count);
  const sortedCountDescending = sortedCountByMakes.reverse();
  const mappedSortedCount = sortedCountDescending.map(([make, count]) => ({
    make,
    count,
  }));

  return mappedSortedCount;
};
