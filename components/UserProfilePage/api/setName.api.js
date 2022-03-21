// @ts-check

import { validateJWT } from "middleware/validateJWT";
import { UserRepository } from "providers/supabase/db/UserRepository/UserRepository";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export const setNameAPI = async (req, res) => {
  try {
    const { uuid } = validateJWT(req);
    const { name } = req.body;

    if (!name) throw new Error("*name* is empty");

    new UserRepository().setName({
      uuid,
      value: name,
    });

    return res.send({
      success: true,
    });
  } catch (error) {
    return res.status(400).send({
      error: error.message,
    });
  }
};
