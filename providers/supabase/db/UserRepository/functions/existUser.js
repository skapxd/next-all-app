// @ts-check

import { UserRepository, UserDTO } from "../UserRepository";
import { PostgrestResponse } from "@supabase/supabase-js";
import { supabaseConnection } from "providers/supabase/connection";
/**
 * @param {Object} param0
 * @param {string} param0.sendVerifyCodeTo
 * @param {UserRepository} param0.it
 * @return {Promise<PostgrestResponse<UserDTO>>}
 */
export const existUser = async ({ sendVerifyCodeTo, it }) => {
  const user = await supabaseConnection
    .from(it.users)
    .select("sendVerifyCodeTo, name, uuid")
    .match({ sendVerifyCodeTo });

  return user;
};
