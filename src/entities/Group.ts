import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Stock } from "./Stock";
import { User } from "./User";
import { StockAudit } from "./StockAudit";
import { UserGroup } from "./UserGroup";
import { Permissions } from "./Permissions";

@Entity('group')
export class Group {
    @PrimaryGeneratedColumn()
    id : number
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

    @OneToMany(() => StockAudit, stockAudit => stockAudit.group)
    stockAudit: StockAudit[]

    @OneToMany(() => UserGroup, userGroup => userGroup.group)
    userGroup : UserGroup[]

    @OneToMany(() => Permissions, permissions => permissions.group)
    userPermissons : Permissions[]
}