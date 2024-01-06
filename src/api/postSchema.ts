//importing modules
import  {Schema, model} from 'mongoose'
import Joi from 'joi'

//Joi = Schema description language
//Query Builder for Blog Posts
export const PostschemaValidate = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
    published: Joi.boolean().required(),
    //TODO: add Date

})

//creating an Interface 
interface IPosts {
    title: string,
    description: string,
    author: string,
    published: boolean,

}

//Postschema
const postSchema = new Schema<IPosts>({
    title: {
        type: String,
        required:true
    },

    description: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    published: {
        type: Boolean,
        default: false
    },
    //Add more...
    
})

 export const Post = model<IPosts>('Posts', postSchema )