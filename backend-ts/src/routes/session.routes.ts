import Users from "../app/models/Users";
import { Router } from "express";
import { getRepository } from "typeorm";

const bcrypt = require("bcryptjs");

const sessionRouter = Router();

sessionRouter.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const usersRepository = getRepository(Users);

    const user = await usersRepository.findOne({
      where: { email },
    });
    if (!user) {
      return res.status(400).json({ Error: "No user found with this email." });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: "Invalid Password" });
    }

    return res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default sessionRouter;
