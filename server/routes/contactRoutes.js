import express from "express";
import Contact from "../models/Contact.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();


// ⭐ PUBLIC — Contact Form Submit
router.post("/", async (req, res) => {
  try {
    const newMsg = new Contact(req.body);
    await newMsg.save();

    res.json({ message: "Message Saved Successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ⭐ ADMIN ONLY — Get All Messages
router.get("/", protect, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ⭐ ADMIN ONLY — Delete Message
router.delete("/:id", protect, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
