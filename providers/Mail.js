// @ts-check
import { createTransport } from "nodemailer";

/**
 * @param {Object} props
 * @param {string} props.email
 * @param {string} props.msjText
 * @param {string} [props.subject]
 */
export const sendMail = async (props) => {
  const { email, msjText, subject = "No responder a este email" } = props;

  const credentials = {
    user: process.env.USER_MAIL,
    pass: process.env.PASS_MAIL,
  };

  console.log({ credentials });

  let transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: credentials.user,
      pass: credentials.pass,
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
