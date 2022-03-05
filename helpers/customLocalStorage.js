// @ts-check

/**
 * @template T
 * @param {Object} props
 * @param {string} props.key
 * @param {T} [props.templateType]
 * @returns {T}
 */
export const getLocalStorage = ({ key = "" }) => {
  if (typeof localStorage !== "undefined") {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  }
};

/**
 * @param {string} key
 * @param {any} value
 * @returns
 */
export const setLocalStorage = (key = "", value) => {
  const dataAsString = JSON.stringify(value);
  if (typeof localStorage !== "undefined") {
    return localStorage.setItem(key, dataAsString);
  }
};
