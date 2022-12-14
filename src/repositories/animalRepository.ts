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

export async function findUserAnimals(userId: number, name?: string) {
    return await db.animals.findMany({
        where: {
            name: {startsWith: name},
            ownerId: userId
        }
    })
}

export async function findAnimalById(id: number, userId: number) {
    return await db.animals.findFirst({
        where: {
            id: id,
            ownerId: userId
        }
    })
}

export async function changeAnimalData(animalId: number, animalData: CreateAnimalData) {
    return await db.animals.update({
        where: {
            id: animalId
        },
        data: animalData
    })
}