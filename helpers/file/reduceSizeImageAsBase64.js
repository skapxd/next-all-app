// @ts-check
/**
 * Resize a base 64 Image
 * @param {Object} param0
 * @param {String} param0.base64 - The base64 string (must include MIME type)
 * @param {Number} [param0.MAX_WIDTH] - The width of the image in pixels
 * @param {Number} [param0.MAX_HEIGHT] - The height of the image in pixels
 */
export async function reduceSizeImageAsBase64({
  base64,
  MAX_WIDTH = 512,
  MAX_HEIGHT = 512,
}) {
  let resized_base64 = await new Promise((resolve) => {
    let img = new Image();
    img.src = base64;
    img.onload = () => {
      let canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL()); // this will return base64 image results after resize
    };
  });
  return resized_base64;
}
