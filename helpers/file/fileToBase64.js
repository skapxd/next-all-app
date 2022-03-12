// @ts-check
/**@param {File} file*/
export function fileToBase64(file) {
  return new Promise((res, rej) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (_) => {
      const url = _.target.result;
      res(url);
    };

    reader.onerror = () => {
      rej("Ocurrió un error al cargar la imagen");
    };
  });
}
