// @ts-check
import { getSizeToBase64 } from "helpers/file/getSizeToBase64";
import { validateJWT } from "middleware/validateJWT";
import { PublicImages } from "providers/supabase/storage/Public/PublicImages";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export const saveImageProfile = async (req, res) => {
  try {
    const { base64, name } = req.body;
    const { uuid } = validateJWT(req);

    if (!base64) throw new Error("*base64* don't exist");
    if (!name) throw new Error("*name* don't exist");

    const size = getSizeToBase64(base64);
    if (size > 500) throw new Error("*base64* is greater than 5kb");

    const publicUrl = await new PublicImages().uploadUserImages({
      uuid,
      base64,
      name,
    });

    return res.send({
      publicUrl,
    });
  } catch (error) {
    return res.status(400).send({
      error: error.message,
    });
  }
};
