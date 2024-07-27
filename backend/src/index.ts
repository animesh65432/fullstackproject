import Config from "./config";
import express from "express";
import ConnectToTheDataBase from "./db";
import { userRouter } from "./router";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/User", userRouter);
ConnectToTheDataBase()
  .then(() => {
    app.listen(Config.Port, () => {
      console.log("server start ", Config.Port);
    });
  })
  .catch((errors) => {
    console.log(errors);
  });
