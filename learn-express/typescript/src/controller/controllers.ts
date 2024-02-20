import {Request,Response}  from "express";
import post from '../models/post';
import{Error} from 'mongoose';
import {postval} from '../validations/postvalidation';
export const createBlog = async (req: Request, res: Response) => {
    try {
        const blog = await post.create(req.body);
        res.status(201).json(blog);
    } catch (err:any) {
        res.status(400).json({ message: err.message });
    }
};
export const getBlog = async (req: Request, res: Response) => {
    try {
        const blog = await post.find();
        res.send(blog);
    } catch (err:any) {
        res.status(400).json({ message: err.message });
    }
};

export const getBlogById = async (req: Request, res: Response) => {
    try {
        const blog = await post.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(blog);
    } catch (err: any) {
        res.status(500).json({ message: (err as Error).message });
    }
};

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
export const updateBlog = async (req: Request, res: Response) => {
    try {
        const blog = await post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(blog);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteBlog = async (req: Request, res: Response) => {
    try {
        await post.findByIdAndDelete(req.params.id);
        res.json({ message: 'blog deleted' });
    } catch (err: any) {
        res.status(500).json({ message: (err as Error).message });
    }
};