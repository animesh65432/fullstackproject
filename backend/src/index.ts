import Config from "./config";
import express from "express";
import cookieParser from "cookie-parser";
import ConnectToTheDataBase from "./db";
import { userRouter, ForGetPasswordRouter } from "./router";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/User", userRouter);
app.use("/ForgetPassword", ForGetPasswordRouter);
ConnectToTheDataBase()
  .then(() => {
    app.listen(Config.Port, () => {
      console.log("server start ", Config.Port);
    });
  })
  .catch((errors) => {
    console.log(errors);
  });
