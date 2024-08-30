import express from "express";
import {
  getAllEquipment,
  getEquipmentById,
} from "../controllers/equipmentControllers";

const router = express.Router();

router.route("/").get(getAllEquipment);
router.route("/:id").get(getEquipmentById);

export default router;
