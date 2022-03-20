// @ts-check

import { verifyCode } from "components/LoginPage/api/verify-code";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  return verifyCode(req, res);
}
