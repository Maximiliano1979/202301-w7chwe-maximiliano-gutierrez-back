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

export const usersRouter = Router();

const upload = multer({ dest: "uploads/" });

usersRouter.get("/", getUsers);
usersRouter.post(
  "/register",
  [
    check("username", "The name is required").not().isEmpty(),
    check(
      "password",
      "The password it must to be at least 8 characters"
    ).isLength({ min: 8 }),
    check("email", "The email format is incorrect").isEmail(),
    check("email").custom(checkEmail),
    upload.single("avatar"),
    validateFields,
  ],
  registerUser
);
usersRouter.put("/addFriend/:_id", upload.single("image"), addUserFriend);
usersRouter.put("/removeFriend/:_id", upload.single("image"), addUserFoes);
