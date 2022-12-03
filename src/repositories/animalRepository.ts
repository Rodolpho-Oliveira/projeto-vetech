import { db } from "../app/database.js"
import { CreateAnimalData } from "../controllers/animalController.js"

export async function registerNewAnimal(animalData: CreateAnimalData, userId: number) {
    return await db.animals.create(
        {data: {...animalData, ownerId: userId}}
    )
}

export async function findAnimalByName(name: string, ownerId: number) {
    return await db.animals.findFirst({
        where: {
            name:name,
            ownerId: ownerId
        }
    })
}