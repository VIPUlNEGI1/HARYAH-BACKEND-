const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// Save Contact Form Data
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "✅ Contact form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "❌ Error saving contact form" });
  }
});

// Get Contact Form Data
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "❌ Error fetching contacts" });
  }
});

module.exports = router;
