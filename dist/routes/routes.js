"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers = __importStar(require("../controller/controllers"));
const express_1 = __importDefault(require("express"));
const commentController_1 = require("../controller/commentController");
const query = __importStar(require("../controller/Querries"));
const multer_1 = __importDefault(require("../accesories/multer"));
const theUser = __importStar(require("../controller/user"));
const authenticatepass_1 = require("../middlewear/authenticatepass");
const router = express_1.default.Router();
router.post('/blogs', authenticatepass_1.isAuthenticated, authenticatepass_1.isAdmin, multer_1.default.single("image"), controllers.createBlog); // isAuthenticated, isAdmin,
router.get('/blogs', controllers.getBlog);
router.get('/blogs/:id', controllers.getBlogById);
router.patch('/blogs/:id', authenticatepass_1.isAuthenticated, authenticatepass_1.isAdmin, controllers.updateBlog); // isAuthenticated, isAdmin,
router.delete('/blogs/:id', authenticatepass_1.isAuthenticated, authenticatepass_1.isAdmin, controllers.deleteBlog); // isAuthenticated, isAdmin,
//////Comment Section//////////////////////
router.route('/blogs/:id/comments').post(commentController_1.createComment);
router.route('/blogs/:id/comments').get(commentController_1.getComments);
router.route('/blogs/:id/comments/:id').get(commentController_1.getBlogComment);
router.route('/blogs/:id/comments/:id').delete(commentController_1.deleteComment);
router.route('/blogs/:id/comments/:id').patch(commentController_1.Commentupdate);
router.get('/blogs/like/', controllers.getlikeBlog);
/////////////////Querries section///////////////
router.post('/queries', query.createQuerry);
router.get('/queries', query.getallQuerry);
router.get('/queries/:id', query.getSingleQuerry);
///////////////////likes//////////////////////////////
router.post('/blogs/:id/likes', controllers.likeBlog);
router.get('/blogslikes/:id', controllers.getlikeBlog);
////////////////////////////////////////////////////
router.post("/signup", theUser.createUser);
router.post("/login", theUser.loginUser);
exports.default = router;
