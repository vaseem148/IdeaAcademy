const Admission = require("../models/Admission");

// CREATE
const createAdmission = async (req, res) => {
  try {
    const data = await Admission.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createAdmission };