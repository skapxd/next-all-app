// @ts-check
import Style from "./ListOfStoreCategory.module.scss";
import { stateListOfStoreCategory } from "./StateListOfStoreCategory";
import { observer } from "mobx-react-lite";

/**
 * @param {Object} props
 * @param {string} [props.className]
 */
function _ListOfStoreCategory(props) {
  const { className = "" } = props;

  /**
   * @param {string} currentCategory
   */
  const styleText = (currentCategory) => {
    if (!currentCategory)
      throw new Error("param currentCategory of styleText is empty");
    if (currentCategory === stateListOfStoreCategory._currentCategory)
      return Style.ListOfStoreCategory_Box_TextActive;
    return Style.ListOfStoreCategory_Box_Text;
  };

  /**
   * @param {string} currentCategory
   */
  const styleUnderline = (currentCategory) => {
    if (!currentCategory)
      throw new Error("param currentCategory of styleUnderline is empty");
    if (currentCategory === stateListOfStoreCategory._currentCategory)
      return Style.ListOfStoreCategory_Box_UnderlineActive;
    return Style.ListOfStoreCategory_Box_Underline;
  };

  return (
    <div className={`${className} ${Style.ListOfStoreCategory}`}>
      {stateListOfStoreCategory.listOfCategoriesStoreName.map((e, i) => {
        return (
          <div key={i} className={Style.ListOfStoreCategory_Box}>
            <p
              className={styleText(e)}
              onClick={() => stateListOfStoreCategory.changeCurrentCategory(e)}
            >
              {e}
            </p>
            <div className={styleUnderline(e)}></div>
          </div>
        );
      })}
    </div>
  );
}

export const ListOfStoreCategory = observer(_ListOfStoreCategory);
