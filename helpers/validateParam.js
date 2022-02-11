// @ts-check

import { isArray, isObject, isString, isNumber } from "@skapxd/validate";
import { response } from "./response";

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
 * @param {string} props.param
 * @param {string} props.nameParam
 * @param {boolean} [props.isRequired]
 * @param {number} [props.length]
 *@returns {{
 * value: any,
 * isValidParam: boolean,
 * message: string
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


  if (isRequired && !param)
    return {
      isValidParam: false,
      message: `${nameParam} is empty`,
      value: null,
    };

  if (typeData === TypeDataValidateParam.string && isString(param)) {
    return {
      isValidParam: true,
      value: param,
      message: null,
    };
  } else if (typeData === TypeDataValidateParam.string && !isString(param)) {
    return {
      isValidParam: false,
      value: null,
      message: `${nameParam} is not string`,
    };
  }

  if (
    typeData === TypeDataValidateParam.number &&
    isNumber(+param) &&
    !isNaN(+param)
  ) {
    return {
      isValidParam: true,
      value: +param,
      message: null,
    };
  } else if (typeData === TypeDataValidateParam.number && !isNumber(param)) {
    return {
      isValidParam: false,
      value: null,
      message: `${nameParam} is not number`,
    };
  }

  if (typeData === TypeDataValidateParam.array && isArray(param)) {
    return {
      isValidParam: true,
      value: param,
      message: null,
    };
  } else if (typeData === TypeDataValidateParam.array && !isArray(param)) {
    return {
      isValidParam: false,
      value: null,
      message: `${nameParam} is not array`,
    };
  }

  if (typeData === TypeDataValidateParam.object && isObject(param)) {
    return {
      isValidParam: true,
      value: param,
      message: null,
    };
  } else if (typeData === TypeDataValidateParam.object && isObject(param)) {
    return {
      isValidParam: false,
      value: null,
      message: `${nameParam} is not object`,
    };
  }

  return {
    isValidParam: false,
    value: null,
    message: 'Case undefined',
  };
};
