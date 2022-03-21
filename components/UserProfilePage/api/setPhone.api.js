// @ts-check

import { validateJWT } from "middleware/validateJWT";
import { UserRepository } from "providers/supabase/db/UserRepository/UserRepository";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export const setPhoneAPI = async (req, res) => {
  try {
    const { uuid } = validateJWT(req);
    const { phone } = req.body;

    new UserRepository().setPhone({
      uuid,
      value: phone,
    });

    return res.send({ success: true });
  } catch (error) {
    return res.status(400).send({
      error: error.message,
    });
  }
};
