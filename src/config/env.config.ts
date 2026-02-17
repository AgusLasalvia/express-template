import { config } from "dotenv";

config()

export const SYSTEM = {
    PORT: (process.env.PORT || 3000) as number,

}

export const DATABASE = {
    DATABASE_URL: process.env.DATABASE_URL as string
        // DATABASE_NAME: process.env.DATABASE_NAME as string,
    // DATABASE_USER: process.env.DATABASE_USER as string,
    // DATABASE_PASSWORD: process.env.DATABASE_PASSWORD as string
}

export const JWT = {
    SECRET: process.env.JWT_SECRET
}
