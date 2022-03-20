// @ts-check

import { supabaseConnection } from "providers/supabase/connection";
import { UserDTO, UserRepository } from "../UserRepository";

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.sendVerifyCodeTo
 * @param {UserRepository} props.it
 * @return {Promise<import("@supabase/supabase-js").PostgrestResponse<UserDTO>>}
 */
export const create = async (props) => {
  let { sendVerifyCodeTo, name, it } = props;

  if (!sendVerifyCodeTo || !name) {
    throw new Error("sendVerifyCodeTo or name is falsy");
  }

  try {
    /**@type {UserDTO} */
    const data = {
      name,
      sendVerifyCodeTo,
      verifyMethod: "email",
    };

    /**
     * @type {import("@supabase/supabase-js").PostgrestResponse<UserDTO>}
     */
    const resp = await supabaseConnection.from(it.users).insert(data);

    return resp;
  } catch (error) {
    throw new Error("error to save user");
  }
};
