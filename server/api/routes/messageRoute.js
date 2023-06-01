import { Router, json } from "express";
const router = Router();
router.use(json());

// Install Third Party Package
import { messageValidators } from "../tools/ValidatorCustoms.js";

// Import Message Controller Methods
import {
    getMessages,
    createMessage,
    deleteMessage,
} from "../database/controllers/messageController.js";

// Attach Methods to Router
router.get("/", getMessages);
router.post("/", messageValidators, createMessage);
router.delete("/:id", messageValidators, deleteMessage);

export default router;
