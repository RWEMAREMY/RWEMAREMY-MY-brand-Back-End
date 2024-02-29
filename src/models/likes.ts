import mongoose from 'mongoose'

 const schema = new mongoose.Schema({
id:{type:String},
likes:{type:Number}
 
 })
 export default mongoose.model("like", schema)
 