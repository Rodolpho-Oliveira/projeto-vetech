import { Request, Response } from "express"
import { checkDoctorEmail } from "../services/doctorService.js"

export async function registerNewDoctor(req: Request, res: Response) {
    const { name, specialization, email } = req.body
    await checkDoctorEmail(email, specialization, name)
    res.sendStatus(201)
}