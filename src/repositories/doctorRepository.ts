import { db } from "../app/database.js"

export async function insertNewDoctor(name: string, specialization: string, email: string) {
    await db.doctors.create({
        data: {
            name,
            specialization,
            email
        },
    })
}

export async function getDoctorByEmail(email: string) {
    return await db.doctors.findUnique({
        where: {
            email
        }
    })
}

export async function getDoctorById(id: number) {
    return await db.doctors.findUnique({
        where: {
            id
        }
    })
}