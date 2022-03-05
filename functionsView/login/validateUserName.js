// @ts-check

import { userBloc } from "Bloc/UserBloc";

/**
 * @typedef {{value: string, isValid: boolean}} Field
 *
 * @param {Object} props
 * @param {Field} [props.to]
 * @param {Field} [props.name]
 * @param {() => void} [props.onFailed ]
 * @param {(data : {success: boolean}) => void} [props.onSuccess ]
 */
export const getCode = async (props) => {
  let { to, name, onFailed, onSuccess } = props;

  onFailed ??= () => {};
  onSuccess ??= () => {};

  if (!to.value || !to.isValid || !name.isValid || !name.value)
    return onFailed();

  const data = await userBloc.getCode({
    to: to.value,
    method: "email",
    name: name.value,
  });

  if (!data.success) return onFailed();

  onSuccess(data);
};
