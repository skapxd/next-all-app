// @ts-check

import { userBloc } from "Bloc/UserBloc";

/**
 * @typedef {{value: string, isValid: boolean}} Field
 *
 * @param {Object} props
 * @param {Field} [props.pass]
 * @param {Field} [props.email]
 * @param {() => void} [props.onFailed ]
 * @param {(data: { success: boolean, token: string}) => void} [props.onSuccess ]
 */
export const validatePass = async (props) => {
  const { pass, email, onFailed, onSuccess } = props;

  if (!pass.value || !pass.isValid) return onFailed && onFailed();

  const data = await userBloc.validatePass({
    email: email.value,
    pass: pass.value,
  });

  if (!data.success) return onFailed && onFailed();

  onSuccess && onSuccess(data);
};
