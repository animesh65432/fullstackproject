import mongoose from "mongoose";
import { Taskwordtypes } from "../../types";

const FinishedSchema = new mongoose.Schema<Taskwordtypes>({
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

const Finished = mongoose.model("Finished", FinishedSchema);

export default Finished;
