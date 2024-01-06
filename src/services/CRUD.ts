import { Post } from "../api/postSchema";

//Module for handling CRUD operations
export class postService {

    async createPost(data:any){
        try{
            const newPost = await Post.create(data);
            return newPost;
        }
        catch (error){
            console.error(error)
        }
    }
    async getAllPost(){
        try {
            const posts = await Post.find({})
            return posts;
        } catch (error) {
            console.error(error)
        }
    }
    //Using _ObjectId
    async getPost(id:string){
        try {
            const post = await Post.findById({_id:id})
            if(!post){
                return 'post not found!'
            }
            return post;
        } catch (error) {
            console.error(error)
        }
    }


}