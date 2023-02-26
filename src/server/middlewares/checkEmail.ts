import User from "../../database/models/User.js";

export const checkEmail = async (email = "") => {
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    throw new Error(`The ${email} email is already in use`);
  }
};
