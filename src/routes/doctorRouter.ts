import { Router } from "express"
import { registerNewDoctor } from "../controllers/doctorController.js"
import { checkDoctorInfo } from "../middlewares/doctorMiddleware.js"

const doctorRouter = Router()

doctorRouter.post('/doctor/create', checkDoctorInfo, registerNewDoctor)

export default doctorRouter