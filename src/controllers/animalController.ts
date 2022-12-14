import {Request, Response} from "express"
import { Animals } from "@prisma/client"
import { checkNewAnimalInfo, getUserAnimals, removeUserAnimal, updateUserAnimal } from "../services/animalService.js"

export type CreateAnimalData = Omit<Animals, "id" | "ownerId">

export async function createAnimal(req: Request, res: Response) {
    const {name, specie, breed, age, vaccinated}: CreateAnimalData = req.body
    await checkNewAnimalInfo({name, age, breed, vaccinated, specie}, res.locals.user)

    res.sendStatus(201)
}

export async function getAnimals(req: Request, res: Response) {
    const {name} = req.body
    const animals = await getUserAnimals(res.locals.user, name as string)

    res.status(200).send(animals)
}

export async function updateAnimal(req: Request, res: Response) {
    const {name, specie, breed, age, vaccinated}: CreateAnimalData = req.body
    await updateUserAnimal({name, age, breed, vaccinated, specie}, res.locals.user)

    res.status(200).send("Status updated")
}

export async function removeAnimal(req: Request, res: Response) {
    const {id}: {id: number} = req.body
    await removeUserAnimal(res.locals.user, id)

    res.status(200).send("Animal removed")
}