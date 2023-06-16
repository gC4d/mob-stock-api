import { Request, Response } from "express";
import { stockRepository } from "../repositories/stock_repository";
import { Equal } from "typeorm";

export class StockController {

    async create(req: Request, res: Response) {
        const { description, category, group_id } = req.body

        if (!description) {
            return res.status(400).json({ message: "Name cannot be null" })
        } else if (category == null) {
            return res.status(400).json({ message: "Category cannot be null" })
        } else if (!group_id) {
            return res.status(400).json({ message: "User id cannot be null" })
        } else {
            try {
                const newStock = stockRepository.create({ description: description, category: category, group: group_id })
                await stockRepository.save(newStock);

                return res.status(201).json(newStock);
            } catch (error) {
                console.log(error);
                return res.status(500).json({ message: "Internal Server Error" })
            }
        }

    }
    async findAllStocks(req: Request, res: Response) {
        const { group_id } = req.body

        if(!group_id){
            return res.status(400).json({ message: "User id cannot be null" })
        } else {
            try {
                const stock = await stockRepository.findBy({group: Equal(group_id)})
                console.log(stock);
                return res.status(200).json(stock)
            } catch (error) {
                console.log(error)
                return res.status(500).json({ message: "Internal Server Error" })
            }
        }
    }
}