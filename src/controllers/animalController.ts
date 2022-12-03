import {Request, Response} from "express"
import { Animals } from "@prisma/client"
import { checkNewAnimalInfo } from "../services/animalService.js"

export type CreateAnimalData = Omit<Animals, "id" | "ownerId">

export async function createAnimal(req: Request, res: Response) {
    const {name, specie, breed, age, vaccinated}: CreateAnimalData = req.body
    await checkNewAnimalInfo({name, age, breed, vaccinated, specie}, res.locals.user)

    res.sendStatus(201)
}