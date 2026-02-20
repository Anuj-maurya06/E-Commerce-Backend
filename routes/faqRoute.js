

import express from "express";
import { getAllFAQs } from "../controllers/botController.js";

const router = express.Router();

router.get("/", getAllFAQs);

export default router;
