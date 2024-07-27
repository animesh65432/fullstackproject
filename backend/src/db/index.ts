import mongoose from "mongoose";
import Config from "../config";

const ConnectToTheDataBase = async () => {
  try {
    let response = await mongoose.connect(Config.databaseurl as string);
    console.log("Connected to MongoDB");
    return response;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
export default ConnectToTheDataBase;
