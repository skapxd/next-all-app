// @ts-check

import { setPhoneAPI } from "components/UserProfilePage/api/setPhone.api";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  return await setPhoneAPI(req, res);
}
