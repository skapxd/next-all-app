// @ts-check

import { supabaseConnection } from "providers/supabase/connection";
import { UserRepository, UserDTO } from "../UserRepository";
import { PostgrestResponse } from "@supabase/supabase-js";
/**
 * @param {Object} props
 * @param {UserRepository} props.it
 * @param {string} props.value
 * @param {string} props.uuid
 * @return {Promise<PostgrestResponse<UserDTO>>}
 */
export const setInfo = async (props) => {
  const { it, value, uuid } = props;

  return await supabaseConnection
    .from(it.users)
    .update({ info: value })
    .match({ uuid });
};
