import { Router } from "express";
import authController from "../controllers/authController.js";
import uploads from "../utils/multer.js";

const router = Router();
router.route("/login").get(authController.loginuser);
router.route("/createUser").post(uploads.single("profile"),authController.register);
export default router;