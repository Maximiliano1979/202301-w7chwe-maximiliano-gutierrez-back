import { Router } from "express";
import {
  registerUser,
  updateUserFriend,
} from "../controllers/usersControllers.js";
import multer from "multer";

export const usersRouter = Router();

const upload = multer({ dest: "uploads/" });

usersRouter.post("/register", upload.single("image"), registerUser);
