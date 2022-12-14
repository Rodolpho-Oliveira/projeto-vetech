import { Router } from "express"
import { createAnimal, getAnimals, removeAnimal, updateAnimal } from "../controllers/animalController.js"
import { animalValidation } from "../middlewares/AnimalMiddleware.js"
import { validateToken } from "../middlewares/authMiddleware.js"


const animalRouter = Router()

animalRouter.post("/animal/create", validateToken, animalValidation, createAnimal)
animalRouter.get("/animal", validateToken, getAnimals)
animalRouter.put("/animal", validateToken, animalValidation, updateAnimal)
animalRouter.delete("/animal", validateToken, removeAnimal)

export default animalRouter