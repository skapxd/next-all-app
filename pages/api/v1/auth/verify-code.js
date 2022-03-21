// @ts-check

import { verifyCodeAPI } from "components/LoginPage/api/verifyCode.api";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  return verifyCodeAPI(req, res);
}
