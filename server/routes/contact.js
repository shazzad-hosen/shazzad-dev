import express from "express";
import { sendEmail } from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required " });
    }

    await sendEmail({
      name,
      email,
      subject,
      message,
    });

    res.status(200).json({ message: "Message sent" });
  } catch (error) {
    console.error("CONTACT ERROR:", error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

export default router;
