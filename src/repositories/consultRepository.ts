import { db } from "../app/database.js"
import { CreateConsultData } from "../controllers/consultController.js"

export async function InsertConsult(ConsultData: CreateConsultData) {
    return await db.consults.create({
        data: {...ConsultData, date: new Date()}
    })
}

export async function findUserConsults(userId: number) {
    return await db.consults.findMany({
        where: {
            userId: userId
        }
    })
}

export async function removeConsultsByAnimalId(animalId: number) {
    return await db.consults.deleteMany({
        where: {
            animalId: animalId
        }
    })
}