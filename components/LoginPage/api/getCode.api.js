// @ts-check

import { sendMail } from "providers/messaging/Mail";
import memoryCache from "memory-cache";
import { env } from "env";
import { UserRepository } from "providers/supabase/db/UserRepository/UserRepository";
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export async function getCodeAPI(req, res) {
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
    const user = await new UserRepository().getUser({
      sendVerifyCodeTo: to,
    });

    const _name = user.data[0]?.name ?? name;

    const baseUrl = env.isProduction
      ? "https://next-all-app.vercel.app"
      : "http://192.168.1.65:3000";

    const codeToUrl = cacheCode.replace(" ", "_");
    const params = `/login?step=validateCode&email=${to}&code=${codeToUrl}&name=${_name}`;
    const link = `<a href="${baseUrl}/${params}" >enlace</a>`;

    const message = `Hola ${_name}, ${cacheCode} pega este código de verificación ó accede a este ${link} `;

    await sendMail({
      email: to,
      message,
      subject: `Código de verificación de All App`,
    });

    return res.json({
      success: true,
      name: _name,
      code: env.isProduction ? null : cacheCode,
      message: env.isProduction ? null : message,
    });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}
