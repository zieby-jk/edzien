import { Router } from "express";
import fs from "fs";
import { Template } from "./template.js";
import Hello from "./routes/hello.js"
let routes: Template[] = [];
routes.push(Hello);

export const API = Router();

routes.forEach(template => {
    API.use(template.path, template.router);
});