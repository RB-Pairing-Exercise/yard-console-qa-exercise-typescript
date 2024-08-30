import { FC } from "react";
import { Equipment } from "../../types/equpment";
import styled from "styled-components";
import { startCase } from "lodash";
import EquipmentActionButton from "./EquipmentActionButton";
import { Yard } from "../../types/yard";

interface EquipmentListProps {
  equipment: Equipment[];
  yards: Yard[];
}

const EquipmentList: FC<EquipmentListProps> = ({ equipment, yards }) => {
  return (
    <StyledContainer>
      <h2>Equipment list</h2>
      <StyledTable>
        <thead>
          <th>ID</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Type</th>
          <th>Vin</th>
          <th>Assigned to yard?</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {equipment.map((item) => {
            const { id, make, model, year, vin, type, yardAssignment } = item;
            return(
              <tr key={id}>
                <td>{id}</td>
                <td>{make}</td>
                <td>{model}</td>
                <td>{year}</td>
                <td>{startCase(type)}</td>
                <td>{vin}</td>
                <td>{yardAssignment ? "Yes" : "No"}</td>
                <td>
                  <EquipmentActionButton item={item} yards={yards} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
};

export default EquipmentList;

const StyledTable = styled.table`
  height: 10rem;

  border: 1px black solid;

  height: 100%;

  th,
  td {
    border: 1px solid black;
    padding: 0.2rem 1rem;
    text-align: left;
  }

  thead {
    background-color: gray;
    color: white;
  }
`;

const StyledContainer = styled.div``;
