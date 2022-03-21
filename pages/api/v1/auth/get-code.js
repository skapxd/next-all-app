// @ts-check

import { getCodeAPI } from "components/LoginPage/api/getCode.api";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  return getCodeAPI(req, res);
}
