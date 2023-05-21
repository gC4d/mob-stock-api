import { Group } from "./Group";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { StockAudit } from "./StockAudit";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text' })
    email: string

    @Column({ type: 'text' })
    password: string

    @Column({name: 'p_add_remove', type: 'integer', default: 1})
    permission_add_remove: number

    @Column({name: 'p_create', type: 'integer', default: 0})
    permission_create: number

    @Column({name: 'p_delete', type: 'integer', default: 0})
    permission_delete: number

    @OneToMany(() => StockAudit, stockAudit => stockAudit.user_id)
    stockAudit: StockAudit[]

    @OneToOne(() => Group)  
    @JoinColumn({name : 'group'})
    groups: Group
}