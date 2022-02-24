// @ts-check
import jwt from "jsonwebtoken";

/**
 * @param {string} uid
 */
export const generateJWT = (uid) => {
  return new Promise((res, rej) => {
    const payload = { uid };
    const sign = process.env.JWT_SIGN;

    jwt.sign(
      payload,
      sign,
      {
        expiresIn: "4h",
      },
      (err, token) => {
        if (err) {
          console.log({ err });
          rej("No se pudo generar el token ");
        }

        res(token);
      }
    );
  });
};
