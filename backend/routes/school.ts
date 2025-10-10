import { Router } from "express";
import { Template } from "../template.js";
import { ListSchools } from "../models/Academics.js";

const SchoolRouter = Router();

SchoolRouter.get("/list", async (req, res) => {
     const schools = await ListSchools();
     res.json(schools.map(({ id, name, max_class_lvl }) => ({ id, name, max_class_lvl })));
});

export default {
     router: SchoolRouter,
     path: "/school"
} satisfies Template;