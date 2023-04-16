import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from './User'
import { Product } from "./Product";

@Entity('stocks')
export class Stock {
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'text'})
    description: string
    @Column({type: 'integer'})
    category: number
    @Column({type: 'real'})
    amount: number
    @Column({type: 'real'})
    value: number

    @OneToMany(() => Product, product => product.stock)
    products: Product[]

    @ManyToOne(() => User, user => user.stocks)
    @JoinColumn({name: "user_id"})
    user: User


}