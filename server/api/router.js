import { Router } from "express";
const api = Router();

/*** Import Routes ***/
// import { router as messageRoutes } from "./routes/messageRoute.js";
import AssetRoutes from "./routes/assetRoute.js";
import ProjectRoutes from "./routes/projectRoute.js";
import MessageRoutes from "./routes/messageRoute.js";

/*** Attach Routes ***/
// api.use("/message", messageRoutes);
api.use("/assets", AssetRoutes);
api.use("/projects", ProjectRoutes);
api.use("/messages", MessageRoutes);

export default api;
