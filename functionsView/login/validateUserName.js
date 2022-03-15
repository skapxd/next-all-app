// @ts-check

import { userBlocInstance } from "Bloc/UserBloc/UserBloc";

/**
 * @typedef {{value: string, isValid: boolean}} Field
 */

/**
 * @template T
 * @param {Object} props
 * @param {Field} [props.to]
 * @param {Field} [props.name]
 * @param {() => void} [props.onFailed ]
 * @param {(data : {success: boolean, name: string}) => void} [props.onSuccess ]
 */
export const getCode = async (props) => {
  let { to, name, onFailed, onSuccess } = props;

  onFailed ??= () => {};
  onSuccess ??= () => {};

  if (!to.value || !to.isValid || !name.isValid || !name.value)
    return onFailed();

  const data = await userBlocInstance.getCode({ 
    to: to.value,
    method: "email",
    name: name.value,
  });

  if (!data.success) return onFailed();

  onSuccess(data);
};
