// src/controllers/commentController.ts
import { Request, Response } from 'express';
import Comment from '../models/comment';
// import jwt from 'jsonwebtoken';
// import { Error } from 'mongoose';

export const createComment = async (req: Request, res: Response) => {
  try {
    const { content } = req.body;
    const { blogId } = req.params;
    // You may want to perform additional validation on the content
    if (!content) {
      return res.status(400).json({ message: 'Content is required' });
    }

    
    const comment = new Comment({ content, blog: blogId });

    await comment.save();

    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getCommentsByBlogId = async (req: Request, res: Response) => {
  try {
    const { blogId } = req.params;
    const comments = await Comment.find({ blog: blogId });
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};