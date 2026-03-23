import {Router} from "express"
import { RegisterUser , Login , lougOut } from "../controller/Auth.js"


const router = Router()
router.post("/signup" , RegisterUser)
router.post("/login" , Login)
router.post("/logout" , lougOut)

export default router