import { RequestHandler } from "express";
import { assignItemToYard, fetchAllData, fetchDataById, updateEquipment } from "../utils/fetchData";

export const getAllyards: RequestHandler = async (req, res) => {
  try {
    const yards = await fetchAllData("yard");
    return res.status(200).json(yards);
  } catch {
    return res.status(404).json([]);
  }
};

export const getYardById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const yards = await fetchDataById("yard", id);
    return res.json(yards);
  } catch {
    return res.status(404).json({});
  }
};

export const addEquipmentToYard: RequestHandler = async (req, res) => {
  const { yardId, equipmentId } = req.body

  await updateEquipment(equipmentId, yardId)
  await assignItemToYard(equipmentId, yardId)

  return res.status(200).json({ yardId, equipmentId })
};
