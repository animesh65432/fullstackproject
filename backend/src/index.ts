import Config from "./config";
import express from "express";
import cookieParser from "cookie-parser";
import ConnectToTheDataBase from "./db";
import {
  userRouter,
  ForGetPasswordRouter,
  TodoRouter,
  InprogressRouter,
  FinishedRouter,
  UnderReviewRouter,
} from "./router";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/User", userRouter);
app.use("/ForgetPassword", ForGetPasswordRouter);
app.use("/underreviews", UnderReviewRouter);
app.use("/Finsihed", FinishedRouter);
app.use("/Todo", TodoRouter);
app.use("/inprogress", InprogressRouter);
ConnectToTheDataBase()
  .then(() => {
    app.listen(Config.Port, () => {
      console.log("server start ", Config.Port);
    });
  })
  .catch((errors) => {
    console.log(errors);
  });
