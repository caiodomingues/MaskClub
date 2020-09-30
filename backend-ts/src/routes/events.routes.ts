import { Router } from "express";
import { getRepository } from "typeorm";

import EventsController from "../app/controllers/EventsController";
import events from "../app/models/Events";
import multer from "multer";
import crypto from "crypto";

const eventsRouter = Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, hash) => {
      const fileFinal = `${hash.toString("hex")}-${file.originalname}`;
      cb(null, fileFinal);
    });
  },
});
var upload = multer({ storage: storage });

eventsRouter.post("/", upload.single("image"), async (req, res) => {
  try {
    const { event_creator_id, name, address, description } = req.body;

    const eventsController = new EventsController();
    const event = await eventsController.store({
      event_creator_id,
      name,
      address,
      fileName: req.file.filename,
      filePath: `http://localhost:3333/uploads/${req.file.filename}`,
      description,
    });
    return res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

eventsRouter.get("/:id", async (req, res) => {
  try {
    const eventsRepository = getRepository(events);
    const { id } = req.params;
    const event = await eventsRepository.findOne(id);
    return res.json(`localhost:3333/uploads/${event?.filePath}`);
    // return res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

eventsRouter.get("/", async (req, res) => {
  try {
    const eventsRepository = getRepository(events);
    const event = await await eventsRepository.find();

    return res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

eventsRouter.delete("/:id", async (req, res) => {
  const usersRepository = getRepository(events);
  const { id } = req.params;
  const { auth_user } = req.body;

  const repo = await usersRepository.findOne(id);

  if (repo && repo.event_creator_id === auth_user) {
    await usersRepository.delete(id);
    return res.status(200).json(id);
  }

  return res.status(400).json({
    Error: "Error on delete!",
  });
});

export default eventsRouter;
