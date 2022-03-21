// @ts-check
import { supabaseConnection } from "providers/supabase/connection";
import { UserRepository, UserDTO } from "../UserRepository";
import { PostgrestResponse } from "@supabase/supabase-js";

/**
 * @param {Object} props
 * @param {Object} props.sendVerifyCodeTo
 * @param {UserRepository} props.it
 * @returns {Promise<PostgrestResponse<UserDTO>>}
 */
export const getUser = async (props) => {
  const { it, sendVerifyCodeTo } = props;

  const user = await supabaseConnection
    .from(it.users)
    .select("*")
    .match({ sendVerifyCodeTo });

  return user;
};
