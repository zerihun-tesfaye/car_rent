import { Router } from "express";
import authController from "../controllers/authController.js";
import {houseController} from "../controllers/houseController.js";
import uploads from "../utils/multer.js";
const router = Router();



router.route("/uploadHouse").post(uploads.array("house",5),houseController.uploadHouse)

router.route("/getallHouse").get(houseController.getallHouse)



export default router;