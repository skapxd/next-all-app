// @ts-check
import { getSizeToBase64 } from "helpers/file/getSizeToBase64";
import { validateJWT } from "middleware/validateJWT";
import { UserRepository } from "providers/supabase/db/UserRepository/UserRepository";
import { PublicImages } from "providers/supabase/storage/Public/PublicImages";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export const setImageProfileAPI = async (req, res) => {
  try {
    const { base64, type } = req.body;
    const { uuid } = validateJWT(req);

    if (!base64) throw new Error("*base64* don't exist");
    if (!type) throw new Error("*type* don't exist");

    const size = getSizeToBase64(base64);
    if (size > 500) throw new Error("*base64* is greater than 500kb");

    const extension = type.replace(/image\//, "");
    const now = new Date().getTime();
    const name = `imageProfile-${now}.${extension}`;

    const resp = await new PublicImages().uploadUserImages({
      name,
      uuid,
      base64,
      extension,
    });
    const publicUrl = resp.url.publicURL;

    new UserRepository().setImageProfile({
      uuid,
      urlImage: publicUrl,
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
