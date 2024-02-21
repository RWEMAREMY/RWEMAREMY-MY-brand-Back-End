import { number } from 'joi';
import { Schema, model } from 'mongoose';

// interface IComment extends Document {
  
//   author: Types.ObjectId;
//   email:string;
//   content: string;
//   blog: Types.ObjectId;
//   createdAt: Date;
// }

const commentSchema = new Schema({
  name:String,
  email:String,
  content:String,
  blog:String,
  date:{type:Date, default:Date.now}
 
});

const Comment = model('Comment', commentSchema);

export default Comment;