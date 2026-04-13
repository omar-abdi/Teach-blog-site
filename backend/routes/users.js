import { Router } from "express";
import { deleteUser, getUser, UpdateUser } from "../controller/user.js";
import { protect } from "../middleware/protect.js";
const router = Router()
router.get("/" , protect, getUser)
router.delete("/:id" , protect, deleteUser)
router.put("/:id" , protect,  UpdateUser)
export default router