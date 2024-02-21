"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers = __importStar(require("../controller/controllers"));
const express_1 = __importDefault(require("express"));
const commentController_1 = require("../controller/commentController");
const query = __importStar(require("../controller/Querries"));
const multer_1 = __importDefault(require("../accesories/multer"));
//  const Post = require("./models/post");
// import post from "../models/post"
// import Querry from '../models/Querries';
// express.Router(".models/post");
const router = express_1.default.Router();
// router.get("/blogs", async (req, res) => {
//    const blogs = await Post.find()
//     res.send(blogs)
//    })
//  router.post("/blogs", async (req, res) => {
//     const post =
//    new Post({
//     title: req.body.title,
//     content: req.body.content,
//     })
//     await post.save()
//     res.send(post)
//     })
//     router.get("/blogs/:id", async (req, res) => {
//       try {
//          const post = await Post.findOne({ _id: req.params.id })
//          res.send(post)
//      } catch {
//          res.status(404)
//          res.send({ error: "Post doesn't exist!" })
//      }
//   })
//   router.patch("/blogs/:id", async (req, res) => {
//    try {
//        const post = await Post.findOne({ _id: req.params.id })
//        if (req.body.title) {
//            post.title = req.body.title
//        }
//        if (req.body.content) {
//            post.content = req.body.content
//        }
//        await post.save()
//        res.send(post)
//    } catch {
//        res.status(404)
//        res.send({ error: "Post doesn't exist!" })
//    }
// })
// router.delete("/blogs/:id", async (req, res) => {
//    try {
//        await Post.deleteOne({ _id: req.params.id })
//        res.status(204).send()
//    } catch {
//        res.status(404)
//        res.send({ error: "Post doesn't exist!" })
//    }
// })
router.post('/blogs', multer_1.default.single("image"), controllers.createBlog);
router.get('/blogs', controllers.getBlog);
router.get('/blogs/:id', controllers.getBlogById);
router.patch('/blogs/:id', controllers.updateBlog);
router.delete('/blogs/:id', controllers.deleteBlog);
//////Comment Section//////////////////////
router.route('/blogs/:id/comments').post(commentController_1.createComment);
router.route('/blogs/:id/comments').get(commentController_1.getComments);
router.route('/blogs/:id/comments/:id').get(commentController_1.getBlogComment);
router.route('/blogs/:id/comments/:id').delete(commentController_1.deleteComment);
router.route('/blogs/:id/comments/:id').patch(commentController_1.Commentupdate);
/////////////////Querries section///////////////
router.post('/query', query.createQuerry);
router.get('/query', query.getallQuerry);
router.get('/query/:id', query.getSingleQuerry);
////////////////likes/////////////////////////
// router.route('/blogs/:id/likes').post(createlike);
// router.route('/blogs/:id/likes').get(alllikes);
// router.route('/blogs/:id/likes/:id').get(getSinglelikes);
router.post('/blogs/:id/like', controllers.likeBlog);
exports.default = router;
