import { Router } from "express"
import { getAllDoctors, registerNewDoctor } from "../controllers/doctorController.js"
import { validateToken } from "../middlewares/authMiddleware.js"
import { checkDoctorInfo } from "../middlewares/doctorMiddleware.js"

const doctorRouter = Router()

doctorRouter.post('/doctor/create', validateToken, checkDoctorInfo, registerNewDoctor)
doctorRouter.get("/doctor", validateToken, getAllDoctors)

export default doctorRouter