import express, { Application } from "express";
import dotenve from "dotenv";
import cors from "cors";

dotenve.config();
import router from "./modules/user/user.route";

const app: Application = express();

app.use(cors());
app.use("/", router);

app.listen(3000, () => {
  console.log("server is listening port 3000");
});
