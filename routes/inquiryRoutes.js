const express = require("express");
const Inquiry = require("../models/Inquiry");

const router = express.Router();

// Save Inquiry Form Data
router.post("/", async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: "✅ Inquiry submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "❌ Error saving inquiry" });
  }
});

// Get Inquiry Data
router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: "❌ Error fetching inquiries" });
  }
});

module.exports = router;
