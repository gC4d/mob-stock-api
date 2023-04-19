import { Request, Response } from "express";
import { userRepository } from "../repositories/user_repository";

export class UserController {

    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Name cannot be null" })
        } else if (!email) {
            return res.status(400).json({ message: "Email cannot be null" })
        } else if (!password) {
            return res.status(400).json({ message: "Password cannot be null" })
        } else {
            try {
                const newUser = userRepository.create({ name, email, password })
                await userRepository.save(newUser);

                return res.status(201).json(newUser);
            } catch (error) {
                console.log(error);
                return res.status(500).json({ message: "Internal Server Error" })
            }
        }
    }

    async auth(req: Request, res: Response) {
        const { email, password } = req.body

        if (!email) {
            return res.status(400).json({ message: "Email cannot be null" })
        } else if (!password) {
            return res.status(400).json({ message: "Password cannot be null" })
        } else {
            try {
                const user = await userRepository.findOneBy({email, password})
                return res.status(200).json(user)
            } catch (error) {
                console.log(error)
                return res.status(500).json({ message: "Internal Server Error" })
            }
        }
    }

}