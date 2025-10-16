import { Router } from "express";
import { Template } from "../template.js";
import { ListSchools } from "../models/Academics.js";
import {FromUser, TryLogin, User} from "../models/User.js";

const SchoolRouter = Router();

SchoolRouter.get("/list", async (req, res) => {
     const schools = await ListSchools();
     res.json(schools.map(({ id, name, max_class_lvl }) => ({ id, name, max_class_lvl })));
});

SchoolRouter.post("/grades", async (req, res) => {
     if(!req.body.username || !req.body.password) return res.status(400).json({error: "Username or password missing"});
     const client = await TryLogin(req.body.username, req.body.password);
     if(!client) return res.status(500);

     if(!(await FromUser("grades", client))) return res.status(500).json({error: "Failed to fetch grades", code: 500});
     try{
          const grades = FromUser("grades", client);
          res.status(200).json({
               data: grades,
          });
     }
     catch(err) {
          res.status(500).json({error: "Failed to fetch grades", code: 500});
     }
})

export default {
     router: SchoolRouter,
     path: "/school"
} satisfies Template;