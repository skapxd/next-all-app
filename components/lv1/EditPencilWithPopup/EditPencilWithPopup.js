// @ts-check
import { EditPencilIcon } from "components/lv0/Icon/EditPencilIcon";
import { InputText } from "components/lv0/InputText/InputText";
import { useState } from "react";
import Style from "./EditPencilWithPopup.module.scss";
/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} props.title
 * @param {(value:string) => void} [props.onSave]
 * @param {() => void} [props.onCancel]
 */
export function EditPencilWithPopup(props) {
  const { className = "", title = "default title", onCancel, onSave } = props;
  const [show, setShow] = useState(false);

  const [text, setText] = useState("");
  return (
    <div className={`${Style.Box} ${className}`}>
      <EditPencilIcon onClick={() => setShow(true)} />
      {show && (
        <>
          <div
            className={Style.PopupBg}
            onClick={() => {
              setShow(false);
              onCancel && onCancel();
            }}
          ></div>
          <div className={Style.Modal}>
            <h4>{title}</h4>

            <InputText
              className={Style.Modal_Input}
              onChange={(e) => setText(e)}
              onSubmit={() => {
                setShow(false);
                onSave && onSave(text);
              }}
            />

            <div className={Style.Modal_BoxBtn}>
              <button
                onClick={() => {
                  setShow(false);
                  onCancel && onCancel();
                }}
              >
                CANCELAR
              </button>
              <button
                onClick={() => {
                  setShow(false);
                  onSave && onSave(text);
                }}
              >
                GUARDAR
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function Modal() {}