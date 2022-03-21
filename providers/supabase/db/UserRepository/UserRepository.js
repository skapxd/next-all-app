// @ts-check

import { create } from "./functions/create";
import { getUser } from "./functions/getUser";
import { setImageProfile } from "./functions/setImageProfile";
import { setInfo } from "./functions/setInfo";
import { setName } from "./functions/setName";
import { setPhone } from "./functions/setPhone";
import { updateLastLogin } from "./functions/updateLastLogin";

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
 * @prop {string} info
 * @prop {string} phone
 * @prop {string} imageProfile
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
  async create({ sendVerifyCodeTo, name }) {
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
  async getUser({ sendVerifyCodeTo }) {
    return await getUser({
      it: this,
      sendVerifyCodeTo,
    });
  }

  /**
   * @param {Object} param0
   * @param {string} param0.uuid
   * @return {Promise<import("@supabase/supabase-js").PostgrestResponse<UserDTO>>}
   */
  async updateLastLogin({ uuid }) {
    return await updateLastLogin({
      uuid,
      it: this,
    });
  }

  /**
   * @param {Object} param0
   * @param {string} param0.uuid
   * @param {string} param0.urlImage
   * @returns
   */
  async setImageProfile({ uuid, urlImage }) {
    return await setImageProfile({
      uuid,
      it: this,
      urlImage,
    });
  }

  /**
   * @param {Object} param0
   * @param {string} param0.uuid
   * @param {string} param0.value
   */
  async setName({ value, uuid }) {
    return await setName({
      it: this,
      value,
      uuid,
    });
  }

  /**
   * @param {Object} param0
   * @param {string} param0.uuid
   * @param {string} param0.value
   */
  async setInfo({ uuid, value }) {
    return await setInfo({ it: this, uuid, value });
  }

  /**
   * @param {Object} param0
   * @param {Object} param0.uuid
   * @param {Object} param0.value
   */
  async setPhone({ uuid, value }) {
    return await setPhone({ uuid, value, it: this });
  }
}
