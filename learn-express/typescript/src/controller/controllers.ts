import {Request,Response}  from "express";
import Blog from '../models/post';
import{Error} from 'mongoose'
export const createBlog = async (req: Request, res: Response) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json(blog);
    } catch (err:any) {
        res.status(400).json({ message: err.message });
    }
};
export const getBlog = async (req: Request, res: Response) => {
    try {
        const blog = await Blog.find();
        res.send(blog);
    } catch (err:any) {
        res.status(400).json({ message: err.message });
    }
};
export const getBlogbyid = async (req: Request, res: Response) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if(!blog){
            return res.status(400).json({message:"Blog not found please!"})
        }
        res.json(blog);
    } catch (err:any) {
        res.status(400).json({ message: err.message });
    }
};
export const updateBlog = async (req: Request, res: Response) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(blog);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteBlog = async (req: Request, res: Response) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog deleted' });
    } catch (err: any) {
        res.status(500).json({ message: (err as Error).message });
    }
};