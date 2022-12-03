import { NextFunction, Request, Response } from "express"
import Joi from "joi"

export async function animalValidation(req: Request, res: Response, next: NextFunction) {
    const animalValidation = Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required(),
        breed: Joi.string().required(),
        specie: Joi.string().required(),
        vaccinated: Joi.boolean().required()
    })
    const validation = animalValidation.validate(req.body)
    if(validation.error){
        throw {type: "Wrong infomartion", status: 401}
    }
    
    next()
}