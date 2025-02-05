import { Router } from "express";
import ProjectsController from "../controllers/ProjectsController.js";

const projectsRouter = Router();
const projectsCTRL = new ProjectsController();

projectsRouter.get("/", projectsCTRL.getAllProjects);
projectsRouter.get("/:id", projectsCTRL.getOneProject);

export default projectsRouter;
