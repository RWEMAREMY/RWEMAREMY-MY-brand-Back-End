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
exports.Commentupdate = exports.deleteComment = exports.getBlogComment = exports.getComments = exports.createComment = void 0;
const comment_1 = __importDefault(require("../models/comment"));
// import jwt from 'jsonwebtoken';
// import { Error } from 'mongoose';
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contents = yield req.body.content;
        const blogId = req.params.id;
        // You may want to perform additional validation on the content
        if (!contents) {
            return res.status(400).json({ message: 'Content is required' });
        }
        const comment = new comment_1.default({ content: contents, email: req.body.email,
            author: req.body.author, blog: blogId });
        yield comment.save();
        res.status(201).json(comment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.createComment = createComment;
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        // const commentid=req.params.id;
        const blog = yield comment_1.default.find();
        res.json(blog);
        const comment = new comment_1.default({ blog: blogId, content: req.body.content,
            email: req.body.email, author: req.body.author });
        yield comment.save();
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getComments = getComments;
const getBlogComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield comment_1.default.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Not found, may be deleted / never created' });
        }
        res.status(200).send(blog);
    }
    catch (err) {
        res.status(400).json({ message: "Ooops not found ! Check Typo?" });
    }
});
exports.getBlogComment = getBlogComment;
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield comment_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: "the comment is deleted" });
    }
    catch (err) {
        res.status(400).json({ message: "err.message" });
    }
});
exports.deleteComment = deleteComment;
const Commentupdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield comment_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(blog);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.Commentupdate = Commentupdate;
// export const getComments = async (req: Request, res: Response) => {
//     try {
//       // const commentid=req.params.id;
//         const blog = await Comment.find();
//         res.json(blog);
//     const comment = new Comment({ content:req.body.content,
//       email:req.body.email,author:req.body.author });
//     await comment.save();
//     } catch (err: any) {
//         res.status(500).json({ message: (err as Error).message });
//     }
// };
