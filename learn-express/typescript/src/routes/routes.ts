import * as controllers from '../controller/controllers';
import express from 'express'
//  const Post = require("./models/post");
import Post from "../models/post"
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
router.get('/posts', controllers.getBlogbyid);
router.patch('/posts', controllers.updateBlog);
router.delete('/posts', controllers.deleteBlog);
export default router
 