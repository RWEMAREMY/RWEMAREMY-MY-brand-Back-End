"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// interface IComment extends Document {
//   author: Types.ObjectId;
//   email:string;
//   content: string;
//   blog: Types.ObjectId;
//   createdAt: Date;
// }
const commentSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    content: String,
    blog: String,
    date: { type: Date, default: Date.now }
});
const Comment = (0, mongoose_1.model)('Comment', commentSchema);
exports.default = Comment;
