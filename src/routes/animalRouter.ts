import { Router } from "express"
import { createAnimal, getAnimals } from "../controllers/animalController.js"
import { animalValidation } from "../middlewares/AnimalMiddleware.js"
import { validateToken } from "../middlewares/authMiddleware.js"


const animalRouter = Router()

animalRouter.post("/animal/create", validateToken, animalValidation, createAnimal)
animalRouter.get("/animal", validateToken, getAnimals)

export default animalRouter