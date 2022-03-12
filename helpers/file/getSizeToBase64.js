/**
 * @param {string | ArrayBuffer} image
 * @returns
 */
export function getSizeToBase64(image) {
  let y = 1;
  if (image.endsWith("==")) {
    y = 2;
  }

  const x_size = image.length * (3 / 4) - 4;

  return Math.round(x_size / 1024) + "kb";
}
