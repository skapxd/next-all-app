// @ts-check

import { supabaseConnection } from "../../connection";
import { create } from "./functions/create";

export class UserRolDTO {
  static Admin = "Admin";
}

/**
 * @typedef {'whatsApp'| 'email'} VerifyMethod
 */

/**
 * @typedef {Object} UserDTO User Data Transfer Object ;)
 * @prop {string} [uuid]
 * @prop {string} name
 * @prop {string} sendVerifyCodeTo
 * @prop {UserRolDTO} [rol]
 * @prop {VerifyMethod} verifyMethod
 * @prop {string} [create_at]
 * @prop {string} [lastLogin]
 */

export class UserRepository {
  users = "users";

  /**
   * @param {Object} props
   * @param {string} props.name
   * @param {string} props.sendVerifyCodeTo
   * @return {Promise<import("@supabase/supabase-js").PostgrestResponse<UserDTO>>}
   */
  async create(props) {
    let { sendVerifyCodeTo, name } = props;

    return create({
      name,
      sendVerifyCodeTo,
      it: this,
    });
  }

  /**
   * @param {Object} param0
   * @param {string} param0.sendVerifyCodeTo
   * @return {Promise<import("@supabase/supabase-js").PostgrestResponse<UserDTO>>}
   */
  async existUser({ sendVerifyCodeTo }) {
    const user = await supabaseConnection
      .from(this.users)
      .select("sendVerifyCodeTo, name, uuid")
      .match({ sendVerifyCodeTo });

    return user;
  }

  /**
   * @param {Object} param0
   * @param {string} param0.uuid
   * @return {Promise<import("@supabase/supabase-js").PostgrestResponse<UserDTO>>}
   */
  async updateLastLogin({ uuid }) {
    const user = await supabaseConnection
      .from(this.users)
      .update({ lastLogin: new Date() })
      .match({ uuid });

    return user;
  }
}
