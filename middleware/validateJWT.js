// @ts-check

import jwt from "jsonwebtoken";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default function validateJWT(req, res) {
  const token = req.headers["x-token"];

  if (!token) {
    return false;
  }

  const sign = process.env.JWT_SIGN;

  const isValid = jwt.verify(token, sign);

  // if (condition) {

  // }

  return true;
}
