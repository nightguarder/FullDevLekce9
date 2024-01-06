//importing modules
import  {Schema, model} from 'mongoose'
import Joi from 'joi'

//Joi = Schema description language
export const PostschemaValidate = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
    published: Joi.boolean().required(),

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
        required: true,
        default: false
    },
    //Add more...
    
})

 export const Post = model<IPosts>('Post', postSchema )