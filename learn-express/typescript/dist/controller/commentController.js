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
<<<<<<< HEAD
=======
const post_1 = __importDefault(require("../models/post"));
>>>>>>> 03f34f19d7f7839299ec935a253b06a6590ddcc1
const commentsvalidation_1 = require("../validations/commentsvalidation");
// import jwt from 'jsonwebtoken';
// import { Error } from 'mongoose';
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
<<<<<<< HEAD
        const { name, email, content, blog } = req.body;
        const { error } = commentsvalidation_1.commentval.validate({ name, email, content, blog });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const contents = yield req.body.content;
        const blogId = req.params.id;
        // You may want to perform additional validation on the content
        if (!contents) {
            return res.status(400).json({ message: 'Content is required' });
        }
        const comment = new comment_1.default({ content: contents, email: req.body.email,
            name: req.body.name, date: req.body.date, blog: blogId });
        yield comment.save();
        res.status(201).json(comment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
=======
        // const { name, email, idea } = req.body;
        const blogId = req.params.id;
        const blog = yield post_1.default.findOne({ _id: blogId });
        if (!blog) {
            return res.status(404).send({ error: "Not Found" });
        }
        const newComment = new comment_1.default({
            name: req.body.name,
            email: req.body.email,
            content: req.body.content,
            blog: blog._id,
        });
        yield newComment.save();
        res.status(201).json(newComment);
    }
    catch (error) {
        res.status(500).send({ error: "Error Occurred" });
>>>>>>> 03f34f19d7f7839299ec935a253b06a6590ddcc1
    }
});
exports.createComment = createComment;
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        // const commentid=req.params.id;
        const blog = yield comment_1.default.find();
<<<<<<< HEAD
        res.json(blog);
        const comment = new comment_1.default({ blog: blogId, content: req.body.content,
            email: req.body.email, name: req.body.name, date: req.body.date });
        yield comment.save();
=======
        res.status(200).json(blog);
        // const comment = new Comment({blog:blogId, content:req.body.content,
        //   email:req.body.email,name:req.body.name ,date:req.body.date });
        // await comment.save();
>>>>>>> 03f34f19d7f7839299ec935a253b06a6590ddcc1
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
<<<<<<< HEAD
        const { name, email, content, blog } = req.body;
        const { error } = commentsvalidation_1.commentval.validate({ name, email, content, blog });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const theblog = yield comment_1.default.findByIdAndUpdate(req.params.id, { name, email, content, blog }, { new: true });
        res.json(theblog);
=======
        const { name, email, content } = req.body;
        const { error } = commentsvalidation_1.commentval.validate({ name, email, content });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const theblog = yield comment_1.default.findByIdAndUpdate(req.params.id, { name, email, content }, { new: true });
        res.status(200).json(theblog);
>>>>>>> 03f34f19d7f7839299ec935a253b06a6590ddcc1
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
//       email:req.body.email,name:req.body.name });
//     await comment.save();
//     } catch (err: any) {
//         res.status(500).json({ message: (err as Error).message });
//     }
// };
