// @ts-check

import { userBloc } from "Bloc/UserBloc";

/**
 * @typedef {{value: string, isValid: boolean}} Field
 *
 * @param {Object} props
 * @param {Field} [props.code]
 * @param {Field} [props.to]
 * @param {Field} [props.name]
 * @param {() => void} [props.onFailed ]
 * @param {(data: { success: boolean, token: string}) => void} [props.onSuccess ]
 */
export const verifyCode = async (props) => {
  const { code, to, name, onFailed, onSuccess } = props;

  if (!code.value || !code.isValid) return onFailed && onFailed();

  const data = await userBloc.verifyCode({
    to: to.value,
    code: code.value,
    name: name.value,
  });

  if (!data.success) return onFailed && onFailed();

  onSuccess && onSuccess(data);
};
