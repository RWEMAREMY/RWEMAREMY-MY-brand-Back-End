import mongoose from 'mongoose'

 const schema = new mongoose.Schema({
id:String,
 title: String,
 content: String,
 
 })

 
 export default mongoose.model("Post", schema)

