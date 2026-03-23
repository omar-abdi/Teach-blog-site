import {Router} from "express"
import { RegisterUser , Login } from "../controller/Auth.js"


const router = Router()
router.post("/signup" , RegisterUser)
router.post("/login" , Login)

export default router