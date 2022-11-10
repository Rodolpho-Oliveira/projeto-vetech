import { getDoctorByEmail, insertNewDoctor } from "../repositories/doctorRepository.js"

export async function checkDoctorEmail(email: string, name: string, specialization: string) {
    const doctor = await getDoctorByEmail(email)
    if(doctor) {
        throw {type: "Doctor already exist", status: 404}
    }
    await insertNewDoctor(name, specialization, email)
}