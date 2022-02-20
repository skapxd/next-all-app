// @ts-check

/**
 * @param {Object} object
 * @param {(key: string, value: any) => any} mapFn
 * @return {any[]}
 */
export function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(key, object[key]);

    const _ = Object.values(result);
    return _;
  }, []);
}
