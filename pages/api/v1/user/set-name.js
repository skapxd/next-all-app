// @ts-check

import { setName } from "components/UserProfilePage/api/setName";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  return setName(req, res);
}
