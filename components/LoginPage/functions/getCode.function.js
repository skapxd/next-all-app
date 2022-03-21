// @ts-check
import { getCodeService } from "../service/getCode.service";

/**
 * @typedef {{value: string, isValid: boolean}} Field
 */

/**
 * @param {Object} props
 * @param {Field} [props.to]
 * @param {Field} [props.name]
 * @param {() => void} [props.onFailed]
 * @param {(name: string) => void} [props.onSuccess ]
 */
export const getCodeFunction = async (props) => {
  let { to, name, onFailed, onSuccess } = props;
  try {
    onFailed ??= () => {};
    onSuccess ??= () => {};

    if (!to.value || !to.isValid || !name.isValid || !name.value)
      return onFailed();
    const resp = await getCodeService({
      to: to.value,
      method: "email",
      name: name.value,
    });

    onSuccess(resp.name);
  } catch (error) {
    console.log({ error });
    onFailed();
  }
};
