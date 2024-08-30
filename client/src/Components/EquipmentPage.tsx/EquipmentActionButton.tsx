import { FC, useState } from "react";
import { Equipment } from "../../types/equpment";
import { Yard } from "../../types/yard";
import styled from "styled-components";
import { apiClient } from "../../api/apiClient";

interface EquipmentActionButtonProps {
  item: Equipment;
  yards: Yard[];
}

const EquipmentActionButton: FC<EquipmentActionButtonProps> = ({
  item,
  yards,
}) => {
  const [selectedYard, setSelectedYard] = useState<string>(yards[0].id);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false)
  const onClick = async (equipmentId: string, yardId: string) => {
    try {
      setLoading(true)
      await apiClient.put("/yards/add-equipment", { equipmentId, yardId });
      setSuccess(true)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  const disabled = !!item.yardAssignment || !selectedYard || success;

  return (
    <div>
      <StyledButton
        disabled={disabled}
        onClick={() => onClick(item.id, selectedYard)}
      >
        {disabled || success ? "Assigned" : loading ? "Working..." : "Assign to yard"}
      </StyledButton>
      <select
        id="yards"
        name="yards"
        onChange={(event) => setSelectedYard(event.target.value)}
      >
        {yards.map((yard) => (
          <option value={yard.id}>{yard.name}</option>
        ))}
      </select>
    </div>
  );
};

export default EquipmentActionButton;

const StyledButton = styled.button`
  background-color: lightgreen;
  color: black;
  width: 100%;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;
