import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { User } from "../../../../accounts/infra/typeorm/entities/User";

@Entity('products')
class Product {
    @PrimaryColumn()
    productId: string;
    @Column()
    productName: string;
    @Column()
    productDescription: string;
    @Column()
    productPrice: number;
    @Column()
    productQuantity: number;
    @Column()
    userId: string;
    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;
    @CreateDateColumn()
    productCreatedAt: Date;
    @UpdateDateColumn()
    productUpdatedAt: Date;

    constructor() {
        if (!this.productId) this.productId = uuidv4();
    }
}

export { Product };