const express = require("express");
const router = express.Router();

const admissionRoutes = require("./admissionRoutes");

// 👉 MAIN CONNECT
router.use("/admissions", admissionRoutes);

module.exports = router;