// @ts-check

import { supabaseConnection } from "providers/supabase/connection";
import { UserRepository, UserDTO } from "../UserRepository";

/**
 * @param {Object} param0
 * @param {string} param0.uuid
 * @param {UserRepository} param0.it
 * @return {Promise<import("@supabase/supabase-js").PostgrestResponse<UserDTO>>}
 */
export const updateLastLogin = async ({ uuid, it }) => {
  const user = await supabaseConnection
    .from(it.users)
    .update({ lastLogin: new Date() })
    .match({ uuid });

  return user;
};
