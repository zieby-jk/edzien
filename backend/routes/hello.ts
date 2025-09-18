import { Router } from "express";
import { Template } from "../template.js";

const Hello = Router();

Hello.get("/", (req, res) => {
     res.json({ message: "Hi" });
});

export default {
     router: Hello,
     path: "/hello"
} satisfies Template;