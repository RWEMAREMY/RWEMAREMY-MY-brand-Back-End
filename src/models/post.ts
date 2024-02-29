import mongoose from 'mongoose'

 const schema = new mongoose.Schema({
id:{type:String},
 title: {type:String},
 image:{type: String,required: false},
 content: {type:String },
 likes:{type:Number ,default: 0}
 
 })
 export const schema2 = new mongoose.Schema({
    id:{type:String},
     likes:{type:Number ,default: 0}
 
     })
     
 export default mongoose.model("Post", schema)

