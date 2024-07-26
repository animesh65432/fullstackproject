import mongoose from "mongoose";
import Config from "../config";

const ConnectToTheDataBase = async () => {
  try {
    let response = await mongoose.connect(Config.databaseurl as string);
    return response;
  } catch (error) {
    return error;
  }
};
export default ConnectToTheDataBase;
