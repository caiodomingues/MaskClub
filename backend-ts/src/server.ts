import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";

import "./database";

const app = express();

app.use(routes);
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   "/events/photos",
//   express.static(path.resolve(__dirname, "..", "uploads"))
// );
app.use(express.static('public'));

app.listen(3333, () => {
  console.log("Server OK...");
});
