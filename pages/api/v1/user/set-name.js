// @ts-check

import { setNameAPI } from "components/UserProfilePage/api/setName.api";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  return setNameAPI(req, res);
}
