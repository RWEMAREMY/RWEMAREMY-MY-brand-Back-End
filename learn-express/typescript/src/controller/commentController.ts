// src/controllers/commentController.ts
import { Request, Response } from 'express';
import Comment from '../models/comment';
import { Error} from 'mongoose';
import {commentval} from '../validations/commentsvalidation';
// import jwt from 'jsonwebtoken';
// import { Error } from 'mongoose';

export const createComment = async (req: Request, res: Response) => {
  try {
    const {name,email,content,blog}=req.body;
    const { error } = commentval.validate({ name,email,content,blog});
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const contents  = await req.body.content;
    const  blogId  = req.params.id;
   
    // You may want to perform additional validation on the content
    if (!contents) {
      return res.status(400).json({ message: 'Content is required' });
    }

    
    const comment = new Comment({ content:contents,email:req.body.email,
      name:req.body.name,date:req.body.date, blog: blogId });

    await comment.save();

    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
export const getComments = async (req: Request, res: Response) => {
  try {
    const  blogId  = req.params.id;
    // const commentid=req.params.id;
      const blog = await Comment.find();
     
      res.json(blog);

  const comment = new Comment({blog:blogId, content:req.body.content,
    email:req.body.email,name:req.body.name ,date:req.body.date });

  await comment.save();

  } catch (err) {
      res.status(500).json({ message: (err as Error).message });
  }
};

export const getBlogComment = async (req: Request, res: Response) => {
  try {
      const blog = await Comment.findById( req.params.id);
      if (!blog) {
        return res.status(404).json({ message: 'Not found, may be deleted / never created' });
    }
      res.status(200).send(blog);
  } catch (err:any) {
      res.status(400).json({ message: "Ooops not found ! Check Typo?" });
  }
};
export const deleteComment=async(req:Request,res:Response)=>{
try{
  await Comment.findByIdAndDelete(req.params.id);
res.json({message:"the comment is deleted"});
}
catch(err:any){
  res.status(400).json({ message: "err.message" });
}
};
export const Commentupdate = async (req: Request, res: Response) => {
  try {
    const {name,email,content,blog}=req.body;
    const { error } = commentval.validate({ name,email,content,blog });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
      const theblog = await Comment.findByIdAndUpdate(req.params.id, { name,email,content,blog }, { new: true });
      res.json(theblog);
  } catch (err: any) {
      res.status(400).json({ message: err.message });
  }
};

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