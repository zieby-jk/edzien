import express from "express";
import { config } from "dotenv";
import { API } from "./backend/api.js";

config();

const instance = express();

instance.use("/api", API);
instance.use("/", express.static("./frontend"));

instance.listen(process.env.PORT, () => {
     console.log(`Server listening on port ${process.env.PORT}!`);
});
