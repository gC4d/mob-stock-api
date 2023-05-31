import { Column, Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StockAudit } from "./StockAudit";
import { UserGroup } from "./UserGroup";
import { Permissions } from "./Permissions";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id : number

    @Column({ type: 'text' })
    name : string

    @Column({ type: 'text' })
    email : string

    @Column({ type: 'text' })
    password : string

    @OneToMany(() => StockAudit, stockAudit => stockAudit.user)
    stockAudit : StockAudit[]

    @OneToMany(() => UserGroup, userGroup => userGroup.user)
    userGroup : UserGroup[]

    @OneToMany(() => Permissions, permissions => permissions.user)
    userPermissons : Permissions[]
}