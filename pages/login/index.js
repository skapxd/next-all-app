// @ts-check

import Head from "next/head";
import { AppBarLogin } from "components/login/Brand/AppBarLogin";
import { BackgroundAllAppIcon } from "components/lv0/Icon/BackgroundAllAppIcon";
import { MapOfValidate } from "@skapxd/validate";
import { InputText } from "components/lv0/InputText/InputText";

import Style from "./login.module.scss";
import { useEffect, useState } from "react";
import { Loading } from "components/lv0/Loading/Loading";
import { useSetHeight } from "hooks/useSetHeight";
import { useRouter } from "next/router";
import {
  stateBottomNavigationBarButton,
  TypeBottomNavigationBarButton,
} from "components/lv0/BottomNavigationBarButton/StateBottomNavigationBarButton";
import { validateUserName } from "functionsView/login/validateUserName";
import { validatePass } from "functionsView/login/validatePass";
import { getQueryParams } from "helpers/getQueryParams";

class CurrentPage {
  static validateUserName = "validateUserName";
  static validatePass = "validatePass";
}

/**
 *
 * @param {'validateUserName' | 'validatePass'} step
 * @returns
 */
export const loginPathName = (step = "validateUserName") =>
  `/login?step=${step}`;

export default function LoginPage() {
  useSetHeight();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  /**@type {CurrentPage} */
  const initCurrenPage = CurrentPage.validateUserName;
  const [currentPage, setCurrentPage] = useState(initCurrenPage);

  const [user, setUser] = useState({
    name: {
      value: "",
      isValid: true,
    },
    pass: {
      value: "",
      isValid: true,
    },
    email: {
      value: "",
      isValid: true,
    },
  });

  useEffect(() => {
    setCurrentPage(getQueryParams("step"));
  }, []);

  useEffect(() => {
    const stepQuery = getQueryParams("step");
    setCurrentPage(stepQuery);
  }, [router.asPath]);

  // useEffect(() => {
  //   const url = new URL(`http://localhost:3000${router.asPath}`);

  //   const queryAsString = url.search
  //     .replace("?name=", "")
  //     .replaceAll(/&.*/gi, "");

  //   setUser((s) => ({
  //     ...s,
  //     name: {
  //       isValid: true,
  //       value: queryAsString,
  //     },
  //   }));
  // }, [router.asPath]);

  const onSubmit = async () => {
    setLoading(true);
    try {
      currentPage === CurrentPage.validateUserName &&
        validateUserName({
          email: user.email,
          onFailed: () => {
            setLoading(false);
            setUser((s) => ({
              ...s,
              email: {
                value: s.email.value,
                isValid: false,
              },
            }));
          },
          onSuccess: (data) => {
            setLoading(false);
            setUser((s) => ({
              ...s,
              name: {
                value: data.name,
                isValid: true,
              },
            }));
            router.push(loginPathName("validatePass"));
          },
        });

      currentPage === CurrentPage.validatePass &&
        validatePass({
          email: user.email,
          pass: user.pass,
          onFailed: () => {
            setLoading(false);
            setUser((s) => ({
              ...s,
              pass: {
                isValid: false,
                value: s.pass.value,
              },
            }));
          },
          onSuccess: () => {
            setLoading(false);
            stateBottomNavigationBarButton.changeCurrentButton(
              TypeBottomNavigationBarButton.settings
            );
            router.push("/");
          },
        });
    } catch (error) {}
  };

  return (
    <>
      <Head>
        <meta name="theme-color" content="#1e2029" />
      </Head>

      <div className={Style.Box}>
        {loading && <Loading />}

        <AppBarLogin />

        <BackgroundAllAppIcon className={Style.Box_BackgroundAllAppIcon} />

        {/* {!user.name.value && ( */}
        {currentPage === CurrentPage.validateUserName && (
          <div className={Style.Box_BoxLogin}>
            <h2>Iniciar sesión</h2>
            <InputText
              isValid={user.email.isValid}
              value={user.email.value}
              onSubmit={onSubmit}
              className={Style.Box_InputEmail}
              type={"email"}
              name="Email"
              placeholder="franken@luna.app"
              regExp={MapOfValidate.email}
              onChange={(value, isValid) => {
                setUser((s) => ({
                  ...s,
                  email: {
                    isValid,
                    value,
                  },
                }));
              }}
            />
          </div>
        )}

        {/* {user.name.value && ( */}
        {currentPage === CurrentPage.validatePass && (
          <div className={Style.Box_BoxLogin}>
            <h2>Iniciar sesión</h2>
            <NameUser name={user.name.value} />
            <InputText
              isValid={user.pass.isValid}
              value={user.pass.value}
              onSubmit={onSubmit}
              className={Style.Box_InputPass}
              type={"password"}
              name="Contraseña"
              onChange={(value, isValid) => {
                setUser((s) => ({
                  ...s,
                  pass: {
                    isValid,
                    value,
                  },
                }));
              }}
            />
          </div>
        )}

        <button className={Style.Box_BtnNext} onClick={onSubmit}>
          Siguiente
        </button>
      </div>
    </>
  );
}

/**
 * @param {Object} props
 * @param {string} [props.name]
 * @returns
 */
export function NameUser(props) {
  let { name } = props;

  name ??= "";

  return (
    <div className={Style.BoxName}>
      <div className={Style.BoxName_Icon}>{name.slice(0, 1)}</div> {name}
    </div>
  );
}
