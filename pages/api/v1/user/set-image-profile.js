// @ts-check

import { setImageProfileAPI } from "components/UserProfilePage/api/setImageProfile.api";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  return setImageProfileAPI(req, res);
}
