// @ts-check
import { setInfoAPI } from "components/UserProfilePage/api/setInfo.api";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  return await setInfoAPI(req, res);
}
