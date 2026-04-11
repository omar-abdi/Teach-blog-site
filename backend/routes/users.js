import { Router } from "express";
import { getUser } from "../controller/user.js";
import { protect } from "../middleware/protect.js";
const router = Router()
router.get("/" , protect, getUser)
export default router