import { groupBy } from "lodash"
import { Yard } from "../types/yard"

export const getAllStatesWithyards = (yards: Yard[]) => {
    const yardsGroupedByState = groupBy(yards, (yard) => yard.location.region)

    const statesArray = Object.keys(yardsGroupedByState)

    const countOfStates = statesArray.length

    const allStatesAsString = statesArray.join(', ')

    return { countOfStates, allStatesAsString }
}

export const getYardSpacesRemaining = (maxYardCapacity: number, equipment: string[]) => maxYardCapacity - equipment.length