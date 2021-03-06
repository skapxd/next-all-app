// @ts-check

import { supabaseConnection } from "providers/supabase/connection";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  try {
    const now = new Date();

    const { sendVerifyCodeTo } = req.body;

    console.log({ sendVerifyCodeTo });

    const data = await supabaseConnection
      .from("users")
      .update({ lastLogin: now })
      .match({ sendVerifyCodeTo });

    return res.send({
      hola: "hola",
      data,
    });
  } catch (error) {
    return res.status(400).send({
      error: error.message,
    });
  }
}
