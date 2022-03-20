// @ts-check

import { getCode } from "components/LoginPage/api/get-code";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  return getCode(req, res);
}
