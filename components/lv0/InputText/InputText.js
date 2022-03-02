// @ts-check
import Style from "./InputText.module.scss";
import { useState } from "react";
import { validate } from "@skapxd/validate";

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {string} [props.placeholder]
 * @param {boolean} [props.isValid]
 * @param {string} [props.className]
 * @param {string} [props.value]
 * @param {"off" | "on"} [props.autoComplete]
 * @param {RegExp} [props.regExp]
 * @param {(value: string, isValid: boolean, keyDown: string) => void} [props.onChange]
 * @param {() => void} [props.onSubmit]
 * @param {import("react").InputHTMLAttributes<HTMLInputElement>['type']} [props.type]
 * @returns
 */
export function InputText(props) {
  const {
    type,
    value,
    name = "",
    regExp = /.+/,
    className = "",
    isValid = true,
    placeholder = "",
    autoComplete = "off",
    onChange = () => {},
    onSubmit = () => {},
  } = props;

  const [activate, setActivate] = useState(false);
  const [data, setData] = useState("");
  const [_isValid, setIsValid] = useState(isValid);

  const getClassNameInput = () => {
    if (!isValid)
      return `${Style.BoxInput_input}  ${Style.BoxInput_inputError}`;

    if (value) return `${Style.BoxInput_input} ${Style.BoxInput_inputActivate}`;

    if (activate)
      return `${Style.BoxInput_input} ${Style.BoxInput_inputActivate}`;

    return `${Style.BoxInput_input} `;
  };

  const getClassNameLabel = () => {
    if (value) {
      return `${Style.BoxInput_label} ${Style.BoxInput_labelActivate}`;
    }
    if (activate) {
      return `${Style.BoxInput_label} ${Style.BoxInput_labelActivate}`;
    }

    return `${Style.BoxInput_label}`;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit();
      }}
      className={`${Style.BoxInput} ${className}`}
    >
      <label className={getClassNameLabel()} htmlFor={name}>
        {name}
      </label>
      <input
        value={value}
        autoComplete={autoComplete}
        onFocus={() => setActivate(true)}
        onBlur={() => data === "" && setActivate(false)}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={getClassNameInput()}
        onChange={(e) => {
          const value = e.target.value;

          const tempIsValid = validate({
            regExp,
            stringToValidate: value,
          });

          setIsValid(tempIsValid);
          setData(value);

          onChange && onChange(value, tempIsValid, e.nativeEvent["data"]);
        }}
      />
    </form>
  );
}
