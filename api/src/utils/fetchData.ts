import { equipmentTable } from "../db/equipment"
import { yardTable } from "../db/yards"
import { Equipment } from "../types/equipment"
import { Yard } from "../types/yard"


export const fetchDataById = (type: 'equipment' | 'yard', id: string) => new Promise<Equipment | Yard>((resolve, reject) => {
    setTimeout(()=> {

        const table = type === 'equipment' ? equipmentTable : type === 'yard' ? yardTable : null

        if (!table) return reject('Incorrect table selected')

        const res = table.find(equipment => equipment.id === id)

        if (!res) return reject("No data found")

        return resolve(res)

    }, 1000)
})

export const fetchAllData = (type: 'equipment' | 'yard') => new Promise<Equipment[] | Yard[]>((resolve, reject) => {
    setTimeout(()=> {

        const table = type === 'equipment' ? equipmentTable : type === 'yard' ? yardTable : null

        if (!table) return reject('Incorrect table selected')

        const res = table

        return resolve(res)

    }, 1000)
})


export const updateEquipment = (equipmentId: string, yardId: string) => new Promise<string>((resolve, reject) => {
    setTimeout(()=> {

        const foundEquipment = equipmentTable.find(equip => equip.id === equipmentId)

        if (!foundEquipment) return reject('No data found')

        foundEquipment.yardAssignment = yardId

        return resolve(equipmentId)

    }, 1000)
})


export const assignItemToYard = (equipmentId: string, yardId: string) => new Promise<string>((resolve, reject) => {
    setTimeout(()=> {

        const foundYard = yardTable.find(yard => yard.id === yardId)
 
        if (!foundYard) return reject('No yard found')

        foundYard.equipment.push(equipmentId)

        return resolve(yardId)

    }, 1000)
})