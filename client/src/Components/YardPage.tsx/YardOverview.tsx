import { FC } from "react";
import { Yard } from "../../types/yard";
import { getAllStatesWithyards } from "../../utils/yards";

interface YardOverviewProps {
  yards: Yard[];
}

const YardOverview: FC<YardOverviewProps> = ({ yards }) => {
  const { allStatesAsString, countOfStates } = getAllStatesWithyards(yards);
  return (
    <div>
      You have yards in {countOfStates} states: {allStatesAsString}
    </div>
  );
};

export default YardOverview;
