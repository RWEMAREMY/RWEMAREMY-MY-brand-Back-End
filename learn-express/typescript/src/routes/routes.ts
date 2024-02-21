import * as controllers from '../controller/controllers';
import express from 'express';
import { createComment, getComments,getBlogComment,deleteComment,Commentupdate } from '../controller/commentController';
import *as query from '../controller/Querries';
import save from '../accesories/multer';
//  const Post = require("./models/post");
// import post from "../models/post"
// import Querry from '../models/Querries';
// express.Router(".models/post");
const router = express.Router()


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

router.post('/blogs', save.single("image"),controllers.createBlog);
router.get('/blogs', controllers.getBlog);
router.get('/blogs/:id', controllers.getBlogById);
router.patch('/blogs/:id', controllers.updateBlog);
router.delete('/blogs/:id', controllers.deleteBlog);

     //////Comment Section//////////////////////
router.route('/blogs/:id/comments').post(createComment);
router.route('/blogs/:id/comments').get(getComments);
router.route('/blogs/:id/comments/:id').get(getBlogComment);
router.route('/blogs/:id/comments/:id').delete(deleteComment);
router.route('/blogs/:id/comments/:id').patch(Commentupdate);

/////////////////Querries section///////////////

router.post('/query', query.createQuerry);
router.get('/query',query.getallQuerry);
router.get('/query/:id', query.getSingleQuerry);

////////////////likes/////////////////////////
// router.route('/blogs/:id/likes').post(createlike);
// router.route('/blogs/:id/likes').get(alllikes);
// router.route('/blogs/:id/likes/:id').get(getSinglelikes);
router.post('/blogs/:id/like', controllers.likeBlog);

export default router
