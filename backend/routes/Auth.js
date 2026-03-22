import {Router} from "express"
import { RegisterUser } from "../controller/Auth.js"


const router = Router()
router.post("/" , RegisterUser)

export default router