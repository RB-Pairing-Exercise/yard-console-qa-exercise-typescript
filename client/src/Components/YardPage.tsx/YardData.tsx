import { useEffect, useState } from "react";
import { apiClient } from "../../api/apiClient";
import { Yard } from "../../types/yard";
import YardOverview from "./YardOverview";
import YardList from "./YardList";

const YardData = () => {
  const [yards, setYards] = useState<Yard[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data: equipmentData } = await apiClient.get<Yard[]>("/yards");
    setYards(equipmentData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>loading... </div>;
  return (
    <>
      <YardOverview yards={yards} />
      <YardList yards={yards} />
    </>
  );
  return <div>YardData</div>;
};

export default YardData;
