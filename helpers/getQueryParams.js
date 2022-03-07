/**
 * @param {string} name
 * @param {string} [url]
 * @returns {any}
 */
export const getQueryParams = (name, url) => {
  url ??= typeof window !== "undefined" && window.location.href;

  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return "";
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};
