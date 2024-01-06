//importing modules
import express from "express";
import { PostController } from "../controller/CRUDController";

//initiating the router
export const router = express.Router()

//add new post
router.post('/',PostController.addpost)

//get All posts
router.get('/', PostController.getAPost)

//get single post
router.get('/:id', PostController.getPost)

//update 
router.put('/:id', PostController.updatePost)

//delete
router.delete('/:id', PostController.deletePost)
