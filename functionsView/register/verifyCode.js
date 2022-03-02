// @ts-check

import { userBloc } from "Bloc/UserBloc";

/**
 * @typedef {{value: string, isValid: boolean}} Field
 *
 * @param {Object} props
 * @param {Field} [props.code]
 * @param {Field} [props.email]
 * @param {() => void} [props.onFailed]
 * @param {() => void} [props.onSuccess]
 */
export const verifyCode = async (props) => {
  const { email, code, onFailed, onSuccess } = props;

  if (!email.value || !email.isValid || !code.value || !code.isValid)
    return onFailed && onFailed();

  const data = await userBloc.verifyCode({
    code: code.value,
    email: email.value,
  });

  if (!data.success) return onFailed && onFailed();

  onSuccess && onSuccess();
};
