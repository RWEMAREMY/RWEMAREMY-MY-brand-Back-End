"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentsByBlogId = exports.createComment = void 0;
const comment_1 = __importDefault(require("../models/comment"));
// import jwt from 'jsonwebtoken';
// import { Error } from 'mongoose';
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { content } = req.body;
        const { blogId } = req.params;
        // You may want to perform additional validation on the content
        if (!content) {
            return res.status(400).json({ message: 'Content is required' });
        }
        const comment = new comment_1.default({ content, blog: blogId });
        yield comment.save();
        res.status(201).json(comment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.createComment = createComment;
const getCommentsByBlogId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { blogId } = req.params;
        const comments = yield comment_1.default.find({ blog: blogId });
        res.json(comments);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.getCommentsByBlogId = getCommentsByBlogId;
