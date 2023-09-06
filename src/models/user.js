import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "E-mail Required"],
  },
  password: {
    type: String,
    required: [true, "Password Required"],
  },
  about: String,
  profileUrl: String,
});
export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
