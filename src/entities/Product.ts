import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Stock } from "./Stock";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    description: string

    @Column({type: 'float'})
    cust: number

    @Column({type: 'float'})
    amount: number

    @ManyToOne(() => Stock, stock => stock.products)
    @JoinColumn({name: "stock_id"})
    stock: Stock
}