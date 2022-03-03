// @ts-check

import { sendMail } from "providers/Mail";
import memoryCache from "memory-cache";
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  const { email, name = "" } = req.body;

  const numberRandom = (Math.random() * 10000000).toFixed();

  const codeWithoutFormat = ("" + numberRandom).split("");

  codeWithoutFormat[3] = " ";

  const credentials = {
    user: "automail.noresponder@gmail.com" ?? process.env.USER_MAIL,
    pass: "xnkgnbhpibdjxjlu" ?? process.env.PASS_MAIL,
  };

  console.log({ credentials, body: req.body });

  const cacheCode = codeWithoutFormat.join("");

  const saveCache = JSON.stringify({
    cacheCode,
    cacheEmail: email,
  });

  memoryCache.put(`codeNumberWithFormat`, saveCache, 5 * 60 * 1000);

  try {
    await sendMail({
      email,
      subject: `Código de verificación de All App`,
      msjText: `Hola ${name}, ${cacheCode} es su código de verificación`,
    });

    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, error });
  }
}
