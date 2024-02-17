import express from 'express';
import { createComment, getCommentsByBlogId } from '../controller/commentController';


const router = express.Router();

// POST /api/blogs/:blogId/comments
router.post('/',createComment);

// GET /api/blogs/:blogId/comments
router.get('/', getCommentsByBlogId);

export default router;