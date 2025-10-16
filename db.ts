import { Connection } from "mysql2";

type Database = {
    connection: Connection | null
}

export const database: Database = {
     connection: null
};