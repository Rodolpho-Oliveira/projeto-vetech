import { db } from "../app/database.js"
import { CreateConsultData } from "../controllers/consultController.js"

export async function InsertConsult(ConsultData: CreateConsultData) {
    return await db.consults.create({
        data: {...ConsultData, date: new Date()}
    })
}