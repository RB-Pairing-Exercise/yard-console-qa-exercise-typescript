import { RequestHandler } from "express";
import { fetchAllData, fetchDataById } from "../utils/fetchData";

export const getAllEquipment: RequestHandler = async (req, res) => {
  try {
    const equipment = await fetchAllData("equipment");
    return res.status(200).json(equipment);
  } catch {
    return res.status(404).json([]);
  }
};

export const getEquipmentById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const equpiment = await fetchDataById("equipment", id);
    return res.json(equpiment);
  } catch {
    return res.status(404).json({});
  }
};
