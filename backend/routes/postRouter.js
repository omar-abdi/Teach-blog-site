import {Router} from "express"
import { createPost  , getAllPost , getPost , updatePost , deletePost} from "../controller/Post.js"
const router = Router()

router.post("/" )
router.get("/" )
router.get("/:id" )
router.pit("/:id" )
router.delete("/:id" )

export default router