import mongoose from "mongoose";
import { Taskwordtypes } from "../../types";

const InprogressSchema = new mongoose.Schema<Taskwordtypes>({
  title: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  Priority: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },
  Deadline: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

const Inprogress = mongoose.model("Inprogress", InprogressSchema);

export default Inprogress;
