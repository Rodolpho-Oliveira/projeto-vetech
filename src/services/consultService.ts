import { CreateConsultData } from "../controllers/consultController.js"
import { getDoctorById } from "../repositories/doctorRepository.js"
import { findAnimalById } from "../repositories/animalRepository.js"
import { InsertConsult } from "../repositories/consultRepository.js"

export async function checkConsultsInfo(consultData: CreateConsultData) {
    const { animalId, doctorId, notes, userId} = consultData

    if (!animalId || !doctorId || !notes) {
        throw {type: "Missing data", status: 400}
    }

    const doctor = await getDoctorById(doctorId)
    const animal = await findAnimalById(animalId, userId)

    if (!doctor) {
        throw {type: "Doctor not found", status: 404}
    }

    if (!animal) {
        throw {type: "Animal not found", status: 404}
    }

    await InsertConsult({animalId, doctorId, notes, userId})
}
