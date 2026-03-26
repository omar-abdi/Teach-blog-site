import {Router} from "express"
import { protect } from "../middleware/protect.js"
import { createPost  , getAllPost , getPost , updatePost , deletePost , getUserPost} from "../controller/Post.js"
const router = Router()

router.post("/create" ,  protect ,createPost )
router.get("/" ,getAllPost )
router.get("/:id", getPost )
router.get("/user/:username", getUserPost )
router.put("/:id",   protect ,updatePost )
router.delete("/:id" , protect, deletePost)

export default router