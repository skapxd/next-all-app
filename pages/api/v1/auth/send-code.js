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

  const cacheCode = codeWithoutFormat.join("");

  const saveCache = JSON.stringify({
    cacheCode,
    cacheEmail: email,
  });

  memoryCache.put(`codeNumberWithFormat`, saveCache, 5 * 60 * 1000);

  sendMail({
    email,
    subject: `Código de verificación de All App`,
    msjText: `Hola ${name}, ${cacheCode} es su código de verificación`,
  });

  return res.json({ success: true });
}
