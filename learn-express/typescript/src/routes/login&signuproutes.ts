import express from "express";
import * as theUser from "../controller/user"
const router = express.Router();

router.post("/signup", theUser.createUser);
router.post("/login",theUser.loginUser)

export default router;