import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "180198",
    database: "test",
    synchronize: false,
    logging: true,
    entities: ["./src/entity/**{ts,js}"],
    migrations: ['./src/migration/**{ts,js}'],
})
