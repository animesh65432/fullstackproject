import { ForGetPasswordTypes } from "../../types";
import mongoose from "mongoose";

const FogetPasswordSchema = new mongoose.Schema<ForGetPasswordTypes>({
  active: {
    type: Boolean,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
});

const ForgetPassword = mongoose.model("ForgetPassword", FogetPasswordSchema);

export default ForgetPassword;
