import { Router } from "express";
import { deleteUser, getUser } from "../controller/user.js";
import { protect } from "../middleware/protect.js";
const router = Router()
router.get("/" , protect, getUser)
router.delete("/:id" , protect, deleteUser)
export default router