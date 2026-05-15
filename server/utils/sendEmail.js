import { Resend } from "resend";
import { ENV } from "./env.js";

const resend = new Resend(ENV.RESEND_API_KEY);

export const sendEmail = async ({ name, email, subject, message }) => {
  const response = await resend.emails.send({
    from: `Portfolio <${ENV.FROM_EMAIL}>`,
    to: ENV.TO_EMAIL,
    replyTo: email,
    subject: subject || `Portfolio Message from ${name}`,

    html: `
      <div style="font-family:sans-serif;">
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      </div>
    `,
  });

  return response;
};
