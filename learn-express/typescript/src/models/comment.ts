import { Schema, model, Document, Types } from 'mongoose';

interface IComment extends Document {
  content: string;
  author: Types.ObjectId;
  blog: Types.ObjectId;
  createdAt: Date;
}

const commentSchema = new Schema<IComment>({
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  blog: { type: Schema.Types.ObjectId, ref: 'Blog', required: true },
  createdAt: { type: Date, default: Date.now }
});

const Comment = model<IComment>('Comment', commentSchema);

export default Comment;