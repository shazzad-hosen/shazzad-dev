import express from "express";
import { contactController } from "../controllers/contact.controller.js";
import { contactLimiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

router.post("/", contactLimiter, contactController);

export default router;
