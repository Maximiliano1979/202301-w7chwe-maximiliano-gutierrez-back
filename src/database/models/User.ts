import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minLength: 8,
  },
  avatar: {
    type: Object,
  },
  email: {
    type: String,
  },
  aboutMe: {
    type: String,
  },
  friends: [{ type: Schema.Types.ObjectId, ref: "userSchema" }],
  foes: [{ type: Schema.Types.ObjectId, ref: "userSchema" }],
});

const User = model("User", userSchema, "users");

export default User;
