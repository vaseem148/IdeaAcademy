const express = require("express");
const router = express.Router();

const { createAdmission } = require("../controllers/admissionController");

// 👉 POST API
router.post("/", createAdmission);

module.exports = router;