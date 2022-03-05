// @ts-check
import { supabase } from "./connection";

/**
 * @typedef {'whatsApp'| 'email'} VerifyMethod
 */

/**
 * @typedef {Object} UserDTO User Data Transfer Object ;)
 * @prop {string} [uuid]
 * @prop {string} name
 * @prop {string} sendVerifyCodeTo
 * @prop {VerifyMethod} verifyMethod
 */

export class UserRepository {
  #users = "users";

  /**
   * @param {Object} props
   * @param {string} props.name
   * @param {string} props.sendVerifyCodeTo
   * @return {Promise<import("@supabase/supabase-js").PostgrestResponse<UserDTO>>}
   */
  async create(props) {
    let { sendVerifyCodeTo, name } = props;

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
      const resp = await supabase.from(this.#users).insert(data);

      return resp;
    } catch (error) {
      throw new Error("error to save user");
    }
  }

  /**
   * @param {Object} param0
   * @param {string} param0.sendVerifyCodeTo
   * @return {Promise<{
   * exist: boolean,
   * resp: import("@supabase/supabase-js").PostgrestResponse<UserDTO>,
   * }>}
   */
  async existUser({ sendVerifyCodeTo }) {
    const existUser = await supabase
      .from(this.#users)
      .select("sendVerifyCodeTo, name")
      .match({ sendVerifyCodeTo });

    if (!existUser)
      return {
        exist: false,
        resp: existUser,
      };

    return {
      exist: true,
      resp: existUser,
    };
  }
}
