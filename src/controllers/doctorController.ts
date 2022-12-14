import { Request, Response } from "express"
import { findAllDoctors } from "../repositories/doctorRepository.js"
import { checkDoctorEmail } from "../services/doctorService.js"

export async function registerNewDoctor(req: Request, res: Response) {
    const { name, specialization, email } = req.body
    await checkDoctorEmail(email, specialization, name)
    res.sendStatus(201)
}

export async function getAllDoctors(req: Request, res: Response) {
    const doctors = await findAllDoctors()
    res.status(200).send(doctors)
}