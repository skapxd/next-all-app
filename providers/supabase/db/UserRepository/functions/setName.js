// @ts-check
import { supabaseConnection } from "providers/supabase/connection";
import { UserRepository, UserDTO } from "../UserRepository";
import { PostgrestResponse } from "@supabase/supabase-js";
/**
 * @param {Object} param0
 * @param {UserRepository} param0.it
 * @param {string} param0.value
 * @param {string} param0.uuid
 * @return {Promise<PostgrestResponse<UserDTO>>}
 */
export const setName = async ({ it, value, uuid }) => {
  if (!value) throw new Error("Name is empty");

  const user = await supabaseConnection
    .from(it.users)
    .update({ name: value })
    .match({ uuid });

  return user;
};
