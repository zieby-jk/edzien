import express from "express";
import { config } from "dotenv";
import { API } from "./backend/api.js";
import mysql, { ConnectionOptions } from "mysql2";
import { database } from "./db.js";

config();

const access: ConnectionOptions = {
     user: process.env.DB_USER,
     database: process.env.DB_NAME,
     password: process.env.DB_PASSWORD,
     host: process.env.DB_HOST
};
const connection = mysql.createConnection(access);
database.connection = connection;
const instance = express();

instance.use("/api", API);
instance.use("/", express.static("./frontend"));

instance.listen(process.env.PORT, () => {
     console.log(`Server listening on port ${process.env.PORT}!`);
});
