// @ts-check

import { updateLastLogin } from "components/LoginPage/api/update-last-login";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  return updateLastLogin(req, res);
}
