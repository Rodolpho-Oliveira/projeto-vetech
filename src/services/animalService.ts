import { CreateAnimalData } from "../controllers/animalController.js"
import { findAnimalByName, registerNewAnimal } from "../repositories/animalRepository.js"

export async function checkNewAnimalInfo(createAnimalData: CreateAnimalData, userId: number) {
    const animal = await findAnimalByName(createAnimalData.name, userId)
    if(animal){
        throw {type: "Pet already exist", status: 403}
    }
    await registerNewAnimal(createAnimalData, userId)
}