import { Router } from "express";
import { getRepository } from "typeorm";

import EventsController from "../app/controllers/EventsController";
import events from "../app/models/Events";

const eventsRouter = Router();

eventsRouter.post("/", async (req, res) => {
  try {
    const { event_creator_id, name, address, description } = req.body;
    const file = req.files ? [0] : req.file;
    const eventsController = new EventsController();
    const event = await eventsController.store({
      event_creator_id,
      name,
      address,
      fileName: file ? file.originalname : "NULL",
      filePath: file ? file.key : "NULL",
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

    return res.status(200).json(event);
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
