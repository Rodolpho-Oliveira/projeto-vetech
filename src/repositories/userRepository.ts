import { db } from "../app/database.js"
import { CreateUserData } from "../controllers/userController.js"

export async function checkUserEmail(email: string) {
    return await db.users.findUnique({
        where: {email}
    })
}

export async function createNewUser(createUserData: CreateUserData) {
    return await db.users.create({data: createUserData})
}