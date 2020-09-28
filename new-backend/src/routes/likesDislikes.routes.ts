import { getRepository } from "typeorm";
import { Router } from "express";
import Events from "../app/models/Events";

const eventsRouter = Router();

eventsRouter.post("/", async (req, res) => {
  try {
    const { likes, dislikes } = req.body;
    const { id } = req.params;
    const eventsRespository = getRepository(Events);

    const event = await eventsRespository.findOne({
      where: { id: id },
    });

    if (!event) {
      throw new Error("No event found!");
    }

    if (event) {
      event.likes = likes;
      event.dislikes = dislikes;
      await eventsRespository.save(event);
      return res.status(200).json(event);
    }
    return res.json({ Message: "Error" });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

export default eventsRouter;
