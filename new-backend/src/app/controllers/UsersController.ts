import { getRepository, ObjectType, UseContainerOptions } from "typeorm";
import { hash } from "bcryptjs";

import Users from "../models/Users";

interface Request {
  name: string;
  email: string;
  password: string;
}

class UsersController {
  public async store({ name, email, password }: Request): Promise<Users> {
    const usersRepository = getRepository(Users);

    if (await usersRepository.findOne({ where: { email } })) {
      throw new Error("Email has already been taken!");
    }

    const user = usersRepository.create({
      name,
      email,
      password: await hash(password, 8),
    });

    await usersRepository.save(user);

    return user;
  }
}

export default UsersController;
