import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Group } from "./Group";
import { StockAudit } from "./StockAudit";

@Entity('stocks')
export class Stock {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ type: 'text' })
    description: string
    @Column({ type: 'integer' })
    category: number
    @Column({ type: 'real', nullable: true })
    amount: number

    @OneToMany(() => Product, product => product.stock)
    products: Product[]

    @OneToMany(() => StockAudit, stockAudit => stockAudit.stock)
    stockAudit: StockAudit[]

    @ManyToOne(() => Group, group => group.stocks)
    @JoinColumn({ name: "group" })
    group: Group


}