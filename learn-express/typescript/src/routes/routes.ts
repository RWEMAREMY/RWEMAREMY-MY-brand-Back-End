import * as controllers from '../controller/controllers';
import express from 'express';
import { createComment, getComments,getBlogComment,deleteComment,Commentupdate } from '../controller/commentController';
import *as query from '../controller/Querries';
import {createlike,alllikes,getSinglelikes} from '../controller/likes'
//  const Post = require("./models/post");
// import post from "../models/post"
// import Querry from '../models/Querries';
// express.Router(".models/post");
const router = express.Router()


// router.get("/posts", async (req, res) => {
//    const posts = await Post.find()
//     res.send(posts)

//    })
    
   
   
//  router.post("/posts", async (req, res) => {
//     const post =
//    new Post({
//     title: req.body.title,
//     content: req.body.content,
//     })
//     await post.save()
//     res.send(post)
//     })

//     router.get("/posts/:id", async (req, res) => {
//       try {
//          const post = await Post.findOne({ _id: req.params.id })
//          res.send(post)
//      } catch {
//          res.status(404)
//          res.send({ error: "Post doesn't exist!" })
//      }
//   })

//   router.patch("/posts/:id", async (req, res) => {
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

// router.delete("/posts/:id", async (req, res) => {
//    try {
//        await Post.deleteOne({ _id: req.params.id })
//        res.status(204).send()
//    } catch {
//        res.status(404)
//        res.send({ error: "Post doesn't exist!" })
//    }
// })

router.post('/posts', controllers.createBlog);
router.get('/posts', controllers.getBlog);
router.get('/posts/:id', controllers.getBlogById);
router.patch('/posts/:id', controllers.updateBlog);
router.delete('/posts/:id', controllers.deleteBlog);

     //////Comment Section//////////////////////
router.route('/posts/:id/comments').post(createComment);
router.route('/posts/:id/comments').get(getComments);
router.route('/posts/:id/comments/:id').get(getBlogComment);
router.route('/posts/:id/comments/:id').delete(deleteComment);
router.route('/posts/:id/comments/:id').patch(Commentupdate);

/////////////////Querries section///////////////

router.post('/posts/Query', query.createQuerry);
router.get('/Query',query.getallQuerry);
router.get('/posts/Query/:id', query.getSingleQuerry);

////////////////likes/////////////////////////
router.route('/posts/:id/likes').post(createlike);
router.route('/posts/:id/likes').get(alllikes);
router.route('/posts/:id/likes/:id').get(getSinglelikes);

export default router
