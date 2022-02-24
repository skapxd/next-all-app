// @ts-check
import Faker from "faker";
import { generateJWT } from "helpers/generateJWT";
import validateJWT from "middleware/validateJWT";
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  const { email, pass } = req.body;

  // const isValidJWT = validateJWT(req, res);
  // if (!isValidJWT) return res.json({ success: false, message: "not token" });

  if (email && pass) {
    const token = await generateJWT(email);
    return res.status(200).json({ success: true, token });
  }

  if (email) {
    return res
      .status(200)
      .json({ success: true, name: Faker.name.firstName() });
  }

  return res.status(404).json({ success: false });
}
