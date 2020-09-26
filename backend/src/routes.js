const { Router } = require("express");
const multer = require("multer");
const EventController = require("./controllers/EventController");
const AuthController = require("./controllers/AuthController");
const uploadConfig = require("./config/upload");
const routes = new Router();

const auth = require("./middlewares/auth");
const upload = multer(uploadConfig);

routes.post("/auth/register", AuthController.register);
routes.post("/auth/login", AuthController.authenticate);

routes.post("/events", auth, upload.single("image"), EventController.store);
routes.get("/events", auth, EventController.index);
routes.delete("/event/:id", auth, EventController.destroy);
routes.get("/event/:id", auth, EventController.show);

routes.post("/event/:id", auth, EventController.likeDislike);

module.exports = routes;
