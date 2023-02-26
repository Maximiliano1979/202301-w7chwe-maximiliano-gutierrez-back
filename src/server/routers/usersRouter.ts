import { Router } from "express";
import { check } from "express-validator";
import {
  getUsers,
  registerUser,
  addUserFoes,
  addUserFriend,
} from "../controllers/usersControllers.js";
import multer from "multer";
import { validateFields } from "../middlewares/validateFields.js";
import { checkEmail } from "../middlewares/checkEmail.js";
import upload from "../middlewares/multerImages.js";

export const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.post(
  "/register",
  [
    upload.single("avatar"),
    check("username", "The username is required").not().isEmpty(),
    check(
      "password",
      "The password it must to be at least 8 characters"
    ).isLength({ min: 8 }),
    check("email", "The email format is incorrect").isEmail(),
    check("email").custom(checkEmail),
    validateFields,
  ],
  registerUser
);
usersRouter.put("/addFriend/:_id", addUserFriend);
usersRouter.put("/removeFriend/:_id", addUserFoes);
