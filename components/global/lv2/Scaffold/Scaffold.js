// @ts-check
import { BottomNavigationBar } from "components/global/lv1/BottomNavigationBar/BottomNavigationBar";
import { BrandAppBar } from "components/global/lv1/BrandAppBar/BrandAppBar";
import { useChangeUrl } from "hooks/useChangeUrl";
import { observer } from "mobx-react-lite";
import { CurrentPageRoot } from "pages";

export const Scaffold = observer(_Scaffold);
/**
 * @param {Object} props
 * @param {import("react").ReactElement} props.children
 * @returns
 */
export function _Scaffold(props) {
  const { children } = props;
  const { currentValue: currentPage } = useChangeUrl({
    queryParam: "page",
  });
  return (
    <div>
      {currentPage !== CurrentPageRoot.cuenta && <BrandAppBar />}

      {children}
      <BottomNavigationBar />
    </div>
  );
}
