import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import Project from "../models/Project.js";
import Contact from "../models/Contact.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

/*
==================================================
ADMIN LOGIN
==================================================
*/
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate Input
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password required" });
    }

    // Find Admin
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ msg: "Admin not found" });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (err) {
    console.error("Admin Login Error:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});


/*
==================================================
ADMIN DASHBOARD STATS
==================================================
*/
router.get("/stats", protect, async (req, res) => {
  try {

    const projectCount = await Project.countDocuments();
    const messageCount = await Contact.countDocuments();

    res.status(200).json({
      projects: projectCount,
      messages: messageCount
    });

  } catch (err) {
    console.error("Stats Error:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});


export default router;
