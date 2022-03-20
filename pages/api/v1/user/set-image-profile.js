// @ts-check

import { setImageProfile } from "components/UserProfilePage/api/setImageProfile";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  return setImageProfile(req, res);
}
