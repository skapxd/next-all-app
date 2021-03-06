// @ts-check

import { supabaseConnection } from "providers/supabase/connection";
import { decode } from "base64-arraybuffer";

export class PublicImages {
  bucketName = "all-app-images";

  /**
   * @param {Object} props
   * @param {string} props.uuid
   * @param {string} props.base64
   * @param {string} props.name
   * @param {string} props.extension
   */
  async uploadUserImages(props) {
    const { uuid, base64, name, extension } = props;

    const file = decode(base64.replace(/^data:image\/.*;base64,/, ""));

    let resp = await supabaseConnection.storage
      .from(this.bucketName)
      .upload(`users/${uuid}/${name}`, file, {
        contentType: `image/${extension}`,
        cacheControl: "0",
        upsert: false,
      });

    if (resp.error) {
      resp = await supabaseConnection.storage
        .from(this.bucketName)
        .update(`users/${uuid}/${name}`, file, {
          contentType: "image/*",
          cacheControl: "0",
          upsert: false,
        });
    }

    const url = supabaseConnection.storage
      .from(this.bucketName)
      .getPublicUrl(`users/${uuid}/${name}`);

    return {
      url,
      resp,
    };
  }
}
