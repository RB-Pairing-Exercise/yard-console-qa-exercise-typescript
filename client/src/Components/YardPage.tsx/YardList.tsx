import { FC } from "react";
import styled from "styled-components";
import { Yard } from "../../types/yard";
import { getYardSpacesRemaining } from "../../utils/yards";
interface YardListProps {
  yards: Yard[];
}
const YardList: FC<YardListProps> = ({ yards }) => {
  return (
    <StyledContainer>
      <h2>Yard list</h2>
      <StyledTable>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Total capacity</th>
          <th>Occupied lots</th>
          <th>Spaces remaining</th>
        </thead>
        <tbody>
          {yards.map(
            ({ id, name, equipment, location: { city, country, region }, maxSpacesAvailable }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{`${city}, ${region}, ${country}`}</td>
                <td>{maxSpacesAvailable}</td>
                <td>{equipment.length}</td>
                <td>{getYardSpacesRemaining(maxSpacesAvailable, equipment)}</td>
              </tr>
            )
          )}
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
};

export default YardList;

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
