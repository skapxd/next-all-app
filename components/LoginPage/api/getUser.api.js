// @ts-check

import { validateJWT } from "middleware/validateJWT";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export const getUserAPI = async (req, res) => {
  try {
    const { uuid } = validateJWT(req);

    return res.send({});
  } catch (error) {
    return res.status(400).send({
      error: error.message,
    });
  }
};
