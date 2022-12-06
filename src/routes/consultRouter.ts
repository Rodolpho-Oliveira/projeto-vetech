import { Router } from "express"
import { CreateConsult } from "../controllers/consultController.js"
import { validateToken } from "../middlewares/authMiddleware.js"

const consultRouter = Router()

consultRouter.post("/consult", validateToken, CreateConsult)

export default consultRouter