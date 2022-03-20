// @ts-check
import { setInfo } from "components/UserProfilePage/api/setInfo";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  return await setInfo(req, res);
}
