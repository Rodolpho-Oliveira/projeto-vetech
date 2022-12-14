import { Consults } from "@prisma/client"
import { Request, Response } from "express"
import { findUserConsults } from "../repositories/consultRepository.js"
import { checkConsultsInfo } from "../services/consultService.js"

export type CreateConsultData = Omit<Consults, "id" | "date">

export async function createConsult(req: Request, res: Response) {
    const { animalId, doctorId, notes}: CreateConsultData = req.body

    await checkConsultsInfo({ animalId, doctorId, notes, userId: res.locals.user })

    res.sendStatus(201)
}

export async function getUserConsults(req: Request, res: Response) {
    const { userId } = res.locals.user

    const consults = await findUserConsults(userId)

    if(!consults) throw {type: "No consults found", status: 404}

    res.status(200).send(consults)
}