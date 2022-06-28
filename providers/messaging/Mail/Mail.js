
// @ts-check
import { env } from "env";
import { createTransport } from "nodemailer";

/**
 * @param {Object} props
 * @param {string} props.email
 * @param {string} props.msjText
 * @param {string} [props.subject]
 */
export const sendMail = async (props) => {
  const { email, msjText, subject = "No responder a este email" } = props;

  let transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: env.user_mail,
      pass: env.pass_mail,
    },
  });

  try {
    const verify = await transporter.verify();
    console.log({ transporterVerify: verify });
  } catch (error) {
    console.log({ transporterVerify: error });
  }

  await transporter.sendMail({
    from: "automail.noresponder@gmail.com",
    to: email,
    // html: options.msjHtml,
    text: msjText,
    subject,
  });
};
