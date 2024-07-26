import Config from "./config";
import express from "express";
import ConnectToTheDataBase from "./db";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({
    Message: "Just Setup The Backend",
  });
});

ConnectToTheDataBase()
  .then(() => {
    app.listen(Config.Port, () => {
      console.log("server start ", Config.Port);
    });
  })
  .catch((errors) => {
    console.log(errors);
  });
