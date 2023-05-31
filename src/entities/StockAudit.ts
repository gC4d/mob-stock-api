import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Stock } from "./Stock";
import { User } from "./User";
import { Group } from "./Group";

@Entity('stock_audit')
export class StockAudit {
    @PrimaryGeneratedColumn()
    id : number
    @Column({type: 'text'})
    type : string
    @Column({type: 'text'})
    message : string
    @Column({type: 'integer'})
    amount : number

    @ManyToOne(() => Product, product => product.stockAudit)
    @JoinColumn({name: "product"})
    product : number

    @ManyToOne(() => Stock, stock => stock.stockAudit)
    @JoinColumn({name: "stock"})
    stock : number

    @ManyToOne(() => Group, group => group.stockAudit)
    @JoinColumn({name: "group"})
    group : number
    
    @ManyToOne(() => User, user => user.stockAudit)
    @JoinColumn({name: "user"})
    user : number

}