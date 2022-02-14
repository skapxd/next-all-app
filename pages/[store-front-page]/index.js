// @ts-check
import { format } from "date-fns";
import { StoreModel } from "components/lv0/ListOfStore/StoreModel";
import Image from "next/image";
import { AppBar } from "components/components/AppBar/AppBar";
import Style from "./store-front-page.module.scss";
import { v4 as idV4 } from "uuid";
import Faker from "faker";

/** @type {import("next").GetServerSideProps} */
export const getServerSideProps = async (context) => {
  // context.
  console.log({ params: context.params });
  // context.id
  if (!context.res) {
    return {
      notFound: true,
    };
  }

  /**@type {StoreModel} */
  const storeModel = {
    index: 0,
    id: idV4(),
    creatingDate: Faker.date.recent().toString(),
    name: Faker.company.companyName(),
    popular: Faker.datatype.number(5),
    sponsor: {
      index: 0,
      isSponsor: true,
    },
    urlImage: `https://picsum.photos/400/400?image=${0}`,
    updateDate: format(
      new Date(1999, 4, 6),
      "dd/MM/yy"
    ),
  };

  return {
    props: {
      storeModel,
      message: context.params,
    },
  };
};

export default function StoreFrontPage(props) {
  /**
   * @type {{
   * storeModel: StoreModel,
   * message: Object
   * }}
   */
  const { storeModel, message } = props;
  return (
    <div className={Style.Box}>
      <AppBar />
      <div className={Style.Box_BoxImgAndName}>
        <div className={Style.Box_BoxImgAndName_Img}>
          {/* /placeholder.svg */}
          <Image
            alt={"a"}
            src={storeModel.urlImage}
            className={Style.Box_BoxImgAndName_Img}
            height={100}
            width={100}
          />
        </div>

        <h3 className={Style.Box_BoxImgAndName_Name}>{storeModel.name}</h3>
      </div>

      <div className={Style.Box_BoxUpdateAndRate}>
        <div className={Style.Box_BoxUpdateAndRate_Box}>
          <h4 className={Style.Box_BoxUpdateAndRate_Box_Value}>
            {storeModel.updateDate}
          </h4>

          <h4 className={Style.Box_BoxUpdateAndRate_Box_Name}>Actualización</h4>
        </div>

        <div className={Style.Box_BoxUpdateAndRate_Divider}></div>

        <div className={Style.Box_BoxUpdateAndRate_Box}>
          <h4 className={Style.Box_BoxUpdateAndRate_Box_Value}>
            {storeModel.popular}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15.272"
              viewBox="0 0 16 15.272"
            >
              <g id="istockphoto-586087216-170667a" transform="translate(-6 3)">
                <path
                  id="Trazado_32"
                  data-name="Trazado 32"
                  d="M66.066-350.732c-.273.128-.39.326-1.384,2.32-.967,1.94-1.064,2.106-1.235,2.192a21.27,21.27,0,0,1-2.272.385c-1.144.166-2.17.326-2.277.353a.782.782,0,0,0-.535.551c-.107.406-.016.524,1.716,2.208a20,20,0,0,1,1.678,1.732l.107.208-.4,2.283a9.339,9.339,0,0,0-.326,2.48.777.777,0,0,0,.887.513c.075-.021,1.01-.5,2.074-1.064,1.833-.973,1.951-1.021,2.229-1.021s.4.048,2.245,1.032a16.956,16.956,0,0,0,2.17,1.064.746.746,0,0,0,.8-.6A22.966,22.966,0,0,0,71.2-338.5l-.385-2.24.1-.23a11.822,11.822,0,0,1,1.678-1.759c1.732-1.678,1.823-1.8,1.716-2.2a.782.782,0,0,0-.535-.551c-.107-.027-1.128-.187-2.277-.353a21.575,21.575,0,0,1-2.272-.385c-.171-.085-.267-.257-1.24-2.2a15.778,15.778,0,0,0-1.2-2.213A1.035,1.035,0,0,0,66.066-350.732Z"
                  transform="translate(-52.333 347.763)"
                  fill="#e3e3e5"
                />
              </g>
            </svg>
          </h4>

          <h4 className={Style.Box_BoxUpdateAndRate_Box_Name}>100 opiniones</h4>
        </div>
      </div>

      <p>{message["store-front-page"]}</p>
    </div>
  );
}
