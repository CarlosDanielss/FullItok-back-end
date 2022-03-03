import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
class User {
    @PrimaryColumn()
    userId: string;
    @Column()
    userName: string;
    @Column({ select: false })
    userPassword: string;
    @Column()
    userEmail: string;
    @CreateDateColumn()
    userCreatedAt: Date;
    @UpdateDateColumn()
    userUpdatedAt: Date;

    constructor() {
        if (!this.userId) this.userId = uuidv4();
    }

}

export { User };