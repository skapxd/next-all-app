// @ts-check
import { ArrowDirection, ArrowIcon } from "../Icon/ArrowIcon";
import Style from "./ListOfStore.module.scss";
import { StoreModel } from "./StoreModel";

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} [props.title]
 * @param {StoreModel[]} [props.listOfStoreModel]
 */
export function ListOfStore(props) {
  const {
    className = "",
    listOfStoreModel = [],
    title = "Default Title",
  } = props;

  return (
    <div className={Style.Box}>
      <div className={Style.Box_Title}>
        <h2 className={Style.Box_Title_Text}>{title}</h2>
        <ArrowIcon direction={ArrowDirection.right} />
      </div>

      <div className={Style.Box_BoxListStore}>
        {listOfStoreModel.map((e, i) => {
          const name =
            e.name.length > 23 ? e.name.substring(0, 20) + "..." : e.name;

          return (
            <button
              key={i}
              className={Style.Box_BoxListStore_Box}
              onClick={() => {}}
            >
              <img
                alt={e.name}
                className={Style.Box_BoxListStore_Box_Image}
                src={e.urlImage}
              />

              <h3 className={Style.Box_BoxListStore_Box_Name}>{name}</h3>
            </button>
          );
        })}
      </div>
    </div>
  );
}
