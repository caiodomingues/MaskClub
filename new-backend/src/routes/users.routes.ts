import { Router } from "express";
import { getRepository } from "typeorm";

import UsersController from "../app/controllers/UsersController";
import Users from "../app/models/Users";

const usersRouter = Router();

usersRouter.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const usersController = new UsersController();

    const user = await usersController.store({
      name,
      email,
      password,
    });

    user.password = "";

    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

usersRouter.get("/", async (req, res) => {
  const usersRepository = getRepository(Users);
  const user = await usersRepository.find();
  return res.status(200).json(user);
});

usersRouter.get("/:id", async (req, res) => {
  const usersRepository = getRepository(Users);
  const { id } = req.params;
  const user = await usersRepository.findOne(id);
  return res.status(200).json(user);
});

usersRouter.delete("/:id", async (req, res) => {
  try {
    const usersRepository = getRepository(Users);
    const { id } = req.params;
    await usersRepository.delete(id);
    return res.status(200).send();
  } catch (error) {
    return res.status(400).json({ Error: error });
  }
});

export default usersRouter;
