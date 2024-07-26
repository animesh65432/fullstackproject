import mongoose from "mongoose";
import { UsersSchemaTypes } from "../../types";

const UsersSchema = new mongoose.Schema<UsersSchemaTypes>({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    unique: true,
    required: true,
  },
  Password: {
    type: String,
    unique: true,
    required: true,
  },
});

const Users = mongoose.model("Users", UsersSchema);

export default Users;
