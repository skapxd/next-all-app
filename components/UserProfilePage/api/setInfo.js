// @ts-check

import { validateJWT } from "middleware/validateJWT";
import { UserRepository } from "providers/supabase/db/UserRepository/UserRepository";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export const setInfo = async (req, res) => {
  try {
    const { uuid } = validateJWT(req);
    const { info } = req.body;
    new UserRepository().setInfo({
      uuid,
      value: info,
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
