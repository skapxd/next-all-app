// @ts-check

import { userBlocInstance } from "Bloc/UserBloc/UserBloc";
import { verifyCodeService } from "../service/verifyCode.service";

/**
 * @typedef {{value: string, isValid: boolean}} Field
 *
 * @param {Object} props
 * @param {Field} [props.code]
 * @param {Field} [props.to]
 * @param {Field} [props.name]
 * @param {() => void} [props.onFailed]
 * @param {(data: {
 *  success: boolean;
 *  token: string;
 *  user: import("providers/supabase/db/UserRepository/UserRepository").UserDTO;
 *}) => void} [props.onSuccess]
 */
export const verifyCodeFunction = async (props) => {
  const { code, to, name, onFailed, onSuccess } = props;
  try {
    if (!code.value || !code.isValid) return onFailed && onFailed();

    const data = await verifyCodeService({
      to: to.value,
      code: code.value,
      name: name.value,
    });

    const { imageProfile, info, phone, name: userName } = data.user;
    userBlocInstance.setToken(data.token);
    userBlocInstance.setImageProfile(imageProfile);
    userBlocInstance.setInfo(info);
    userBlocInstance.setName(userName);
    userBlocInstance.setPhone(phone);
    userBlocInstance.setIsAuthenticate();
    onSuccess && onSuccess(data);
  } catch (error) {
    console.log({ error: error.message });
    onFailed && onFailed();
  }
};
