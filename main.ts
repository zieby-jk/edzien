import express from "express";
import { config } from "dotenv";

config();

const server = express().listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}!`);
});