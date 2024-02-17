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
exports.deleteBlog = exports.updateBlog = exports.getBlogById = exports.getBlog = exports.createBlog = void 0;
const post_1 = __importDefault(require("../models/post"));
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield post_1.default.create(req.body);
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
        res.send(blog);
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
        const blog = yield post_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(blog);
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
