import { Request, Response } from "express";
import { stockRepository } from "../repositories/stock_repository";
import { Equal } from "typeorm";

export class StockController {

    async create(req: Request, res: Response) {
        const { description, category, user_id } = req.body

        if (!description) {
            return res.status(400).json({ message: "Name cannot be null" })
        } else if (category == null) {
            return res.status(400).json({ message: "Category cannot be null" })
        } else if (!user_id) {
            return res.status(400).json({ message: "User's id cannot be null" })
        } else {
            try {
                const newStock = stockRepository.create({ description: description, category: category, user: user_id })
                await stockRepository.save(newStock);

                return res.status(201).json(newStock);
            } catch (error) {
                console.log(error);
                return res.status(500).json({ message: "Internal Server Error" })
            }
        }

    }
    async findAllStocks(req: Request, res: Response) {
        const { user_id } = req.body

        if(!user_id){
            return res.status(400).json({ message: "User id cannot be null" })
        } else {
            try {
                const stock = await stockRepository.findBy({user: Equal(user_id)})
                console.log(stock);
                return res.status(200).json(stock)
            } catch (error) {
                console.log(error)
                return res.status(500).json({ message: "Internal Server Error" })
            }
        }
    }
}