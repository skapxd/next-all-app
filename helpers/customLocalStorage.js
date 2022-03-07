// @ts-check

/**
 * @template T
 * @param {Object} props
 * @param {string} props.key
 * @param {T} [props.templateType]
 * @returns {T}
 */
export const getLocalStorage = ({ key }) => {
  if (typeof localStorage === "undefined") return;

  /**@type {any} */
  const data = localStorage.getItem(key);
  return data;
};

/**
 * @param {Object} param0
 * @param {string} param0.key
 * @param {any} param0.value
 * @returns
 */
export const setLocalStorage = ({ key, value }) => {
  if (typeof localStorage === "undefined") return;

  return localStorage.setItem(key, value);
};
