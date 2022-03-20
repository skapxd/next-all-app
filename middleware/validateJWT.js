// @ts-check

import jwt from "jsonwebtoken";

/**
 * @param {import("next").NextApiRequest} req
 * @return {import("helpers/generateJWT").InterfaceJWT}
 */
export const validateJWT = (req) => {
  const token = req.headers["x-token"]?.toString();

  if (!token) throw new Error("header x-token don't exist");

  const sign = process.env.JWT_SIGN;

  const isValid = jwt.verify(token, sign);

  if (!isValid) throw new Error("header x-token is not valid");

  const data = jwt.decode(token);

  return {
    uuid: data["uuid"],
  };
};
