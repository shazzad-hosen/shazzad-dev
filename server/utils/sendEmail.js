import { Resend } from "resend";

console.log("RESEND KEY:", process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ name, email, subject, message }) => {
  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "mdshazzadhosenzisan@gmail.com",
    subject: subject || `Message from ${name}`,
    replyTo: email,

    html: `
      <div style="font-family:sans-serif;line-height:1.6">
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>

        <div style="padding:12px;background:#f4f4f4;border-radius:8px">
          ${message}
        </div>
      </div>
    `,
  });

  return response;
};
