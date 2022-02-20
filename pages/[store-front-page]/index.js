// @ts-check
import Image from "next/image";
import { AppBar } from "components/store-front-page/AppBar/AppBar";
import Style from "./store-front-page.module.scss";
import { getListPost } from "helpers/getListPost";
import { useState } from "react";
import {
  AxisInfiniteScroll,
  InfinityScroll,
} from "components/lv0/InfinityScroll/InfinityScroll";
import Head from "next/head";
import { Metadata } from "components/store-front-page/Metadata/Metadata";
import { convertDayFromNumberToString } from "helpers/convertDayFromNumberToString";
import { getListStore } from "helpers/getListStore";
import { Contact } from "components/store-front-page/Contact/Contact";

/** @type {import("next").GetServerSideProps} */
export const getServerSideProps = async (context) => {
  if (!context.res) {
    return {
      notFound: true,
    };
  }

  const post = getListPost({
    from: 0,
    limit: 20,
  });

  /**@type {StoreModel[]} */
  const listOfStore = getListStore({
    from: 0,
    limit: 1,
  });

  const store = listOfStore[0];

  return {
    props: {
      post,
      store,
      message: context.params,
    },
  };
};

export default function StoreFrontPage(props) {
  /**
   * @type {{
   * store: StoreModel,
   * message: Object,
   * post: import("model/PostModel").PostModel[]
   * }}
   */
  const { store, message, post } = props;

  console.log({
    store,
    message,
    post,
  });

  const [initPost, setInitPost] = useState(post);

  const getSchedule = () => {
    store.schedule;
    const schedule = store.schedule.find((e) => e.day === new Date().getDay());

    const dayAsString = convertDayFromNumberToString({
      day: schedule.day,
      language: "es",
    });

    const _ = `${dayAsString} ${schedule.hour}`;
    return {
      day: dayAsString,
      hour: schedule.hour,
    };
  };

  return (
    <div className={Style.Box}>
      <Head>
        <meta name="theme-color" content="#1e2029" />
      </Head>
      <AppBar />
      <div className={Style.Box_BoxImgAndName}>
        <div className={Style.Box_BoxImgAndName_Img}>
          {/* /placeholder.svg */}
          <Image
            alt={"a"}
            src={store.urlImage}
            className={Style.Box_BoxImgAndName_Img}
            height={100}
            width={100}
          />
        </div>

        <h3 className={Style.Box_BoxImgAndName_Name}>{store.name}</h3>
      </div>

      <div className={Style.Box_BoxUpdateAndRate}>
        <div className={Style.Box_BoxUpdateAndRate_Box}>
          <h4 className={Style.Box_BoxUpdateAndRate_Box_Value}>
            {store.updateDate}
          </h4>

          <h4 className={Style.Box_BoxUpdateAndRate_Box_Name}>Actualización</h4>
        </div>

        <div className={Style.Box_BoxUpdateAndRate_Divider}></div>

        <div className={Style.Box_BoxUpdateAndRate_Box}>
          <h4 className={Style.Box_BoxUpdateAndRate_Box_Value}>
            {store.popular}{" "}
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

      <InfinityScroll
        className={Style.Box_BoxPost}
        axis={AxisInfiniteScroll.horizontal}
        iterable={initPost}
        itemBuilder={(i) => {
          return (
            <div key={i} className={Style.Box_BoxPost_Box}>
              <Image
                alt={initPost[i].id}
                className={Style.Box_BoxPost_Box}
                height={180}
                width={320}
                src={initPost[i].url}
              />
            </div>
          );
        }}
      />

      <Metadata
        title="Horarios"
        description={
          <>
            <b>{getSchedule().day}</b> {getSchedule().hour}{" "}
          </>
        }
      />

      <Metadata
        title="Descripción"
        description={store.description.substring(0, 170) + "..."}
      />

      <Contact contact={store.contact}/>
    </div>
  );
}
