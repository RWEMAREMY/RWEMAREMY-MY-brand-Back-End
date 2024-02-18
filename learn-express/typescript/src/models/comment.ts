import { Schema, model, Document, Types } from 'mongoose';

interface IComment extends Document {
  
  author: Types.ObjectId;
  email:string;
  content: string;
  blog: Types.ObjectId;
  createdAt: Date;
}

const commentSchema = new Schema<IComment>({
  author:String,
  email:String,
  content:String,
  blog:String,
  createdAt:String,
});

const Comment = model<IComment>('Comment', commentSchema);

export default Comment;