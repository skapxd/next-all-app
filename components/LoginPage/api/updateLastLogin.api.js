// @ts-check
import { validateJWT } from "middleware/validateJWT";
import { UserRepository } from "providers/supabase/db/UserRepository/UserRepository";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export async function updateLastLoginAPI(req, res) {
  try {
    // step 1: en caso de que el req no contenga un header
    // x-token lanzara una excepción
    const { uuid } = validateJWT(req);

    const userRepository = new UserRepository();

    userRepository.updateLastLogin({ uuid });

    return res.send({
      message: "*lastLogin* has been updated",
    });
  } catch (error) {
    return res.status(400).send({
      error: error.message,
    });
  }
}
