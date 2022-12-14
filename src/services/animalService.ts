import { CreateAnimalData } from "../controllers/animalController.js"
import { changeAnimalData, findAnimalByName, findUserAnimals, registerNewAnimal } from "../repositories/animalRepository.js"

export async function checkNewAnimalInfo(createAnimalData: CreateAnimalData, userId: number) {
    const animal = await findAnimalByName(createAnimalData.name, userId)
    if(animal){
        throw {type: "Pet already exist", status: 403}
    }
    await registerNewAnimal(createAnimalData, userId)
}

export async function getUserAnimals(userId: number, name?: string) {
    const animals = await findUserAnimals(userId, name)
    if(animals.length === 0){
        throw {type: "Pet not found", status: 404}
    }
    return animals
}

export async function updateUserAnimal(createAnimalData: CreateAnimalData, userId: number) {
    const animal = await findAnimalByName(createAnimalData.name, userId)
    if(!animal){
        throw {type: "Pet not found", status: 404}
    }
    await changeAnimalData(animal.id, createAnimalData)
}