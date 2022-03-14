// @ts-check
import { EditPencilIcon } from "components/global/lv0/Icon/EditPencilIcon";
import { InputText } from "components/global/lv0/InputText/InputText";
import { useChangeUrl } from "hooks/useChangeUrl";
import { useEffect, useState } from "react";
import Style from "./EditPencilWithPopup.module.scss";

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} props.title
 * @param {string} [props.initValue]
 * @param {(value:string) => void} [props.onSave]
 * @param {() => void} [props.onCancel]
 * @param {() => void} [props.onClick]
 */
export function EditPencilWithPopup(props) {
  const {
    className = "",
    title = "default title",
    initValue,
    onCancel,
    onSave,
    onClick,
  } = props;

  const [show, setShow] = useState(false);

  const [text, setText] = useState(initValue);

  const { currentPage, router } = useChangeUrl({
    queryParam: "modal",
  });

  useEffect(() => {
    if (currentPage === title) return;
    setShow(false);
  }, [currentPage]);

  return (
    <div className={`${Style.Box} ${className}`}>
      <EditPencilIcon
        onClick={() => {
          setShow(true);
          router.push(router.asPath, {
            query: {
              modal: title,
            },
          });
        }}
      />
      {show && (
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
      )}
    </div>
  );
}

export function Modal() {}
