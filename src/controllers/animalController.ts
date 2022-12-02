import {Request, Response} from "express"
import { Animals } from "@prisma/client"
import { checkNewAnimalInfo } from "../services/animalService.js"

export type CreateAnimalData = Omit<Animals, "id">

export async function createAnimal(req: Request, res: Response) {
    const {name, specie, breed, age, ownerId, vaccinated}: CreateAnimalData = req.body
    await checkNewAnimalInfo({name, age, breed, ownerId, vaccinated, specie})

    res.sendStatus(201)
}