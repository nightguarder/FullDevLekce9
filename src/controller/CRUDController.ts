import { PostServices } from "../services/CRUDService";
import { Request,Response } from "express";
import { PostschemaValidate } from "../api/postSchema";


class CRUDController {
    //*CREATE*
    addpost = async (req: Request, res: Response) => {
        try {
        //Extract data from the request body
        const data = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            published: req.body.published
        }
        //Validation
        const {error, value} = PostschemaValidate.validate(data)
        if(error){
            return res.status(400).send(error.message);

        }
        //Finally call the postService to create it
        const post = await PostServices.createPost(value);
        res.status(201).send(post)          
        }catch(error){
            console.error("Error when adding post.",error);
            return res.status(500)
        }
   }
   //*READ*
   getAPost = async (req:Request,res:Response)=>{
    try {
        const allPosts = await PostServices.getAllPost();
        res.send(allPosts)
    } catch (error) {
        console.error("Unknown error.",error);
        return res.status(500);        
    }
   }
   //*READ
   getPost = async (req:Request,res:Response)=>{
    try {
        const id = req.params.id;
        const post = await PostServices.getPost(id);
        res.send(post);
    } catch (error) {
        console.error("Unknown error.",error);
        return res.status(500);        
    }
    }
    //*UPDATE
    updatePost = async (req:Request,res:Response)=>{
        try {
            const id = req.params.id
            const post = await PostServices.updatePost(id, req.body)  
            res.send(post);
        } catch (error) {
            console.error("Unknown error.",error);
            return res.status(500);        
        }
        }
    //*DELETE
    deletePost = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
        await PostServices.deletePost(id)
        res.send('post deleted')
        } catch (error) {
            console.error("Unknown error.",error);
            return res.status(500);
        }
    }
}
export const PostController = new CRUDController();