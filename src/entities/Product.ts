import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Stock } from "./Stock";
import { StockAudit } from "./StockAudit";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    description: string

    @Column({type: 'float'})
    cust: number

    @Column({type: 'float'})
    value : number

    @Column({type: 'float'})
    amount: number

    @OneToMany(() => StockAudit, stockAudit => stockAudit.product)
    stockAudit: StockAudit[]

    @ManyToOne(() => Stock, stock => stock.products)
    @JoinColumn({name: "stock"})
    stock: Stock
}