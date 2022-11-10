import { Router } from "express"
import doctorRouter from "./doctorRouter.js"

const router = Router()

router.use(doctorRouter)

export default router