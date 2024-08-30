import { useEffect, useState } from "react";
import { apiClient } from "../../api/apiClient";
import { Equipment } from "../../types/equpment";
import EquipmentList from "./EquipmentList";
import EquipmentOverview from "./EquipmentOverview";
import { Yard } from "../../types/yard";

const EquipmentData = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [yards, setYards] = useState<Yard[]>([])
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data: equipmentData } = await apiClient.get<Equipment[]>(
      "/equipment"
    );
    setEquipment(equipmentData);

    const { data: yardData } = await apiClient.get<Yard[]>("/yards");

    setYards(yardData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>loading... </div>;
  return (
    <>
      <EquipmentOverview equipment={equipment} />
      <EquipmentList equipment={equipment} yards={yards} />
    </>
  );
};

export default EquipmentData;
