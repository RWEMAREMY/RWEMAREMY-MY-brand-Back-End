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
exports.getlikeBlog = exports.likeBlog = exports.deleteBlog = exports.updateBlog = exports.getBlogById = exports.getBlog = exports.createBlog = void 0;
const cloudinary_1 = __importDefault(require("../accesories/cloudinary"));
const post_1 = __importDefault(require("../models/post"));
const postvalidation_1 = require("../validations/postvalidation");
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const { error } = postvalidation_1.postval.validate({ title, content });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        if (!req.file) {
            return res.status(400).json({ error: "Image file is required" });
        }
        const result = yield cloudinary_1.default.uploader.upload(req.file.path);
        const blog = yield post_1.default.create({ title,
            content, image: result.secure_url
        });
        res.status(201).json(blog);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.createBlog = createBlog;
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield post_1.default.find();
        res.status(200).json(blog);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.getBlog = getBlog;
const getBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield post_1.default.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(blog);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getBlogById = getBlogById;
// export const getBlogbyid = async (req: Request, res: Response) => {
//     try {
//         const blogId = req.params.id;
//         const blog = await post.find({ id: blogId });
//                  res.send(blog)
//              } catch {
//                  res.status(404)
//                  res.send({ error: "Post doesn't exist!" })
//              }
// };
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const { error } = postvalidation_1.postval.validate({ title, content });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const blog = yield post_1.default.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        res.status(200).json(blog);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield post_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: 'blog deleted' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.deleteBlog = deleteBlog;
const likeBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const blog = yield post_1.default.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        blog.likes++; // here i Incremented likes..
        yield blog.save();
        res.status(200).json({ likes: blog.likes });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.likeBlog = likeBlog;
const getlikeBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield post_1.default.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(blog);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getlikeBlog = getlikeBlog;
