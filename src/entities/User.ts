import { Stock } from "./Stock";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'text'})
    name: string

    @Column({type: 'text'})
    email: string

    @Column({type: 'text'})
    password: string
    
    @OneToMany(() => Stock, stock => stock.user)
    stocks: Stock[]
}