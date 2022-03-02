// @ts-check

import { sendMail } from "providers/Mail";
import memoryCache from "memory-cache";
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  const { email = "", code = "" } = req.body;

  const {  cacheCode, cacheEmail } =
    JSON.parse(memoryCache.get(`codeNumberWithFormat`)) ?? {};

  console.log({ cacheCode, cacheEmail });

  if (cacheCode === code && cacheEmail === email) {
    return res.json({ success: true, cacheCode });
  }

  return res.status(400).json({ success: false, cacheCode });
}
