import {Router} from "express"
import { protect } from "../middleware/protect.js"
import { createPost  , getAllPost , getPost , updatePost , deletePost} from "../controller/Post.js"
const router = Router()

router.post("/create" ,  protect ,createPost )
router.get("/" ,getAllPost )
router.get("/:id", getPost )
router.put("/:id", updatePost )
router.delete("/:id"  , deletePost)

export default router