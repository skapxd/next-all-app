// @ts-check

import { sendMail } from "providers/Mail";
import memoryCache from "memory-cache";
import { UserRepository } from "db/supabase/UserRepository";
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  const { to, name = "" } = req.body;

  const numberRandom = (Math.random() * 999999999).toFixed() + "";

  const codeWithoutFormat = numberRandom.substring(0, 7).split("");

  codeWithoutFormat[3] = " ";

  const cacheCode = codeWithoutFormat.join("");

  const saveCache = JSON.stringify({
    cacheCode,
    cacheEmail: to,
  });

  memoryCache.put(
    `codeNumberWithFormat`,
    saveCache,
    5 /**5 min*/ * 60 /**1 min*/ * 1000 /**1 seg*/
  );

  try {
    const user = await new UserRepository().existUser({
      sendVerifyCodeTo: to,
    });

    const _name = user.resp.data[0]?.name ?? name;

    sendMail({
      email: to,
      subject: `Código de verificación de All App`,
      msjText: `Hola ${_name}, ${cacheCode} es su código de verificación`,
    });

    return res.json({ success: true, name: _name });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}
