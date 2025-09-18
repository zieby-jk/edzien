import { Router } from "express";
import { Template } from "./template.js";
import Hello from "./routes/hello.js"
const routes: Template[] = [];
routes.push(Hello);

export const API = Router();

routes.forEach(template => {
    API.use(template.path, template.router);
});