// @ts-check
import {
  stateBottomNavigationBarButton,
  TypeBottomNavigationBarButton,
} from "components/lv0/BottomNavigationBarButton/StateBottomNavigationBarButton";
import { BottomNavigationBar } from "components/lv1/BottomNavigationBar/BottomNavigationBar";
import { BrandAppBar } from "components/lv1/BrandAppBar/BrandAppBar";
import { useChangeUrl } from "hooks/useChangeUrl";
import { observer } from "mobx-react-lite";

export const Scaffold = observer(_Scaffold);
/**
 * @param {Object} props
 * @param {import("react").ReactElement} props.children
 * @returns
 */
export function _Scaffold(props) {
  const { children } = props;
  const { currentPage } = useChangeUrl({
    queryParam: "page",
  });
  return (
    <div>
      {currentPage !== TypeBottomNavigationBarButton.settings && (
        <BrandAppBar />
      )}

      {children}
      <BottomNavigationBar />
    </div>
  );
}
