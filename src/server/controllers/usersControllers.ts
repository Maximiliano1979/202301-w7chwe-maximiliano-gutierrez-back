import debug from "debug";
import { type NextFunction, type Request, type Response } from "express";
import User from "../../database/models/User.js";
import {
  UserCredentials,
  type UserStructure,
  type UserRegister,
} from "../../type";

export const getUsers = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserRegister>,
  res: Response,
  next: NextFunction
) => {
  const users = await User.find();

  res.status(200).json(users);
};

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
  const id = req.params;
  const newFriend = "63fa0f396f1692cbe7496c57";

  const updateUser = await User.updateOne(
    { _id: id },
    { $push: { friends: newFriend } }
  );

  res.status(201).json({ updateUser });
};

export const updateUserFoes = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserStructure>,
  res: Response,
  next: NextFunction
) => {
  const id = req.params;
  const newFriend = "63fa0f396f1692cbe7496c57";

  const updateUser = await User.updateOne(
    { _id: id },
    { $pull: { friends: newFriend } }
  );

  res.status(201).json({ updateUser });
};
