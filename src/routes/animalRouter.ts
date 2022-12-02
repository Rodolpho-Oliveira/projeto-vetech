import { Router } from "express"
import { createAnimal } from "../controllers/animalController.js"
import { animalValidation } from "../middlewares/AnimalMiddleware.js"
import { validateToken } from "../middlewares/authMiddleware.js"


const animalRouter = Router()

animalRouter.post("/animal/create", validateToken, animalValidation, createAnimal)

export default animalRouter