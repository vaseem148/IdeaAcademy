import Admission from "../models/Admission.js";

// CREATE
export const createAdmission = async (req, res) => {
  try {
    console.log("📥 ADMISSION DATA RECEIVED:", req.body);
    const data = await Admission.create(req.body);
    console.log("✅ ADMISSION SAVED:", data);
    res.status(201).json(data);
  } catch (error) {
    console.error("❌ ADMISSION ERROR:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// READ (Get all admissions)
export const getAdmissions = async (req, res) => {
  try {
    const data = await Admission.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    console.error("❌ FETCH ERROR:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
