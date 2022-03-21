// @ts-check

import { UserRepository, UserDTO } from "../UserRepository";
import { PostgrestResponse } from "@supabase/supabase-js";
import { supabaseConnection } from "providers/supabase/connection";
/**
 * @param {Object} props
 * @param {UserRepository} props.it
 * @param {string} props.uuid
 * @param {string} props.value
 * @return {Promise<PostgrestResponse<UserDTO>>}
 */
export const setPhone = async (props) => {
  const { it, uuid, value } = props;

  return await supabaseConnection
    .from(it.users)
    .update({ phone: value })
    .match({ uuid });
};
