import { Request, Response, NextFunction } from "express"
import Joi from "joi"

export async function checkDoctorInfo( req: Request, res: Response, next: NextFunction) {
    const { name, specialization, email }: {name: string, specialization: string, email: string} = req.body
    const doctorValidation = Joi.object({
        name: Joi.string().required(),
        specialization: Joi.string().required(),
        email: Joi.string().email().required()
    })
    const { error } = doctorValidation.validate({name, specialization, email})
    if(error) {
        return res.status(400).send(error.details[0].message)
    }

    next()
}