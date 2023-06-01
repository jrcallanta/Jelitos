import { Router, json } from "express";
const router = Router();
router.use(json());

// Import Project Validator Methods
import { onSearchProjects } from "../database/validators/projectValidator.js";

// Import Project Controller Methods
import {
    getProjects,
    getProjectById,
    getFeaturedProject,
    createProject,
    searchProjects,
    fillStaticProjectData,
} from "../database/controllers/projectController.js";

// Attach Methods to Router
router.get("/refresh-static-project-data/", fillStaticProjectData);
router.get("/", getProjects);
router.get("/featured", getFeaturedProject);
router.get("/:id", getProjectById);
router.post("/", createProject);
router.post("/query", onSearchProjects, searchProjects);

export default router;
