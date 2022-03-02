// @ts-check

import { userBloc } from "Bloc/UserBloc";

/**
 * @typedef {{value: string, isValid: boolean}} Field
 *
 * @param {Object} props
 * @param {Field} [props.email]
 * @param {() => void} [props.onFailed ]
 * @param {(data : {success: boolean, name: string}) => void} [props.onSuccess ]
 */
export const validateUserName = async (props) => {
  const { email, onFailed, onSuccess } = props;

  if (!email.value || !email.isValid) return onFailed && onFailed();

  const data = await userBloc.validateUserName({
    email: email.value,
  });

  if (!data.success) return onFailed && onFailed();

  onSuccess && onSuccess(data);
};
