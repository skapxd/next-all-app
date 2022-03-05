// @ts-check

import { supabase } from "db/supabase/connection";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  const data = await supabase
    .from("users")
    .select("sendVerifyCodeTo")
    .match({ sendVerifyCodeTo: "hbiaser132@gmail.com" });

  res.send({
    data,
  });
}
