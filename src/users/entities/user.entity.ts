import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    age: number;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    address: string;

    @Column({ nullable: true })
    password: string;
}
