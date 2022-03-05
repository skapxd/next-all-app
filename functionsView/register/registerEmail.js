// @ts-check

import { userBloc } from "Bloc/UserBloc";

/**
 * @typedef {Object} Field
 * @prop {string} value
 * @prop {boolean} isValid
 *
 * @param {Object} props
 * @param {Field} props.email
 * @param {Field} props.name
 * @param {() => void} [props.onFailed]
 * @param {() => void} [props.onSuccess]
 * @returns
 */
export const registerEmail = async (props) => {
  const { email, name, onFailed, onSuccess } = props;

  if (!email.value || !email.isValid) return onFailed && onFailed();

  const data = await userBloc.getCode({
    to: email.value,
    name: name.value,
  });

  if (!data.success) return onFailed && onFailed();

  onSuccess && onSuccess();
};
