"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    author: String,
    email: String,
    content: String,
    blog: String,
    createdAt: String,
});
const Comment = (0, mongoose_1.model)('Comment', commentSchema);
exports.default = Comment;
