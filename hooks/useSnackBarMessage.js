// @ts-check
import { useState } from "react";
export const useSnackBarMessage = () => {
  const [data, setData] = useState({
    message: "",
    seg: 1,
    show: false,
    typeMessage: "normal",
  });

  /**
   * @param {Object} props
   * @param {string} [props.message]
   * @param {number} [props.seg]
   * @param {'success'| 'error' | 'normal'} props.typeMessage
   */
  const show = (props) => {
    const { message = "", seg = 3, typeMessage } = props;

    const messageMap = {
      success: "Guardado exitoso",
      error: "Error al guardar",
      normal: message,
    };

    setData({
      seg,
      message: messageMap[typeMessage],
      typeMessage,
      show: true,
    });

    setTimeout(() => {
      setData((s) => ({ ...s, show: false }));
    }, seg * 1000);
  };

  const SnackBarMessage = () => {
    if (!data.show) return <></>;

    const backgroundColor = {
      success: "#00976f",
      error: "#FF1212",
      normal: "#111111",
    };

    return (
      <div
        style={{
          position: "fixed",
          bottom: "16px",
          left: "16px",
          right: "0px",
          maxWidth: "430px",
          margin: "auto",
        }}
      >
        <p
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            width: "max-content",
            backgroundColor: backgroundColor[data.typeMessage],
            color: "#fff",
            boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.16)",
          }}
        >
          {data.message}
        </p>
      </div>
    );
  };

  return {
    show,
    SnackBarMessage,
  };
};
