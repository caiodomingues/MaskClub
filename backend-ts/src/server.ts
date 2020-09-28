import express from "express";
import routes from "./routes";
const cors = require("cors");
const path = require("path");

import "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/events", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333, () => {
  console.log("Server OK...");
});
