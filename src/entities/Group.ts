import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Stock } from "./Stock";
import { User } from "./User";
import { StockAudit } from "./StockAudit";

@Entity('group')
export class Group {
    @PrimaryGeneratedColumn()
    id : number
    @ManyToOne(() => User, user => user.groups)
    @JoinColumn({name: "adm_id"})
    adm_id : number
    @Column({type: 'text'})
    token : string
    @Column({type: 'text'})
    description : string 
    @Column({type: 'text'})
    key : string
    @Column({type: 'text'})
    password : string

    @OneToMany(() => Stock, stock => stock.group)
    stocks: Stock[]

    @OneToMany(() => StockAudit, stockAudit => stockAudit.group_id)
    stockAudit: StockAudit[]
}