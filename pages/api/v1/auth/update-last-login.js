// @ts-check
import Faker from "faker";
import { generateJWT } from "helpers/generateJWT";
import validateJWT from "middleware/validateJWT";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  try {
    return res.send("hola");
  } catch (error) {
    return res.status(400).send({
      error: error.message,
    });
  }
}
