import { Router } from "express"
import { createConsult, getUserConsults } from "../controllers/consultController.js"
import { validateToken } from "../middlewares/authMiddleware.js"

const consultRouter = Router()

consultRouter.post("/consult", validateToken, createConsult)
consultRouter.get("/consult", validateToken, getUserConsults)

export default consultRouter