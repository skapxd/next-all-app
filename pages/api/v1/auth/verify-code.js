// @ts-check

import { sendMail } from "providers/Mail";
import memoryCache from "memory-cache";
import { generateJWT } from "helpers/generateJWT";
import { UserRepository } from "db/supabase/UserRepository";
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  try {
    const { to, name, code } = req.body;

    const userDTO = new UserRepository();

    const { cacheCode, cacheEmail } =
      JSON.parse(memoryCache.get(`codeNumberWithFormat`)) ?? {};

    if (cacheCode !== code || cacheEmail !== to) {
      return res.status(400).json({ success: false });
    }

    const token = await generateJWT(to);

    console.log({
      body: req.body,
    });

    await userDTO.create({
      sendVerifyCodeTo: to,
      name,
    });

    return res.json({ success: true, token });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}
