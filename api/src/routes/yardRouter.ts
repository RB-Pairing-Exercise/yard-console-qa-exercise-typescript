import express from 'express'
import { addEquipmentToYard, getAllyards, getYardById } from '../controllers/yardControllers'

const router = express.Router()

router.route('/').get( getAllyards)

router.route('/:id').get(getYardById)

router.route('/add-equipment').put(addEquipmentToYard)

export default router