import { Router } from "express";
import {
  getUsers,
  registerUser,
  updateUserFoes,
  updateUserFriend,
} from "../controllers/usersControllers.js";
import multer from "multer";

export const usersRouter = Router();

const upload = multer({ dest: "uploads/" });

usersRouter.get("/", getUsers);
usersRouter.post("/register", upload.single("image"), registerUser);
usersRouter.put("/addFriend/:_id", upload.single("image"), updateUserFriend);
usersRouter.put("/removeFriend/:_id", upload.single("image"), updateUserFoes);
