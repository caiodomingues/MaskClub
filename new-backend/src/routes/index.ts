import { Router } from "express";
import multer from "multer";
const uploadConfig = require("../app/config/upload");

import usersRouter from "./users.routes";
import eventsRouter from "./events.routes";
import sessionRouter from "./session.routes";
import likeDislikeRouter from "./likesDislikes.routes";

const routes = Router();
const upload = multer(uploadConfig);

routes.use("/users", usersRouter);
routes.use("/events", upload.single("image"), eventsRouter);
routes.use("/auth/login", sessionRouter);
routes.use("/event/:id", likeDislikeRouter);

export default routes;
