import { useEffect, useState } from "react";
import { apiClient } from "../api/apiClient";
import NestedLayout from "../Components/NestedLayout/NestedLayout";

const HomePage = () => {
  const [yards, setYards] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data: yardData } = await apiClient.get("/yards");

    setYards(yardData);

    const { data: equipmentData } = await apiClient.get("/equipment");

    setEquipment(equipmentData);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NestedLayout title="Auction console">
      <p>
        This is your Auction Console. It has all relevant information about your
        auction operation, and contains the company's entire inventory, as well
        as data on physical auction locations (yards).
      </p>
      <p>
        Click the 'Equipment' or 'Yards' tabs to manage your auctions. The
        'Equipment' tab will allow you to manage your inventory and move it
        between yards. The 'Yards' tab will allow you to view all available
        yards, their location, capacity and current volume of equipment.
      </p>
      {loading ? (
        <p>Loading auction overview...</p>
      ) : (
        <p>
          You have {yards.length} yards and {equipment.length} equipment
        </p>
      )}
    </NestedLayout>
  );
};

export default HomePage;
