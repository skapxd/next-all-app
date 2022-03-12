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

    const userRepository = await new UserRepository().existUser({
      sendVerifyCodeTo: to,
    });

    const token = await generateJWT(userRepository.data[0].uuid);
    if (userRepository.data.length !== 0)
      return res.json({ success: true, token });

    const newUser = await userDTO.create({
      sendVerifyCodeTo: to,
      name,
    });

    const token2 = await generateJWT(newUser.data[0].uuid);

    return res.json({ success: true, token: token2 });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}
