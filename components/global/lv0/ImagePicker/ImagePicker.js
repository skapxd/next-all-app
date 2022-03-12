// @ts-check
import { fileToBase64 } from "helpers/file/fileToBase64";
import { getSizeToBase64 } from "helpers/file/getSizetoBase64";
import { reduceSizeImageAsBase64 } from "helpers/file/reduceSizeImageAsBase64";
import { useState } from "react";
import { v4 } from "uuid";
/**
 * @param {Object} props
 * @param {(props: {url: string | ArrayBuffer}) => JSX.Element} [props.imageBuilder]
 * @param {(url: string) => void} [props.onChange]
 * @returns
 */
export function ImagePicker(props) {
  const { imageBuilder: ImageBuilder } = props;
  const id = v4();

  /**@type {string | ArrayBuffer} */
  const initUrl = null;
  const [url, setUrl] = useState(initUrl);

  return (
    <>
      <label
        style={{
          width: "max-content",
          alignSelf: "center",
        }}
        htmlFor={id}
        onChange={async (e) => {
          try {
            /**@type {File} */
            const file = e.target["files"][0];
            // if (file.size > 1) return alert("File is too big!");
            const originBase64 = await fileToBase64(file);

            const originSize = getSizeToBase64(originBase64);

            const reducedBase64 = await reduceSizeImageAsBase64({
              base64: originBase64,
            });

            const reducedSize = getSizeToBase64(reducedBase64);

            console.log({
              originSize,
              reducedBase64,
              reducedSize,
              originBase64,
            });

            setUrl(reducedBase64);
          } catch (error) {
            console.log({ error: error.message });
          }
        }}
      >
        <ImageBuilder url={url} />
        <input
          id={id}
          type="file"
          style={{ display: "none" }}
          accept="image/png, image/jpeg, image/jpg"
        />
      </label>
    </>
  );
}
