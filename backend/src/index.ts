import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({
    Message: "Just Setup The Backend",
  });
});

app.listen(process.env.PORT, () => {
  console.log("sever start at the ", process.env.PORT);
});
