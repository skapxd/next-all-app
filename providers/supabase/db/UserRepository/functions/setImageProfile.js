// @ts-check

import { supabaseConnection } from "providers/supabase/connection";
import { UserRepository, UserDTO } from "../UserRepository";

/**
 * @param {Object} param0
 * @param {string} param0.uuid
 * @param {string} param0.urlImage
 * @param {UserRepository} param0.it
 * @return {Promise<import("@supabase/supabase-js").PostgrestResponse<UserDTO>>}
 */
export const setImageProfile = async ({ uuid, urlImage, it }) => {
  const user = await supabaseConnection
    .from(it.users)
    .update({ imageProfile: urlImage })
    .match({ uuid });

  return user;
};
