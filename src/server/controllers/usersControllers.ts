import bcryptjs from "bcrypt";
import { type NextFunction, type Request, type Response } from "express";
import { validationResult } from "express-validator";
import { CustomError } from "../../CustomError/CustomError.js";
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
  try {
    const { email, name, password, username } = req.body;
    const avatar = req.file?.originalname;

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await User.create({
      name,
      username,
      password: hashedPassword,
      email,
      avatar,
    });

    res.status(201).json({ newUser, message: "The user has been created" });
  } catch (error) {
    const customError = new CustomError(
      (error as Error).message,
      500,
      "Couldn't create the user"
    );

    next(customError);
  }
};

export const addUserFriend = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserStructure>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params;
    const newFriend = "63fa0f396f1692cbe7496c57";

    const updateUser = await User.updateOne(
      { _id: id },
      { $push: { friends: newFriend } }
    );

    res.status(201).json({ updateUser });
  } catch (error) {
    const customError = new CustomError(
      (error as Error).message,
      404,
      "Couldn't add new friend"
    );

    next(customError);
  }
};

export const deleteUserFriend = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserStructure>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params;
    const newFriend = "63fa0f396f1692cbe7496c57";

    const updateUser = await User.updateOne(
      { _id: id },
      { $pull: { friends: newFriend } }
    );

    res.status(201).json({ updateUser });
  } catch (error) {
    const customError = new CustomError(
      (error as Error).message,
      404,
      "Couldn't delete friend"
    );

    next(customError);
  }
};

export const addUserFoes = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserStructure>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params;
    const newFriend = "63fa0f396f1692cbe7496c57";

    const updateUser = await User.updateOne(
      { _id: id },
      { $push: { friends: newFriend } }
    );

    res.status(201).json({ updateUser });
  } catch (error) {
    const customError = new CustomError(
      (error as Error).message,
      404,
      "Couldn't add new foe"
    );

    next(customError);
  }
};

export const deleteUserFoes = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserStructure>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params;
    const newFriend = "63fa0f396f1692cbe7496c57";

    const updateUser = await User.updateOne(
      { _id: id },
      { $pull: { friends: newFriend } }
    );

    res.status(201).json({ updateUser });
  } catch (error) {
    const customError = new CustomError(
      (error as Error).message,
      404,
      "Couldn't delete foe"
    );

    next(customError);
  }
};
