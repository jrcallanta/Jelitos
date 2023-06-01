import { Router, json } from "express";

import { getAsset } from "../database/controllers/assetController.js";

/*** Initialize and Attach Middleware to Router ***/
const router = Router();
router.use(json());

// Attach Methods to Router
router.get("/:projectName/:fileName", getAsset);

export default router;
