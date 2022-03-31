// @ts-check
import { env } from "env";
import { createTransport } from "nodemailer";

/**
 * @param {Object} props
 * @param {string} props.email
 * @param {string} props.message
 * @param {string} [props.subject]
 */
export const sendMail = async (props) => {
  const { email, message, subject = "No responder a este email" } = props;

  let transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: env.user_mail,
      pass: env.pass_mail,
    },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: "automail.noresponder@gmail.com",
    to: email,
    html: message,
    subject,
  });
};
