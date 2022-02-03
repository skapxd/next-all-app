// @ts-check
import { BottomNavigationBar } from "components/lv1/BottomNavigationBar/BottomNavigationBar";
import { BrandAppBar } from "components/lv1/BrandAppBar/BrandAppBar";

/**
 * @param {Object} props
 * @param {import("react").ReactElement} props.children
 * @returns
 */
export function Scaffold(props) {
  const { children } = props;

  return (
    <div  >
      <BrandAppBar />
      {children}
      <BottomNavigationBar />
    </div>
  );
}
