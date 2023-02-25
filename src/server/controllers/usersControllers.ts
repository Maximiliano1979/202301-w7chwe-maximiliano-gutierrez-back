import { type NextFunction, type Request, type Response } from "express";
import User from "../../database/models/User.js";
import { UserCredentials, UserStructure, type UserRegister } from "../../type";

export const registerUser = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserRegister>,
  res: Response,
  next: NextFunction
) => {
  const { email, avatar, name, password, username } = req.body;

  const newUser = await User.create({
    name,
    username,
    password,
    email,
    avatar,
  });

  res.status(201).json(newUser);
};

export const updateUserFriend = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserStructure>,
  res: Response,
  next: NextFunction
) => {
  const { friends } = req.body;

  const updateUser = await User.findByIdAndUpdate(
    "63fa013860c60d4cfa2ab43d",
    { friends: friends },
    { new: true }
  );
};
