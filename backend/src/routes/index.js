import express from "express";
import admissionRoutes from "./admissionRoutes.js";

const router = express.Router();

// 👉 MAIN CONNECT
router.use("/admissions", admissionRoutes);

export default router;