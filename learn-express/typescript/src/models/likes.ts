import { Schema,model } from "mongoose";

const likesSchema=new Schema({
    name:String,
    content:String,
 
})
const Likes=model('querry',likesSchema);
export default Likes;
