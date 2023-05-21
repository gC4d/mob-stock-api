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

    @ManyToOne(() => Product, product => product.id)
    @JoinColumn({name: "product_id"})
    product_id : number

    @ManyToOne(() => Stock, stock => stock.id)
    @JoinColumn({name: "stock_id"})
    stock_id : number

    @ManyToOne(() => Group, group => group.id)
    @JoinColumn({name: "group_id"})
    group_id : number
    
    @ManyToOne(() => User, user => user.id)
    @JoinColumn({name: "user_id"})
    user_id : number

}