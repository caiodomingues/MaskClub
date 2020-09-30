import { getRepository } from "typeorm";
import Events from "../models/Events";

interface Request {
  event_creator_id: string;
  name: string;
  address: string;
  description: string;
  fileName: string;
  filePath: string;
}

class EventsController {
  public async store({
    event_creator_id,
    name,
    address,
    fileName,
    filePath,
    description,
  }: Request): Promise<Events> {
    const eventsRespository = getRepository(Events);
    try {
      const events = eventsRespository.create({
        event_creator_id,
        name,
        address,
        fileName,
        filePath,
        description,
        likes: 0,
        dislikes: 0,
      });

      console.log(filePath);

      await eventsRespository.save(events);

      return events;
    } catch (error) {
      throw new Error("Error!");
    }
  }
}

export default EventsController;
