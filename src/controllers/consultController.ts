import { Consults } from "@prisma/client"
import { Request, Response } from "express"
import { checkConsultsInfo } from "../services/consultService.js"

export type CreateConsultData = Omit<Consults, "id" | "date">

export async function CreateConsult(req: Request, res: Response) {
    const { animalId, doctorId, notes}: CreateConsultData = req.body

    await checkConsultsInfo({ animalId, doctorId, notes, userId: res.locals.user })

    res.sendStatus(201)
}