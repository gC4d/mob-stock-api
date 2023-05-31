import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Group } from "./Group";

@Entity("user_group")
export class UserGroup {
    @PrimaryGeneratedColumn()
    id : number

    @ManyToOne(() => User, user => user.userGroup)
    @JoinColumn({ name: "user" })
    user : number

    @ManyToOne(() => Group, group => group.userGroup)
    @JoinColumn({ name: "group" })
    group : number

    @Column({name: 'is_adm'})
    adm : number

    @Column({name: 'access'})
    access : number
}