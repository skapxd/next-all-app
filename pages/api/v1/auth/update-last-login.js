// @ts-check

import { updateLastLoginAPI } from "components/LoginPage/api/updateLastLogin.api";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  return updateLastLoginAPI(req, res);
}
