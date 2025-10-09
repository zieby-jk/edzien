import express from "express";
import { config } from "dotenv";
import { API } from "./backend/api.js";
import mysql, { ConnectionOptions, RowDataPacket } from "mysql2";
import { database } from "./db.js";

config();

const access: ConnectionOptions = {
     user: process.env.DB_USER,
     database: process.env.DB_NAME,
     password: process.env.DB_PASSWORD
};
const connection = mysql.createConnection(access);
database.connection = connection;
const instance = express();

instance.use("/api", API);

interface DatabaseApi {
     Database: string
}

instance.listen(process.env.PORT, () => {
     console.log(`Server listening on port ${process.env.PORT}!`);
     database.connection?.query<RowDataPacket[]>("SHOW DATABASES;", (err, result) => {
          const databases: DatabaseApi[] = result as DatabaseApi[];
          console.log(databases[0].Database);
     });
});
