import { db } from "../app/database.js"
import { CreateAnimalData } from "../controllers/animalController.js"

export async function registerNewAnimal(animalData: CreateAnimalData) {
    return await db.animals.create(
        {data: animalData}
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