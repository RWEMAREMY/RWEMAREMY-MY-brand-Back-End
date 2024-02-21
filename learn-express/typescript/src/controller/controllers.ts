import {Request,Response}  from "express";
import cloudinary from "../accesories/cloudinary";
import post from '../models/post';
import schema2 from '../models/post';
import {postval} from '../validations/postvalidation';
import like from '../models/likes';
export const createBlog = async (req: Request, res: Response) => {
   
    try {
        const {title,content}=req.body;
        

        const { error } = postval.validate({ title,content });
        if (error) {
          return res.status(400).json({ error: error.details[0].message});
        }
if(!req.file){
    return res.status(400).json({ error: "Image file is required" })
}
        const result = await cloudinary.uploader.upload(req.file.path);
        const blog = await post.create({title,
            content,image: result.secure_url
            });
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
        const {title,content}=req.body;
        const { error } = postval.validate({ title,content });
        if (error) {
          return res.status(400).json({ error: error.details[0].message });
        }
        const blog = await post.findByIdAndUpdate(req.params.id, { title,content }, { new: true });
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

export const likeBlog = async(req: Request, res: Response)=> {
    try {
      const { id } = req.params;
      const blog = await post.findById(id);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      blog.likes++; // here i Incremented likes..
      await blog.save();
      res.status(200).json({ likes: blog.likes });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  export const getlikeBlog = async (req: Request, res: Response) => {
   
    try {
        const {_id,likes}=req.body;
        const blog = await schema2.find();
        res.send(blog);
    } catch (err:any) {
        res.status(400).json({ message: err.message });
    }
};




