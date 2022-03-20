// @ts-check

import { saveImageProfile } from "components/UserProfilePage/api/saveImageProfile";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  return saveImageProfile(req, res);
}
