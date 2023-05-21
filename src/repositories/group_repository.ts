import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export const groupRepository = AppDataSource.getRepository(User)