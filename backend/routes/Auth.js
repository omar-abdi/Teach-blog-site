import {Router} from "express"
import { RegisterUser , Login , lougOut, UpdateUser } from "../controller/Auth.js"
import { protect } from "../middleware/protect.js"


const router = Router()
router.post("/signup" , RegisterUser)
router.post("/login" , Login)
router.put("/" ,  protect , UpdateUser)
router.post("/logout" , lougOut)

export default router