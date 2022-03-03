import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { createConnection } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const SEED_USERNAME = process.env.SEED_USERNAME || 'admin';
const SEED_PASSWORD = process.env.SEED_PASSWORD || 'admin';
const SEED_EMAIL = process.env.SEED_EMAIL || 'admin@admin.com';

const create = async () => {
    const connection = await createConnection();
    const userId = uuidv4();
    const password = await bcrypt.hash(SEED_PASSWORD, 10);

    await connection.query(
        `INSERT INTO users (userId, userName, userPassword, userEmail, userCreatedAt, userUpdatedAt) 
            VALUES ('${userId}', '${SEED_USERNAME}', '${password}', '${SEED_EMAIL}', NOW(), NOW())`
    );

    await connection.close();
};

create().then(() => console.log('Seed criado'));