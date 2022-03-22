// @ts-check
import { InputText } from "components/global/lv0/InputText/InputText";
import Style from "./Modal.module.scss";

/**
 * @param {Object} props
 * @param {any} props.ref2
 * @param {string} props.title
 * @param {string} props.text
 * @param {() => void} props.onCancel
 * @param {(value:string) => void} props.onSave
 * @param {import("next/router").NextRouter} props.router
 * @param {import("react").Dispatch<import("react").SetStateAction<boolean>>} props.setShow
 * @param {import("react").Dispatch<import("react").SetStateAction<string>>} props.setText
 * @returns
 */
export const Modal = (props) => {
  const { onCancel, onSave, router, setShow, title, text, setText, ref2 } =
    props;

  return (
    <>
      <div
        className={Style.PopupBg}
        onClick={() => {
          setShow(false);
          router.back();

          onCancel && onCancel();
        }}
      ></div>
      <div className={Style.Modal}>
        <h4>{title}</h4>

        <InputText
          value={text}
          className={Style.Modal_Input}
          onChange={(e) => setText(e)}
          onSubmit={() => {
            setShow(false);
            router.back();

            onSave && onSave(text);
          }}
        />

        <div className={Style.Modal_BoxBtn}>
          <button
            onClick={() => {
              setShow(false);
              router.back();

              onCancel && onCancel();
            }}
          >
            CANCELAR
          </button>
          <button
            onClick={() => {
              setShow(false);
              router.back();
              onSave && onSave(text);
            }}
          >
            GUARDAR
          </button>
        </div>
      </div>
    </>
  );
};
