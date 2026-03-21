import {Router} from "express"
import { test } from "../controller/Auth.js"


const router = Router()
router.get("/" , test)

export default router