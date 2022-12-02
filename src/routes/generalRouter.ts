import { Router } from "express"
import animalRouter from "./animalRouter.js"
import doctorRouter from "./doctorRouter.js"
import userRouter from "./userRouter.js"

const router = Router()

router.use(doctorRouter)
router.use(userRouter)
router.use(animalRouter)

export default router