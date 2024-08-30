import { FC } from "react";
import { Equipment } from "../../types/equpment";
import { getEquipmentMakesByCount as getEquipmentManufacturersByCount } from "../../utils/equipment";

interface EquipmentOverviewProps {
  equipment: Equipment[];
}
const EquipmentOverview: FC<EquipmentOverviewProps> = ({ equipment }) => {
  const countOfManufacturers = getEquipmentManufacturersByCount(equipment);

  return (
    <>
      <h2>Equipment Overview</h2>
      <p>There are {equipment.length} pieces of equipment in your inventory.</p>
      <h3>The most common makes are:</h3>
      <ol>
        {countOfManufacturers.map(({ make, count }) => (
          <li>
            {make}: {count} items
          </li>
        ))}
      </ol>
    </>
  );
};

export default EquipmentOverview;
