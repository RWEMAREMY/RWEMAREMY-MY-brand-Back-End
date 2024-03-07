import * as controllers from "../controller/controllers";
import express from "express";
import {
  createComment,
  getComments,
  getBlogComment,
  deleteComment,
  Commentupdate,
} from "../controller/commentController";
import * as query from "../controller/Querries";
import save from "../accesories/multer";
import * as theUser from "../controller/user";
import { isAdmin, isAuthenticated } from "../middlewear/authenticatepass";
const router = express.Router();

router.post(
  "/blogs",

  save.single("image"),
  controllers.createBlog
); // isAuthenticated, isAdmin,
router.get("/blogs", controllers.getBlog);
router.get("/blogs/:id", controllers.getBlogById);
router.patch("/blogs/:id", isAuthenticated, isAdmin, controllers.updateBlog); // isAuthenticated, isAdmin,
router.delete("/blogs/:id",  controllers.deleteBlog); // isAuthenticated, isAdmin,

//////Comment Section//////////////////////

router.route("/blogs/:id/comments").post(createComment);
router.route("/blogs/:id/comments").get(getComments);
router.route("/blogs/:id/comments/:id").get(getBlogComment);
router.route("/blogs/:id/comments/:id").delete(deleteComment);
router.route("/blogs/:id/comments/:id").patch(Commentupdate);
router.get("/blogs/like/", controllers.getlikeBlog);
/////////////////Querries section///////////////
router.post("/queries", query.createQuerry);
router.get("/queries", query.getallQuerry);
router.get("/queries/:id", query.getSingleQuerry);
///////////////////likes//////////////////////////////

router.post("/blogs/:id/likes", controllers.likeBlog);
router.get("/blogslikes/:id", controllers.getlikeBlog);
////////////////////////////////////////////////////

router.post("/signup", theUser.createUser);
router.post("/login", theUser.loginUser);

export default router;
