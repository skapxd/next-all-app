// @ts-check
import Image from "next/image";
import { AppBar } from "components/StoreFrontPage/AppBar/AppBar";
import Style from "./store-front-page.module.scss";
import { getListPost } from "helpers/getListPost";
import { useEffect, useState } from "react";
import {
  AxisInfiniteScroll,
  InfinityScroll,
} from "components/global/lv0/InfinityScroll/InfinityScroll";
import Head from "next/head";
import { Metadata } from "components/StoreFrontPage/Metadata/Metadata";
import { convertDayFromNumberToString } from "helpers/convertDayFromNumberToString";
import { getListStore } from "helpers/getListStore";
import { Contact } from "components/StoreFrontPage/Contact/Contact";
import { useRouter } from "next/router";
import { Loading } from "components/global/lv0/Loading/Loading";

export const storeFrontPagePathName = (id = "") => `/${id}`;

export default function StoreFrontPage(props) {
  /**
   * @type {{
   * store: StoreModel,
   * message: Object,
   * post: import("model/PostModel").PostModel[]
   * }}
   */

  /**
   * @type {{
   * store: StoreModel,
   * post: import("model/PostModel").PostModel[]
   * }}
   */
  const initData = null;
  const [data, setData] = useState(initData);
  // const [initPost, setInitPost] = useState(post);

  const getSchedule = () => {
    if (!data) return;
    const schedule = data.store.schedule.find(
      (e) => e.day === new Date().getDay()
    );

    const dayAsString = convertDayFromNumberToString({
      day: schedule.day,
      language: "es",
    });

    return `**${dayAsString}** ${schedule.hour}`;
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const getStore = fetch(`/api/v1/store/get-store/as`);
    const getPost = fetch(
      `/api/v1/store/get-post?id=${10}&limit=${20}&from=${20}`
    );
    const fetchUrl = [getStore, getPost];

    const resp = await Promise.allSettled(fetchUrl);

    const dataAsync = resp.map((e) => {
      if (e.status !== "fulfilled") return;
      return e.value.json();
    });

    const data = await Promise.all(dataAsync);

    setData({
      store: data[0].store,
      post: data[1].listOfPostModel,
    });
  };

  if (!data) {
    return (
      <div className={Style.Box}>
        <AppBar />
        <Loading />;
      </div>
    );
  }

  return (
    <div className={Style.Box}>
      <Head>
        <meta name="theme-color" content="#1e2029" />
      </Head>
      <AppBar />
      <div className={Style.Box_BoxImgAndName}>
        <div className={Style.Box_BoxImgAndName_Img}>
          <Image
            alt={"a"}
            src={data.store.urlImage}
            className={Style.Box_BoxImgAndName_Img}
            height={100}
            width={100}
          />
        </div>

        <h3 className={Style.Box_BoxImgAndName_Name}>{data.store.name}</h3>
      </div>
      <div className={Style.Box_BoxUpdateAndRate}>
        <div className={Style.Box_BoxUpdateAndRate_Box}>
          <h4 className={Style.Box_BoxUpdateAndRate_Box_Value}>
            {data.store.updateDate}
          </h4>

          <h4 className={Style.Box_BoxUpdateAndRate_Box_Name}>Actualización</h4>
        </div>

        <div className={Style.Box_BoxUpdateAndRate_Divider}></div>

        <div className={Style.Box_BoxUpdateAndRate_Box}>
          <h4 className={Style.Box_BoxUpdateAndRate_Box_Value}>
            {data.store.popular}{" "}
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
        iterable={data.post}
        itemBuilder={(i) => {
          return (
            <div key={i} className={Style.Box_BoxPost_Box}>
              <Image
                alt={data.post[i].id}
                className={Style.Box_BoxPost_Box}
                height={180}
                width={320}
                src={data.post[i].url}
              />
            </div>
          );
        }}
      />
      <Metadata title="Horarios" description={getSchedule()} />
      <Metadata
        title="Descripción"
        description={data.store.description.substring(0, 170) + "..."}
      />
      <Contact contact={data.store.contact} />
    </div>
  );
}
