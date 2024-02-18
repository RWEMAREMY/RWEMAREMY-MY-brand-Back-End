"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commentController_1 = require("../controller/commentController");
const router = express_1.default.Router();
// POST /api/blogs/:blogId/comments
router.route('/posts/:id/comments').post(commentController_1.createComment);
// GET /api/blogs/:blogId/comments
router.route('/posts/comments/:id').get(commentController_1.getComments);
router.route('/posts/:id/comments:id').get(commentController_1.getBlogComment);
exports.default = router;
