// @ts-check

import { isArray, isObject, isString, isNumber } from "@skapxd/validate";

export class TypeDataValidateParam {
  static array = "array";
  static object = "object";
  static number = "number";
  static string = "string";
}

/**
 * 
 * @param {Object} props 
 * @param {TypeDataValidateParam} props.typeData
 * @param {any} props.param
 * @param {string} props.nameParam
 * @param {boolean} [props.isRequired]
 * @param {number} [props.length]
 *@returns {{
 * value: any,
 * isValidParam: boolean,
 * errorMessage: string
 * }}

 */
export const ValidateParam = (props) => {
  const {
    param,
    typeData = TypeDataValidateParam.string,
    isRequired = true,
    length = 0,
    nameParam = "",
  } = props;

  if (isRequired && (!param || param === ""))
    return {
      isValidParam: false,
      errorMessage: `${nameParam} is empty`,
      value: null,
    };

  if (typeData === TypeDataValidateParam.string && isString(param)) {
    return {
      isValidParam: true,
      value: param,
      errorMessage: null,
    };
  } else if (typeData === TypeDataValidateParam.string && !isString(param)) {
    return {
      isValidParam: false,
      value: null,
      errorMessage: `${nameParam} is not string`,
    };
  }

  if (
    typeData === TypeDataValidateParam.number &&
    isNumber(+param) &&
    !isNaN(param)
  ) {
    if (param > length)
      return {
        isValidParam: false,
        value: +param,
        errorMessage: `${nameParam} is greater than 20`,
      };

    return {
      isValidParam: true,
      value: +param,
      errorMessage: null,
    };
  } else if (typeData === TypeDataValidateParam.number && !isNumber(param)) {
    return {
      isValidParam: false,
      value: null,
      errorMessage: `${nameParam} is not number`,
    };
  }

  if (typeData === TypeDataValidateParam.array && isArray(param)) {
    return {
      isValidParam: true,
      value: param,
      errorMessage: null,
    };
  } else if (typeData === TypeDataValidateParam.array && !isArray(param)) {
    return {
      isValidParam: false,
      value: null,
      errorMessage: `${nameParam} is not array`,
    };
  }

  if (typeData === TypeDataValidateParam.object && isObject(param)) {
    return {
      isValidParam: true,
      value: param,
      errorMessage: null,
    };
  } else if (typeData === TypeDataValidateParam.object && isObject(param)) {
    return {
      isValidParam: false,
      value: null,
      errorMessage: `${nameParam} is not object`,
    };
  }

  return {
    isValidParam: false,
    value: null,
    errorMessage: "Case undefined",
  };
};
