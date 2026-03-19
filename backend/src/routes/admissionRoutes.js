import express from "express";
import { createAdmission, getAdmissions } from "../controllers/admissionController.js";

const router = express.Router();

// 👉 POST API (Save data)
router.post("/", createAdmission);

// 👉 GET API (View data)
router.get("/", getAdmissions);

export default router;