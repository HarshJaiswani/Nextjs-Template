import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: String,
    message: [String],
    work: String,
    topic: String,
    is_subscribed: {
      type: Boolean,
      required: true,
      default: true,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

mongoose.models = {};
const Users = mongoose.model("Users", UserSchema);

export default Users;
