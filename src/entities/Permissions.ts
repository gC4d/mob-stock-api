import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Group } from "./Group"

@Entity('permissions')
export class Permissions {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, user => user.userPermissons)
    @JoinColumn({ name: "user" })
    user : number

    @ManyToOne(() => Group, group => group.userPermissons)
    @JoinColumn({ name: "group" })
    group : number

    @Column({name: 'p_add_remove', type: 'integer', default: 1})
    permission_add_remove: number

    @Column({name: 'p_create', type: 'integer', default: 0})
    permission_create: number

    @Column({name: 'p_delete', type: 'integer', default: 0})
    permission_delete: number
}