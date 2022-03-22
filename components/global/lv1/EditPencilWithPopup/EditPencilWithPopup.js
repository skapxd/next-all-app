// @ts-check
import { EditPencilIcon } from "components/global/lv0/Icon/EditPencilIcon";
import { useChangeUrl } from "hooks/useChangeUrl";
import { useEffect, useState } from "react";
import { Modal } from "./components/Modal";
import Style from "./EditPencilWithPopup.module.scss";

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} props.title
 * @param {string} [props.initValue]
 * @param {(value:string) => void} [props.onSave]
 * @param {() => void} [props.onCancel]
 */
export function EditPencilWithPopup(props) {
  const {
    className = "",
    title = "default title",
    initValue,
    onCancel,
    onSave,
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
        className={Style.Pencil}
        onClick={() => {
          setShow(true);
          router.push(
            router.asPath,
            {
              query: {
                modal: title,
              },
            },
            {
              scroll: false,
            }
          );
        }}
      />
      {show && (
        <Modal
          ref2={scroll}
          onCancel={onCancel}
          onSave={onSave}
          router={router}
          setShow={setShow}
          setText={setText}
          text={text}
          title={title}
        />
      )}
    </div>
  );
}
