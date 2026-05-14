import nodemailer from "nodemailer";
import { ENV } from "./env.js";

export const sendEmail = async ({ name, email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: ENV.EMAIL_USER,
      pass: ENV.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio" <${ENV.EMAIL_USER}>`,
    replyTo: email,
    to: ENV.EMAIL_USER,
    subject: subject.trim(),
    text: message.trim(),
    html: `<div>
            <h3>New message from: ${email}</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
           </div>`,
  };

  await transporter.sendMail(mailOptions);
};
