// @ts-check
import { env } from "env";
import jwt from "jsonwebtoken";

/**
 * @typedef {Object} InterfaceJWT
 * @prop {string} uuid
 */

/**
 * @param {InterfaceJWT} payload
 * @return {Promise<string>}
 */
export const generateJWT = (payload) => {
  return new Promise((res, rej) => {
    jwt.sign(
      payload,
      env.sign,
      {
        expiresIn: "100y",
      },
      (err, token) => {
        if (err) return rej(err.message);

        return res(token);
      }
    );
  });
};
