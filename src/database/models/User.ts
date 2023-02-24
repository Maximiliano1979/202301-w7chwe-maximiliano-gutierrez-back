import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: Object,
  },
  email: {
    type: String,
  },
  aboutme: {
    type: String,
  },
  relationships: {
    type: Object,
    friends: { type: Array },
    foes: { type: Array },
  },
});

const User = model("User", userSchema, "users");

export default User;
