import { useInverseDebounce } from "@skapxd/debounce";
import { ArrowDirection, ArrowIcon } from "components/global/lv0/Icon/ArrowIcon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Style from "./AppBarSearch.module.scss";
export function AppBarSearch() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [inverseDebounceText, setInverseDebounceText] = useState("");

  const inverseDebounce = useInverseDebounce({
    minimumDelay: 1000,
    // 2-Receive param text (or any argument) of useState
    fn: (value) => console.log(value),
  });

  useEffect(() => {
    if (!text && text === "") return;
    inverseDebounce(text);
  }, [text, inverseDebounce]);

  return (
    <div className={Style.Box}>
      <ArrowIcon
        className={Style.Box_ArrowIcon}
        direction={ArrowDirection.left}
        onClick={() => router.back()}
      />
      <input
        className={Style.Box_Input}
        type="text"
        name=""
        id=""
        placeholder="Buscar..."
        onChange={(e) => setText(e.currentTarget.value)}
      />
    </div>
  );
}
