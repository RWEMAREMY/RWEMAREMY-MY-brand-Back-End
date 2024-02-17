"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    content: { type: String, required: true },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    blog: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Blog', required: true },
    createdAt: { type: Date, default: Date.now }
});
const Comment = (0, mongoose_1.model)('Comment', commentSchema);
exports.default = Comment;
