import express from "express";
import { sendEmail } from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await sendEmail({ name, email, subject, message });

    res.status(200).json({ message: "Message sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
