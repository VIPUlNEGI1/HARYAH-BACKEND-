const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./config/db"); // Import the MongoDB connection

const app = express();
const PORT = process.env.PORT || 5000;


// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const contactRoutes = require("./routes/contactRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");

app.use("/api/contact", contactRoutes);
app.use("/api/inquiry", inquiryRoutes);

app.get("/", (req, res) => res.send("🚀 Backend is Running!"));

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

module.exports = app;
