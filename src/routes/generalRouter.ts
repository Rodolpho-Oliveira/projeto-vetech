import { Router } from "express"
import doctorRouter from "./doctorRouter.js"
import userRouter from "./userRouter.js"

const router = Router()

router.use(doctorRouter)
router.use(userRouter)

export default router